import { ImageResponse } from "next/og";

export const alt = "Muslim Scale Accelerator";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 600,
        color: "#171717",
      }}
    >
      <div style={{ marginBottom: 40, color: "#059669" }}>Muslim Scale Accelerator</div>
      <div style={{ fontSize: 48, fontWeight: 400, color: "#525252" }}>
        Double your revenue or your fee back
      </div>
    </div>,
    {
      ...size,
    }
  );
}
