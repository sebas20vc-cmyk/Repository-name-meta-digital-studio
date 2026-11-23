import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Local",
  description:
    "Haz que tu negocio sea encontrado en Google. Estrategia de SEO Local, optimización de Google Business Profile y presencia digital para impulsar tu negocio.",
  keywords: [
    "SEO Local",
    "SEO Local Villavicencio",
    "Google Business Profile",
    "posicionamiento local",
    "Google Maps",
    "visibilidad en Google",
  ],
  openGraph: {
    title: "SEO Local | Meta Digital Studio",
    description:
      "Impulsa la presencia de tu negocio en Google con una estrategia de SEO Local enfocada en visibilidad, confianza y crecimiento.",
    type: "website",
  },
};

export default function SeoLocalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}