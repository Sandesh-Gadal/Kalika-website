import { contact } from "@/lib/contact";
import { siteConfig } from "@/lib/site";

// schema.org structured data — this is what search engines use for rich
// results and what AI answer engines (Google AI Overviews, ChatGPT,
// Perplexity, etc.) lean on most heavily to extract reliable facts about the
// business, since it's structured rather than free text. Keep the facts here
// in sync with contact.ts and the visible page content (footer hours, etc.)
// — mismatched NAP (name/address/phone) data actively hurts local SEO.
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: contact.phoneHref.replace("tel:", ""),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address,
      addressLocality: "Bharatpur",
      addressRegion: "Bagmati Province",
      addressCountry: "NP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contact.lat,
      longitude: contact.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    areaServed: "NP",
    // 24/7 emergency/roadside response sits outside the shop's regular hours.
    additionalProperty: {
      "@type": "PropertyValue",
      name: "Emergency roadside support",
      value: "24/7",
    },
  };
}

export function servicesJsonLd(services: { title: string; items: string[] }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: service.title,
        provider: { "@type": "AutoRepair", name: siteConfig.name },
        areaServed: "NP",
        description: service.items.join(", "),
      },
    })),
  };
}

export function faqPageJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
