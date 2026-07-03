import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — I turn ambitious ideas into shipped products`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const background = "#f8f5f0";
const foreground = "#1a1614";
const accent = "#d94f0e";

export default async function OpenGraphImage() {
  const [frauncesMedium, interRegular] = await Promise.all([
    fetch(
      "https://fonts.gstatic.com/s/fraunces/v32/6NUh8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib1603gg7S2nfgRYIctxujDvTShUtWNg.ttf",
    ).then((res) => res.arrayBuffer()),
    fetch(
      "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf",
    ).then((res) => res.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background,
          color: foreground,
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontFamily: "Inter",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 48,
              height: 48,
              borderRadius: 999,
              alignItems: "center",
              justifyContent: "center",
              background: foreground,
              color: background,
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            RB
          </div>
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 980,
            fontFamily: "Fraunces",
            fontSize: 72,
            lineHeight: 1.15,
            letterSpacing: -2,
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex" }}>
            <span>I turn&nbsp;</span>
            <span style={{ color: accent }}>ambitious ideas</span>
          </div>
          <div style={{ display: "flex" }}>into shipped products.</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: frauncesMedium, style: "normal", weight: 500 },
        { name: "Inter", data: interRegular, style: "normal", weight: 400 },
      ],
    },
  );
}
