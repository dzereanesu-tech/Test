import { query } from "./_generated/server";
import { v } from "convex/values";

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

    // Mock stats calculation
    return {
      activeTours: bookings.filter(b => b.status === "in_progress").length,
      newEnquiries: bookings.filter(b => b.status === "enquiry").length,
      monthlyRevenue: bookings
        .filter(b => b.status === "confirmed" || b.status === "completed")
        .reduce((acc, b) => acc + b.total_price_usd, 0),
      outstandingBalance: bookings.reduce((acc, b) => acc + b.balance_usd, 0),
    };
  },
});

export const getUpcomingDepartures = query({
  args: { org_id: v.id("organizations") },
  returns: v.array(v.object({
    _id: v.id("bookings"),
    booking_ref: v.string(),
    lead_traveler_name: v.string(),
    pax_count: v.number(),
    start_date: v.string(),
    status: v.string(),
    payment_status: v.string(),
  })),
  handler: async (ctx, args) => {
    return await ctx.db
      .query("bookings")
      .withIndex("by_org_id", (q) => q.eq("org_id", args.org_id))
      .order("desc")
      .take(10);
  },
});

export const getOrganizationBySlug = query({
    args: { slug: v.string() },
    returns: v.union(v.null(), v.object({
        _id: v.id("organizations"),
        name: v.string(),
        slug: v.string(),
    })),
    handler: async (ctx, args) => {
        return await ctx.db
            .query("organizations")
            .withIndex("by_slug", (q) => q.eq("slug", args.slug))
            .first();
    }
})
