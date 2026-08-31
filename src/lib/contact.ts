// TODO: replace with the workshop's real contact details before launch,
// including the real lat/lng (currently a placeholder pin in Kathmandu).
export const contact = {
  phoneDisplay: "+977 98X-XXX-XXX",
  phoneHref: "tel:+97798XXXXXXX",
  whatsappNumber: "9779821275659",
  email: "info@kalikabattery.com",
  address: "Kalika Battery & Wiring Repairing Center, Nepal",
  lat: 27.7172,
  lng: 85.324,
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${contact.lat},${contact.lng}`;

export const whatsappHref = (message?: string) =>
  `https://wa.me/${contact.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
