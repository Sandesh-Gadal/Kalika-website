// TODO: replace phoneDisplay/phoneHref with the workshop's real phone number,
// and confirm the exact lat/lng once known (currently Bharatpur city center,
// not the precise workshop pin).
export const contact = {
  phoneDisplay: "+977 98X-XXX-XXX",
  phoneHref: "tel:+97798XXXXXXX",
  whatsappNumber: "9779821275659",
  whatsappDisplay: "+977 982-1275659",
  email: "info@kalikabattery.com",
  address: "Bharatpur-9, Chitwan, Narayani Zone, Nepal",
  lat: 27.6588,
  lng: 84.4392,
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${contact.lat},${contact.lng}`;

export const whatsappHref = (message?: string) =>
  `https://wa.me/${contact.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
