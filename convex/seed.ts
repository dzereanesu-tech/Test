import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const seed = mutation({
  args: {},
  returns: v.null(),
  handler: async (ctx) => {
    const orgId = await ctx.db.insert("organizations", {
      name: "Victoria Falls Safaris",
      slug: "vic-falls-safaris",
      type: "operator",
      country: "Zimbabwe",
      city: "Victoria Falls",
      verified: true,
      plan: "professional",
    });

    await ctx.db.insert("users", {
      org_id: orgId,
      email: "anesu@oviasoftware.com",
      full_name: "Anesu T. Dzere",
      role: "owner",
      last_active_at: Date.now(),
    });

    const packageId = await ctx.db.insert("packages", {
      org_id: orgId,
      title: "Victoria Falls Day Tour",
      slug: "vic-falls-day-tour",
      description: "A complete tour of the magnificent Victoria Falls.",
      type: "day_trip",
      duration_days: 1,
      min_pax: 1,
      max_pax: 12,
      base_price_usd: 50,
      currency: "USD",
      destinations: [{ name: "Victoria Falls", country: "Zimbabwe", lat: -17.9243, lng: 25.8572 }],
      inclusions: ["Guided tour", "Water", "Park fees"],
      exclusions: ["Lunch", "Tips"],
      highlights: ["Main Falls", "Devil's Cataract"],
      gallery_urls: [],
      status: "active",
      seasonal_pricing: [],
    });

    const customerId = await ctx.db.insert("customers", {
      org_id: orgId,
      full_name: "John Doe",
      email: "john@example.com",
      total_bookings: 1,
      total_spend_usd: 200,
      tags: ["vip"],
    });

    await ctx.db.insert("bookings", {
      booking_ref: "OVT-2025-0001",
      org_id: orgId,
      package_id: packageId,
      customer_id: customerId,
      lead_traveler_name: "John Doe",
      pax_count: 4,
      pax_details: [{ name: "John Doe" }, { name: "Jane Doe" }],
      start_date: "2025-08-01",
      end_date: "2025-08-01",
      status: "confirmed",
      payment_status: "fully_paid",
      total_price_usd: 200,
      deposit_usd: 50,
      balance_usd: 0,
      source: "direct",
      documents: [],
    });

    return null;
  },
});
