import { ImageResponse } from "next/og";
export const alt = "Richie Budijono — Software Engineer & Maker";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", background: "#f9f8f5", color: "#242629", padding: 90 }}>
      <div style={{ fontSize: 60, fontWeight: 700 }}>Richie Budijono</div>
      <div style={{ fontSize: 30, marginTop: 25, color: "#5b5e65" }}>Software engineer & maker of web and mobile products.</div>
      <div style={{ display: "flex", fontSize: 23, marginTop: 70, color: "#4c4bac" }}>Projects · Experience · Writing</div>
      <div style={{ fontSize: 20, marginTop: 20, color: "#5b5e65" }}>richiebudijono.com</div>
    </div>, size,
  );
}

