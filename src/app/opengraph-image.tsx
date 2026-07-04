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
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: DEEP_CHARCOAL,
          backgroundImage: `radial-gradient(circle at 85% 15%, rgba(182,248,41,0.14), transparent 45%)`,
          padding: "80px 96px",
          fontFamily: "sans-serif",
          borderTop: `10px solid ${LUMINOUS_LIME}`,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            color: LUMINOUS_LIME,
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          {"< Portfólio />"}
        </div>

        {/* Nome */}
        <div
          style={{
            display: "flex",
            color: WHITE,
            fontSize: 104,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: -2,
          }}
        >
          Matthew Nascimento
        </div>

        {/* Cargo */}
        <div
          style={{
            display: "flex",
            color: LUMINOUS_LIME,
            fontSize: 46,
            fontWeight: 600,
            marginTop: 20,
          }}
        >
          Software Engineer · React &amp; Next.js
        </div>

        {/* Descrição */}
        <div
          style={{
            display: "flex",
            color: SOFT_GRAY,
            fontSize: 30,
            lineHeight: 1.4,
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          +4 anos criando interfaces web performáticas e acessíveis com
          TypeScript.
        </div>

        {/* Rodapé */}
        <div
          style={{
            display: "flex",
            color: SOFT_GRAY,
            fontSize: 26,
            marginTop: 44,
          }}
        >
          📍 Belo Horizonte, MG · github.com/xMattRx
        </div>
      </div>
    ),
    { ...size }
  );
}
