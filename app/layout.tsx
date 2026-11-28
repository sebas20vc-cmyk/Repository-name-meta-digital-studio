import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://metadigitalstudio.com"),

  title: {
    default: "Meta Digital Studio | Estrategia & crecimiento digital",
    template: "%s | Meta Digital Studio",
  },

  description:
    "Meta Digital Studio impulsa negocios con SEO Local, Diseño Web, Consultoría de Marketing y Soluciones con IA. Estrategia & crecimiento digital.",

  keywords: [
    "Meta Digital Studio",
    "SEO Local",
    "SEO Local Villavicencio",
    "Google Business Profile",
    "Diseño Web",
    "Consultoría de Marketing",
    "Soluciones con IA",
    "Marketing Digital",
    "Villavicencio",
    "Colombia",
  ],

  authors: [
    {
      name: "Meta Digital Studio",
    },
  ],

  creator: "Meta Digital Studio",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://metadigitalstudio.com",
    siteName: "Meta Digital Studio",
    title: "Meta Digital Studio | Estrategia & crecimiento digital",
    description:
      "SEO Local, Diseño Web, Consultoría de Marketing y Soluciones con IA para impulsar el crecimiento de tu negocio.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Meta Digital Studio | Estrategia & crecimiento digital",
    description:
      "SEO Local, Diseño Web, Consultoría de Marketing y Soluciones con IA.",
  },

  icons: {
    icon: "/logo-mds.png",
    shortcut: "/logo-mds.png",
    apple: "/logo-mds.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F5BKBZ03L2"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F5BKBZ03L2');
          `}
        </Script>
      </body>
    </html>
  );
}