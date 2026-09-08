export const contact = {
  phoneDisplay: "+977 982-1275659",
  phoneHref: "tel:+9779821275659",
  whatsappNumber: "9779821275659",
  whatsappDisplay: "+977 982-1275659",
  email: "info@kalikawiring.com.np",
  address: "Near Paras Bus Park, Bharatpur-9, Chitwan, Bagmati Province, Nepal",
  lat: 27.6702,
  lng: 84.4403,
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${contact.lat},${contact.lng}`;

export const whatsappHref = (message?: string) =>
  `https://wa.me/${contact.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
