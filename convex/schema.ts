import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  organizations: defineTable({
    name: v.string(),
    slug: v.string(), // used for subdomain or identifying the tenant
    type: v.union(
      v.literal("operator"),
      v.literal("lodge"),
      v.literal("guide_agency"),
      v.literal("activity_provider")
    ),
    country: v.string(),
    city: v.string(),
    logo_url: v.optional(v.string()),
    verified: v.boolean(),
    plan: v.union(
      v.literal("free"),
      v.literal("starter"),
      v.literal("professional"),
      v.literal("enterprise")
    ),
    stripe_customer_id: v.optional(v.string()),
  }).index("by_slug", ["slug"]),

  users: defineTable({
    org_id: v.id("organizations"),
    email: v.string(),
    full_name: v.string(),
    role: v.union(
      v.literal("owner"),
      v.literal("admin"),
      v.literal("operator"),
      v.literal("guide"),
      v.literal("accountant"),
      v.literal("viewer")
    ),
    phone: v.optional(v.string()),
    avatar_url: v.optional(v.string()),
    last_active_at: v.number(),
  }).index("by_org_id", ["org_id"]).index("by_email", ["email"]),

  packages: defineTable({
    org_id: v.id("organizations"),
    title: v.string(),
    slug: v.string(),
    description: v.string(),
    type: v.union(
      v.literal("day_trip"),
      v.literal("multi_day"),
      v.literal("private"),
      v.literal("group"),
      v.literal("luxury"),
      v.literal("budget")
    ),
    duration_days: v.number(),
    min_pax: v.number(),
    max_pax: v.number(),
    base_price_usd: v.number(),
    currency: v.string(),
    destinations: v.array(v.object({
      name: v.string(),
      country: v.string(),
      lat: v.number(),
      lng: v.number()
    })),
    inclusions: v.array(v.string()),
    exclusions: v.array(v.string()),
    highlights: v.array(v.string()),
    cover_image_url: v.optional(v.string()),
    gallery_urls: v.array(v.string()),
    status: v.union(v.literal("draft"), v.literal("active"), v.literal("archived")),
    seasonal_pricing: v.array(v.object({
      months: v.array(v.number()),
      multiplier: v.number()
    })),
  }).index("by_org_id", ["org_id"]),

  bookings: defineTable({
    booking_ref: v.string(), // e.g. OVT-2025-00847
    org_id: v.id("organizations"),
    package_id: v.id("packages"),
    customer_id: v.id("customers"),
    lead_traveler_name: v.string(),
    pax_count: v.number(),
    pax_details: v.array(v.object({
      name: v.string(),
      passport: v.optional(v.string()),
      nationality: v.optional(v.string()),
      dietary: v.optional(v.string())
    })),
    start_date: v.string(), // ISO date string
    end_date: v.string(), // ISO date string
    status: v.union(
      v.literal("enquiry"),
      v.literal("quote_sent"),
      v.literal("confirmed"),
      v.literal("in_progress"),
      v.literal("completed"),
      v.literal("cancelled"),
      v.literal("no_show")
    ),
    payment_status: v.union(
      v.literal("unpaid"),
      v.literal("deposit_paid"),
      v.literal("partial"),
      v.literal("fully_paid"),
      v.literal("refunded")
    ),
    total_price_usd: v.number(),
    deposit_usd: v.number(),
    balance_usd: v.number(),
    currency_paid: v.optional(v.string()),
    special_requests: v.optional(v.string()),
    internal_notes: v.optional(v.string()),
    assigned_guide_id: v.optional(v.id("users")),
    source: v.union(
      v.literal("direct"),
      v.literal("whatsapp"),
      v.literal("website"),
      v.literal("referral"),
      v.literal("viator"),
      v.literal("tripadvisor"),
      v.literal("other")
    ),
    source_detail: v.optional(v.string()),
    documents: v.array(v.object({
      type: v.string(),
      url: v.string(),
      verified: v.boolean()
    })),
  }).index("by_org_id", ["org_id"]).index("by_booking_ref", ["booking_ref"]),

  customers: defineTable({
    org_id: v.id("organizations"),
    full_name: v.string(),
    email: v.optional(v.string()),
    phone: v.optional(v.string()),
    whatsapp_number: v.optional(v.string()),
    nationality: v.optional(v.string()),
    passport_number: v.optional(v.string()),
    dietary_requirements: v.optional(v.string()),
    medical_notes: v.optional(v.string()),
    total_bookings: v.number(),
    total_spend_usd: v.number(),
    first_booking_date: v.optional(v.string()),
    last_booking_date: v.optional(v.string()),
    referral_source: v.optional(v.string()),
    tags: v.array(v.string()),
    notes: v.optional(v.string()),
  }).index("by_org_id", ["org_id"]),
});
