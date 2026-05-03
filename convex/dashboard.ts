import { query } from "./_generated/server";
import { v } from "convex/values";

const organizationPreviewValidator = v.object({
  _id: v.id("organizations"),
  name: v.string(),
  slug: v.string(),
  plan: v.union(
    v.literal("free"),
    v.literal("starter"),
    v.literal("professional"),
    v.literal("enterprise"),
  ),
  country: v.string(),
  city: v.string(),
});

const bookingStatusValidator = v.union(
  v.literal("enquiry"),
  v.literal("quote_sent"),
  v.literal("confirmed"),
  v.literal("in_progress"),
  v.literal("completed"),
  v.literal("cancelled"),
  v.literal("no_show"),
);

const paymentStatusValidator = v.union(
  v.literal("unpaid"),
  v.literal("deposit_paid"),
  v.literal("partial"),
  v.literal("fully_paid"),
  v.literal("refunded"),
);

export const getOrganizationBySlug = query({
  args: { slug: v.string() },
  returns: v.union(v.null(), organizationPreviewValidator),
  handler: async (ctx, args) => {
    const organization = await ctx.db
      .query("organizations")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (!organization) {
      return null;
    }

    return {
      _id: organization._id,
      name: organization.name,
      slug: organization.slug,
      plan: organization.plan,
      country: organization.country,
      city: organization.city,
    };
  },
});

export const getFirstOrganization = query({
  args: {},
  returns: v.union(v.null(), organizationPreviewValidator),
  handler: async (ctx) => {
    const organization = await ctx.db.query("organizations").first();

    if (!organization) {
      return null;
    }

    return {
      _id: organization._id,
      name: organization.name,
      slug: organization.slug,
      plan: organization.plan,
      country: organization.country,
      city: organization.city,
    };
  },
});

export const getStats = query({
  args: { org_id: v.id("organizations") },
  returns: v.object({
    activeTours: v.number(),
    newEnquiries: v.number(),
    monthlyRevenue: v.number(),
    outstandingBalance: v.number(),
  }),
  handler: async (ctx, args) => {
    const bookings = await ctx.db
      .query("bookings")
      .withIndex("by_org_id", (q) => q.eq("org_id", args.org_id))
      .collect();

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    let activeTours = 0;
    let newEnquiries = 0;
    let monthlyRevenue = 0;
    let outstandingBalance = 0;

    for (const booking of bookings) {
      if (booking.status === "in_progress") {
        activeTours += 1;
      }

      if (booking.status === "enquiry") {
        newEnquiries += 1;
      }

      const tripStartDate = new Date(booking.start_date);
      const isCurrentMonth =
        tripStartDate.getMonth() === currentMonth &&
        tripStartDate.getFullYear() === currentYear;

      if (
        isCurrentMonth &&
        (booking.status === "confirmed" || booking.status === "completed")
      ) {
        monthlyRevenue += booking.total_price_usd;
      }

      outstandingBalance += booking.balance_usd;
    }

    return {
      activeTours,
      newEnquiries,
      monthlyRevenue,
      outstandingBalance,
    };
  },
});

export const getUpcomingDepartures = query({
  args: { org_id: v.id("organizations") },
  returns: v.array(
    v.object({
      _id: v.id("bookings"),
      booking_ref: v.string(),
      lead_traveler_name: v.string(),
      pax_count: v.number(),
      start_date: v.string(),
      status: bookingStatusValidator,
      payment_status: paymentStatusValidator,
    }),
  ),
  handler: async (ctx, args) => {
    const todayIso = new Date().toISOString().slice(0, 10);

    const bookings = await ctx.db
      .query("bookings")
      .withIndex("by_org_id_and_start_date", (q) =>
        q.eq("org_id", args.org_id).gte("start_date", todayIso),
      )
      .order("asc")
      .take(10);

    return bookings.map((booking) => ({
      _id: booking._id,
      booking_ref: booking.booking_ref,
      lead_traveler_name: booking.lead_traveler_name,
      pax_count: booking.pax_count,
      start_date: booking.start_date,
      status: booking.status,
      payment_status: booking.payment_status,
    }));
  },
});
