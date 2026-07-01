import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — I turn messy app ideas into shipped products`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const background = "#f6f3ed";
const foreground = "#161a1d";
const accent = "#3d6f56";

export default async function OpenGraphImage() {
  const [bitterMedium, interRegular] = await Promise.all([
    fetch(
      "https://fonts.gstatic.com/s/bitter/v42/raxhHiqOu8IVPmnRc6SY1KXhnF_Y8cTfCL8.ttf",
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
            maxWidth: 980,
            fontFamily: "Bitter",
            fontSize: 72,
            lineHeight: 1.05,
            letterSpacing: -2,
            fontWeight: 500,
          }}
        >
          I turn <span style={{ color: accent }}>messy app ideas</span> into
          shipped products.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Bitter",
          data: bitterMedium,
          style: "normal",
          weight: 500,
        },
        {
          name: "Inter",
          data: interRegular,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
