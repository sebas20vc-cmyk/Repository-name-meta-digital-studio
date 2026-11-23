import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoría de Marketing",
  description:
    "Consultoría de marketing para definir estrategias, identificar oportunidades y orientar las acciones digitales de tu negocio hacia objetivos claros de crecimiento.",
  keywords: [
    "Consultoría de Marketing",
    "estrategia de marketing",
    "marketing digital",
    "estrategia digital",
    "consultoría de marketing Villavicencio",
    "crecimiento digital",
    "estrategia comercial",
  ],
  openGraph: {
    title: "Consultoría de Marketing | Meta Digital Studio",
    description:
      "Define una estrategia digital clara para impulsar el crecimiento de tu negocio con orientación y análisis enfocados en tus objetivos.",
    type: "website",
  },
};

export default function ConsultoriaMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}