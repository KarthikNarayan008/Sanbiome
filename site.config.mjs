// Everything Sanbiome has to confirm before launch lives here. Empty string = not set yet:
// the build hides that item instead of faking it.
export default {
  siteUrl: process.env.SITE_URL || "https://sanbiome.onrender.com", // used for canonical, sitemap, Open Graph
  email: "", // e.g. hello@sanbiome.com
  whatsapp: "", // digits only with country code, e.g. 919876543210
  instagram: "", // full URL
  linkedin: "", // full URL
  // Booking platform links (Calendly, Cal.com, Razorpay page ...). Empty = buttons go to the Contact page.
  bookingLinks: { free: "https://calendly.com/team-sanbiome/30min" },
  // Plausible domain for privacy-friendly analytics. Empty = no analytics script.
  analyticsDomain: process.env.ANALYTICS_DOMAIN || "",
  // Shown on program pages only when filled in. Never invent these.
  programDetails: {
    "gut-health": { duration: "3 months", frequency: "", responseTime: "", fee: "" },
    "hormonal-health": { duration: "", frequency: "", responseTime: "", fee: "" },
    "diabetes-metabolic-health": { duration: "", frequency: "", responseTime: "", fee: "" },
    "womens-health": { duration: "", frequency: "", responseTime: "", fee: "" },
  },
  // Genuine, permissioned client feedback only: { quote: "...", name: "First name, city" }
  testimonials: [],
};
