// Verified, on-theme stock photography from Pexels (free license) standing in
// for real workshop photography. Each id was hand-checked to actually show
// the described subject — see docs/PROJECT_BRIEF.md. Vehicle shots are
// chosen to match Nepal/India roads specifically (Ashok Leyland, Eicher,
// tippers) rather than generic Western trucks. Before launch, download these
// (or real shop photos) and self-host them instead of hotlinking.
export const stockPhotos = {
  batteryCloseup: "4374843", // red car battery terminal, engine bay
  diagnosticsHand: "8478233", // mechanic's hand reaching into engine bay
  underCarLift: "32152037", // mechanic working under a lifted vehicle
  monoEngineBay: "8985714", // b/w mechanic leaning over an open engine bay
  obdScanner: "6870332", // mechanic using a handheld diagnostic scanner
  ashokLeylandTruck: "20922619", // Ashok Leyland cargo truck on an Indian highway
  eicherSchoolBus: "28203486", // Eicher-branded yellow school bus, India
  tipperTruck: "15488010", // tipper/dumper truck offloading, rural India
  dynamoRewind: "16048266", // technician rewinding a dynamo/motor armature
  batteryChargingClamps: "5572260", // jumper cable clamps on a car battery
} as const;

export type StockPhotoKey = keyof typeof stockPhotos;

export function pexelsUrl(key: StockPhotoKey, width = 800) {
  const id = stockPhotos[key];
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}
