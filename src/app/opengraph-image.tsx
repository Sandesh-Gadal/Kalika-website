import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0F4C81 0%, #0b3660 60%, #050b16 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#1E88E5",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            K
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, opacity: 0.85 }}>
            Kalika Battery &amp; Wiring
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 58, fontWeight: 700, lineHeight: 1.15 }}>
          Vehicle Battery &amp; Wiring Repair, Done Right.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "#9fc4e8",
            maxWidth: 900,
          }}
        >
          Battery diagnostics · Alternator &amp; dynamo rewinding · Fleet
          electrical repair
        </div>
      </div>
    ),
    { ...size },
  );
}
