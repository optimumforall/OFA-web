import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#1D3461",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#D4793B",
          fontWeight: 700,
          fontSize: 16,
          fontFamily: "sans-serif",
          letterSpacing: "-0.5px",
        }}
      >
        O
      </div>
    ),
    { ...size }
  );
}
