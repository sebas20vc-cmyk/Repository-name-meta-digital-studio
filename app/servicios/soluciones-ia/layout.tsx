import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluciones con IA",
  description:
    "Integra soluciones con Inteligencia Artificial para optimizar procesos, mejorar la atención y encontrar nuevas oportunidades de crecimiento para tu negocio.",
  keywords: [
    "Soluciones con IA",
    "Inteligencia Artificial para empresas",
    "IA para negocios",
    "automatización con IA",
    "IA para empresas",
    "Inteligencia Artificial Villavicencio",
    "automatización de procesos",
    "herramientas de IA",
  ],
  openGraph: {
    title: "Soluciones con IA | Meta Digital Studio",
    description:
      "Integra Inteligencia Artificial en tu negocio para optimizar procesos, mejorar la atención y potenciar nuevas oportunidades de crecimiento.",
    type: "website",
  },
};

export default function SolucionesIaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}