import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diseño Web",
  description:
    "Diseño de sitios web profesionales, modernos y orientados a resultados para fortalecer la presencia digital de tu negocio y convertir visitas en oportunidades.",
  keywords: [
    "Diseño Web",
    "Diseño de páginas web",
    "páginas web para empresas",
    "sitios web profesionales",
    "Diseño Web Villavicencio",
    "Desarrollo Web",
    "presencia digital",
  ],
  openGraph: {
    title: "Diseño Web | Meta Digital Studio",
    description:
      "Creamos sitios web profesionales que fortalecen la presencia digital de tu negocio y convierten tu presencia en oportunidades.",
    type: "website",
  },
};

export default function DisenoWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}