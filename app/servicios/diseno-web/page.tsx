
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DisenoWebPage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050b18] text-white">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[130px]" />
        <div className="absolute right-[-10%] top-[35%] h-[500px] w-[500px] rounded-full bg-orange-500/[0.06] blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[35%] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.04] blur-[130px]" />
      </div>

      {/* NAVBAR */}
      <header className="fixed left-1/2 top-5 z-50 w-[calc(100%-32px)] max-w-6xl -translate-x-1/2">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-[#071225]/75 px-5 py-3 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,0,0,0.25)]">
          <Link href="/" className="flex items-center">
            <img
              src="/logo-mds.png"
              alt="Meta Digital Studio"
              className="h-18 w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center gap-7 text-sm text-white/60 md:flex">
            <Link href="/" className="transition hover:text-white">
              Inicio
            </Link>

            <Link
              href="/#servicios"
              className="text-white transition"
            >
              Servicios
            </Link>

            <Link
              href="/#proceso"
              className="transition hover:text-white"
            >
              Proceso
            </Link>

            <Link
              href="/#nosotros"
              className="transition hover:text-white"
            >
              Nosotros
            </Link>

            <Link
              href="/#contacto"
              className="transition hover:text-white"
            >
              Contacto
            </Link>
          </div>

          <Link
            href="/#contacto"
            className="rounded-full border border-green-400/30 bg-green-500/[0.08] px-5 py-2.5 text-xs font-semibold text-green-300 transition hover:border-green-400/50 hover:bg-green-500/15"
          >
            Hablemos
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-44 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/[0.06] px-4 py-2 text-xs font-medium text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
              DISEÑO WEB
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Haz que cuando
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-white to-orange-300 bg-clip-text text-transparent">
                te encuentren,
              </span>
              <br />
              quieran conocerte.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Una página web no debería ser solo una tarjeta digital.
              Debe ayudarte a presentar tu negocio, transmitir confianza
              y facilitar que una persona tome el siguiente paso.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contacto"
                className="group rounded-full bg-[#22C55E] px-7 py-4 text-center text-sm font-semibold text-white transition duration-300 hover:bg-[#16A34A] hover:shadow-[0_15px_45px_rgba(34,197,94,0.35)]"
              >
                Quiero hablar de mi proyecto
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href="#propuesta"
                className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-center text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
              >
                Conocer el servicio
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/35">
              <span>✓ Diseño personalizado</span>
              <span>✓ Enfoque en conversión</span>
              <span>✓ Adaptado a móviles</span>
            </div>
          </div>

          {/* RIGHT - WEB 3D VISUAL */}
          <div className="relative flex min-h-[520px] items-center justify-center">
            <div
              className="absolute h-[420px] w-[420px] rounded-full border border-blue-400/10"
              style={{
                transform: `translate3d(${mouse.x * -18}px, ${
                  mouse.y * -14
                }px, 0)`,
              }}
            />

            <div
              className="absolute h-[340px] w-[340px] rounded-full border border-orange-400/10"
              style={{
                transform: `translate3d(${mouse.x * 20}px, ${
                  mouse.y * 16
                }px, 0)`,
              }}
            />

            <div
              className="absolute h-[260px] w-[260px] rounded-full border border-white/10"
              style={{
                transform: `translate3d(${mouse.x * -25}px, ${
                  mouse.y * 22
                }px, 0)`,
              }}
            />

            {/* GLOW */}
            <div className="absolute h-64 w-64 rounded-full bg-blue-500/[0.10] blur-[90px]" />

            {/* LAPTOP */}
            <div
              className="relative z-10 w-full max-w-[500px]"
              style={{
                transform: `
                  perspective(1200px)
                  rotateX(${mouse.y * -5}deg)
                  rotateY(${mouse.x * 7}deg)
                  translate3d(${mouse.x * 8}px, ${mouse.y * 8}px, 0)
                `,
                transition: "transform 0.15s ease-out",
              }}
            >
              <div className="rounded-[24px] border border-white/15 bg-[#0a1427]/90 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                {/* BROWSER BAR */}
                <div className="flex items-center gap-2 px-3 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                  <span className="h-2 w-2 rounded-full bg-green-400/70" />

                  <div className="ml-3 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[9px] text-white/25">
                    tuempresa.com
                  </div>
                </div>

                {/* WEBSITE SCREEN */}
                <div className="overflow-hidden rounded-[16px] border border-white/10 bg-[#050b18]">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-md bg-gradient-to-br from-blue-400 to-orange-400" />
                      <div className="h-2 w-16 rounded-full bg-white/25" />
                    </div>

                    <div className="flex gap-3">
                      <div className="h-1.5 w-10 rounded-full bg-white/10" />
                      <div className="h-1.5 w-10 rounded-full bg-white/10" />
                      <div className="h-1.5 w-10 rounded-full bg-white/10" />
                    </div>
                  </div>

                  <div className="grid min-h-[270px] grid-cols-2 gap-5 p-6">
                    <div className="flex flex-col justify-center">
                      <div className="mb-3 h-2 w-20 rounded-full bg-blue-400/30" />

                      <div className="space-y-2">
                        <div className="h-4 w-full rounded-full bg-white/15" />
                        <div className="h-4 w-[85%] rounded-full bg-white/10" />
                        <div className="h-4 w-[60%] rounded-full bg-white/10" />
                      </div>

                      <div className="mt-6 h-8 w-28 rounded-full bg-green-500/70 shadow-[0_0_25px_rgba(34,197,94,0.25)]" />
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/[0.14] to-orange-500/[0.08]">
                      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/20 bg-blue-400/[0.06] shadow-[0_0_70px_rgba(59,130,246,0.2)]" />

                      <div className="absolute left-[25%] top-[25%] h-2 w-2 rounded-full bg-blue-300/70" />
                      <div className="absolute right-[20%] top-[35%] h-1.5 w-1.5 rounded-full bg-orange-300/70" />
                      <div className="absolute bottom-[25%] left-[35%] h-1.5 w-1.5 rounded-full bg-white/40" />
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING TAGS */}
              <div
                className="absolute -left-7 top-20 rounded-2xl border border-blue-300/20 bg-[#08152b]/90 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                style={{
                  transform: `translate3d(${mouse.x * -22}px, ${
                    mouse.y * -14
                  }px, 70px)`,
                }}
              >
                <div className="text-[10px] font-semibold text-blue-300">
                  DISEÑO
                </div>
                <div className="mt-1 text-[8px] text-white/35">
                  identidad visual
                </div>
              </div>

              <div
                className="absolute -right-7 top-36 rounded-2xl border border-orange-300/20 bg-[#08152b]/90 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                style={{
                  transform: `translate3d(${mouse.x * 25}px, ${
                    mouse.y * 16
                  }px, 80px)`,
                }}
              >
                <div className="text-[10px] font-semibold text-orange-300">
                  CONFIANZA
                </div>
                <div className="mt-1 text-[8px] text-white/35">
                  presencia digital
                </div>
              </div>

              <div
                className="absolute -bottom-5 left-10 rounded-2xl border border-white/10 bg-[#08152b]/90 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                style={{
                  transform: `translate3d(${mouse.x * -18}px, ${
                    mouse.y * 22
                  }px, 60px)`,
                }}
              >
                <div className="text-[10px] font-semibold text-white/70">
                  EXPERIENCIA
                </div>
                <div className="mt-1 text-[8px] text-white/35">
                  clara y profesional
                </div>
              </div>

              <div
                className="absolute -bottom-2 right-10 rounded-2xl border border-green-400/20 bg-[#08152b]/90 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                style={{
                  transform: `translate3d(${mouse.x * 20}px, ${
                    mouse.y * 25
                  }px, 90px)`,
                }}
              >
                <div className="text-[10px] font-semibold text-green-300">
                  ACCIÓN
                </div>
                <div className="mt-1 text-[8px] text-white/35">
                  contacto y conversión
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSITION */}
      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* PROPOSAL */}
      <section id="propuesta" className="px-6 py-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
              Más que una página
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Tu sitio web debe tener
              <br />
              <span className="text-white/40">
                una razón para existir.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-white/55 sm:text-lg">
              Cuando una persona encuentra tu negocio en Google, redes
              sociales o por recomendación, tu página puede ser el siguiente
              punto de contacto. Por eso no se trata simplemente de
              construir una página bonita.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Presentar",
                text: "Explicar quién eres, qué haces y qué puedes ofrecer de forma clara.",
              },
              {
                number: "02",
                title: "Generar confianza",
                text: "Una presencia digital profesional ayuda a que el visitante entienda mejor tu negocio.",
              },
              {
                number: "03",
                title: "Facilitar la acción",
                text: "Contacto, WhatsApp, solicitud de información o el siguiente paso debe estar al alcance.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group rounded-[28px] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.04]"
              >
                <div className="text-sm font-semibold text-blue-300">
                  {item.number}
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="px-6 pb-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
                Alcance
              </span>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Diseñamos una
                <br />
                <span className="text-white/40">
                  presencia digital coherente.
                </span>
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Diseño visual",
                  text: "Una interfaz alineada con la identidad y personalidad de tu negocio.",
                },
                {
                  title: "Experiencia móvil",
                  text: "Una estructura pensada para personas que llegan desde su teléfono.",
                },
                {
                  title: "Arquitectura clara",
                  text: "Contenido organizado para que el visitante encuentre lo importante sin perderse.",
                },
                {
                  title: "Llamados a la acción",
                  text: "Botones y puntos de contacto ubicados estratégicamente para facilitar el siguiente paso.",
                },
                {
                  title: "Integración",
                  text: "Conexión con WhatsApp, Google, redes sociales y otras herramientas cuando sea necesario.",
                },
                {
                  title: "Base preparada",
                  text: "Una estructura que puede crecer junto con las necesidades digitales de tu negocio.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
                >
                  <div className="mb-4 h-2 w-8 rounded-full bg-gradient-to-r from-blue-400 to-orange-400" />

                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative px-6 py-28 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-500/[0.025] to-transparent" />

        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
              Nuestro proceso
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              De la idea a una presencia
              <br />
              <span className="text-white/40">
                que represente tu negocio.
              </span>
            </h2>
          </div>

          <div className="relative mt-16 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Entendemos",
                text: "Conocemos tu negocio, objetivo, público y necesidades digitales.",
              },
              {
                number: "02",
                title: "Diseñamos",
                text: "Construimos la estructura visual y la experiencia que tendrá el visitante.",
              },
              {
                number: "03",
                title: "Construimos",
                text: "Convertimos la propuesta en una página funcional y preparada para crecer.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="relative rounded-[28px] border border-white/10 bg-[#071225]/70 p-8 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-300">
                    {item.number}
                  </span>

                  <span className="h-px w-20 bg-gradient-to-r from-blue-400/40 to-transparent" />
                </div>

                <h3 className="mt-10 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="px-6 py-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-blue-500/[0.07] via-white/[0.02] to-orange-500/[0.05] p-8 sm:p-12 lg:p-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
                  Una visión integral
                </span>

                <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                  Tu web no tiene que estar
                  <br />
                  <span className="text-white/40">
                    aislada de tu estrategia.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/50">
                  Puede formar parte de un ecosistema donde Google, contenido,
                  marketing, automatización e inteligencia artificial trabajen
                  alrededor de los objetivos de tu negocio.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {["Google", "Web", "Estrategia", "IA"].map((item) => (
                  <div
                    key={item}
                    className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-xs font-semibold text-white/60 backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28 pt-10 sm:px-10 lg:px-16">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-green-400/20 bg-green-500/[0.035] px-8 py-16 text-center shadow-[0_0_100px_rgba(34,197,94,0.06)] sm:px-12">
          <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 bg-green-500/[0.06] blur-[90px]" />

          <div className="relative">
            <div className="mx-auto mb-5 inline-flex items-center rounded-full border border-green-400/20 bg-green-500/[0.08] px-4 py-2 text-xs font-semibold text-green-300">
              TU PRÓXIMO PASO
            </div>

            <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              ¿Tu negocio ya tiene una presencia
              <span className="text-white/40"> que lo represente?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/50">
              Cuéntanos qué quieres construir y conversemos sobre la mejor
              forma de llevar tu negocio al siguiente nivel digital.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#contacto"
                className="rounded-full bg-[#22C55E] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#16A34A] hover:shadow-[0_15px_45px_rgba(34,197,94,0.35)]"
              >
                Quiero hablar de mi proyecto →
              </Link>

              <Link
                href="/servicios/seo-local"
                className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-medium text-white/70 transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
              >
                Conocer SEO Local
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER MDS - MISMO DISEÑO DE INICIO */}
      <footer className="border-t border-white/10 bg-[#030812]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:grid-cols-[1.2fr_1fr_0.8fr] md:px-10 lg:px-12">
          {/* IZQUIERDA */}
          <div>
            <div className="mb-5">
              <img
                src="/logo-mds.png"
                alt="Meta Digital Studio"
                className="h-25 w-auto object-contain"
              />
            </div>

            <p className="text-sm italic text-blue-200/75">
              Estrategia & Crecimiento Digital
            </p>
          </div>

          {/* CENTRO */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Meta Digital Studio
            </h3>

            <div className="space-y-4 text-sm text-blue-200/70">
              <p>Villavicencio, Colombia</p>

              <a
                href="tel:+573012198285"
                className="block transition hover:text-white"
              >
                <span className="mr-2 text-pink-500">☎</span>
                +57 301 219 8285
              </a>

              <a
                href="https://wa.me/573012198285"
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-white"
              >
                <span className="mr-2">💬</span>
                WhatsApp
              </a>
            </div>
          </div>

          {/* DERECHA */}
          <div>
            <nav className="flex flex-col gap-5 text-sm text-blue-200/70">
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Inicio
              </Link>

              <Link
                href="/#servicios"
                className="transition hover:text-white"
              >
                Servicios
              </Link>

              <Link
                href="/#proceso"
                className="transition hover:text-white"
              >
                Proceso
              </Link>

              <Link
                href="/#nosotros"
                className="transition hover:text-white"
              >
                ¿Por qué nosotros?
              </Link>

              <Link
                href="/#contacto"
                className="transition hover:text-white"
              >
                Contacto
              </Link>
            </nav>
          </div>
        </div>

        {/* FRANJA INFERIOR */}
        <div className="border-t border-white/10 px-6 py-5 text-center">
          <p className="text-sm text-blue-200/70">
            © 2026 Meta Digital Studio. Todos los derechos reservados.
          </p>

          <p className="mt-2 text-xs text-blue-200/50">
            Estrategia & Crecimiento Digital · Villavicencio
          </p>
        </div>
      </footer>
    </main>
  );
}
