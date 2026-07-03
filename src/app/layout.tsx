import type { Metadata } from "next";
import { ThemeProvider } from "./Context/ThemeContext";
import "./globals.scss";

const siteUrl = "https://portfoliomatt.vercel.app";
const siteDescription =
  "Matthew Nascimento — Software Engineer com mais de 4 anos de experiência em React, Next.js e TypeScript. Interfaces modernas, performáticas e acessíveis. Veja meus projetos e experiência.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Matthew Nascimento | Software Engineer React & Next.js",
    template: "%s | Matthew Nascimento",
  },
  description: siteDescription,
  keywords: [
    "Matthew Nascimento",
    "Software Engineer",
    "Desenvolvedor Front-End",
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "SCSS",
    "Portfólio",
    "Belo Horizonte",
  ],
  authors: [{ name: "Matthew Nascimento", url: "https://github.com/xMattRx" }],
  creator: "Matthew Nascimento",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Matthew Nascimento",
    title: "Matthew Nascimento | Software Engineer React & Next.js",
    description: siteDescription,
    images: [
      {
        url: "/perfil.png",
        width: 360,
        height: 520,
        alt: "Matthew Nascimento — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Nascimento | Software Engineer React & Next.js",
    description: siteDescription,
    images: ["/perfil.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
