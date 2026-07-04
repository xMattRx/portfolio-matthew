import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Matthew Nascimento — Software Engineer React & Next.js";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Cores do design system (variables.scss)
const DEEP_CHARCOAL = "#141414";
const LUMINOUS_LIME = "#b6f829";
const SOFT_GRAY = "#a3a3a3";
const WHITE = "#ffffff";

export default async function Image() {
  const photoData = await fetch(
    new URL("./perfil.png", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const photoSrc = `data:image/png;base64,${Buffer.from(photoData).toString(
    "base64"
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: DEEP_CHARCOAL,
          backgroundImage: `radial-gradient(circle at 80% 20%, rgba(182,248,41,0.12), transparent 45%)`,
          padding: "72px 80px",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        {/* Texto */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 660 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: LUMINOUS_LIME,
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            {"< Portfólio />"}
          </div>

          <div
            style={{
              display: "flex",
              color: WHITE,
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            Matthew Nascimento
          </div>

          <div
            style={{
              display: "flex",
              color: LUMINOUS_LIME,
              fontSize: 38,
              fontWeight: 600,
              marginTop: 16,
            }}
          >
            Software Engineer · React &amp; Next.js
          </div>

          <div
            style={{
              display: "flex",
              color: SOFT_GRAY,
              fontSize: 27,
              lineHeight: 1.4,
              marginTop: 28,
            }}
          >
            +4 anos criando interfaces web performáticas e acessíveis com
            TypeScript.
          </div>

          <div
            style={{
              display: "flex",
              color: SOFT_GRAY,
              fontSize: 24,
              marginTop: 36,
            }}
          >
            📍 Belo Horizonte, MG · github.com/xMattRx
          </div>
        </div>

        {/* Foto */}
        <div
          style={{
            display: "flex",
            width: 360,
            height: 360,
            borderRadius: "50%",
            border: `8px solid ${LUMINOUS_LIME}`,
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <img
            src={photoSrc}
            width={360}
            height={360}
            style={{ objectFit: "cover" }}
            alt=""
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
