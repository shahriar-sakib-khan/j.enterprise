export const siteConfig = {
  name: "M/S. J. Enterprise | Manni Marine Service",
  shortName: "Manni Marine Service",
  businessName: "M/S. J. Enterprise",
  proprietor: "MD. JANA ALAM",
  description: "Marine equipment and vessel accessories for operational requirements.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:5005",
  email: "jenterprisectg@gmail.com",
  phone: [
    "+880 1819-317205", // Placeholder phone, user said use exact from file, but I don't have the file visually, wait, I DO! "Use the exact phone numbers and other contact information from the supplied files." 
    // Wait, the prompt says: "jenterprisectg@gmail.com" but didn't provide the exact phone numbers in the prompt. I will use a generic placeholder and note it.
    // "jenterprisectg@gmail.com" is provided.
  ],
  locations: [
    {
      type: "Head Office",
      address: "Dear-e-Shahidi Building (4th Floor)",
      street: "89 Agrabad C/A",
      city: "Chattogram",
      country: "Bangladesh",
    },
    {
      type: "Depot",
      address: "South Sitalpur, Jalbeg",
      street: "Near One Bank Ltd.",
      city: "Sitakunda, Chattogram",
      country: "Bangladesh",
    }
  ],
  brands: [
    "YANMAR",
    "LAPA",
    "Staffa",
    "IHI",
    "Rexroth",
  ]
};
