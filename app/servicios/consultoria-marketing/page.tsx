"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ConsultoriaMarketingPage() {
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
        <div className="absolute left-[-15%] top-[10%] h-[520px] w-[520px] rounded-full bg-blue-600/[0.08] blur-[140px]" />
        <div className="absolute right-[-12%] top-[35%] h-[500px] w-[500px] rounded-full bg-orange-500/[0.07] blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[35%] h-[500px] w-[500px] rounded-full bg-purple-500/[0.035] blur-[150px]" />
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
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
          {/* LEFT */}
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-orange-400/20 bg-orange-500/[0.06] px-4 py-2 text-xs font-medium text-orange-300">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.8)]" />
              CONSULTORÍA DE MARKETING
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Deja de publicar
              <br />
              <span className="bg-gradient-to-r from-orange-300 via-white to-blue-300 bg-clip-text text-transparent">
                sin rumbo.
              </span>
              <br />
              Construye una estrategia.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Ayudamos a convertir ideas, oportunidades y necesidades de tu
              negocio en una estrategia digital más clara, organizada y
              orientada a objetivos.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contacto"
                className="group rounded-full bg-[#22C55E] px-7 py-4 text-center text-sm font-semibold text-white transition duration-300 hover:bg-[#16A34A] hover:shadow-[0_15px_45px_rgba(34,197,94,0.35)]"
              >
                Quiero hablar de mi estrategia
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
              <span>✓ Diagnóstico</span>
              <span>✓ Estrategia</span>
              <span>✓ Orientación</span>
            </div>
          </div>

          {/* STRATEGY VISUAL */}
          <div className="relative flex min-h-[520px] items-center justify-center">
            <div
              className="absolute h-[430px] w-[430px] rounded-full border border-orange-400/10"
              style={{
                transform: `translate3d(${mouse.x * -18}px, ${
                  mouse.y * -14
                }px, 0)`,
              }}
            />

            <div
              className="absolute h-[340px] w-[340px] rounded-full border border-blue-400/10"
              style={{
                transform: `translate3d(${mouse.x * 22}px, ${
                  mouse.y * 18
                }px, 0)`,
              }}
            />

            <div
              className="absolute h-[250px] w-[250px] rounded-full border border-white/10"
              style={{
                transform: `translate3d(${mouse.x * -25}px, ${
                  mouse.y * 22
                }px, 0)`,
              }}
            />

            <div className="absolute h-64 w-64 rounded-full bg-orange-500/[0.08] blur-[90px]" />

            {/* CENTRAL STRATEGY SYSTEM */}
            <div
              className="relative z-10 h-[360px] w-[360px]"
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
              {/* CONNECTING LINES */}
              <div className="absolute left-1/2 top-1/2 h-[2px] w-[300px] -translate-x-1/2 -translate-y-1/2 rotate-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="absolute left-1/2 top-1/2 h-[300px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

              {/* CENTER - REAL MDS LOGO */}
              <div className="absolute left-1/2 top-1/2 z-20 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-orange-300/20 bg-[#08152b]/90 shadow-[0_0_80px_rgba(249,115,22,0.12)] backdrop-blur-xl">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="/logo-mds.png"
                    alt="Meta Digital Studio"
                    className="h-16 w-auto object-contain"
                  />

                  <div className="mt-1 text-[8px] font-medium tracking-[0.18em] text-white/40">
                    ESTRATEGIA
                  </div>
                </div>
              </div>

              {/* GOOGLE */}
              <div
                className="absolute left-2 top-16 rounded-2xl border border-blue-400/20 bg-[#08152b]/90 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                style={{
                  transform: `translate3d(${mouse.x * -22}px, ${
                    mouse.y * -14
                  }px, 70px)`,
                }}
              >
                <div className="text-[10px] font-semibold text-blue-300">
                  GOOGLE
                </div>

                <div className="mt-1 text-[8px] text-white/35">
                  visibilidad
                </div>
              </div>

              {/* CONTENIDO */}
              <div
                className="absolute right-0 top-10 rounded-2xl border border-orange-400/20 bg-[#08152b]/90 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                style={{
                  transform: `translate3d(${mouse.x * 25}px, ${
                    mouse.y * 16
                  }px, 80px)`,
                }}
              >
                <div className="text-[10px] font-semibold text-orange-300">
                  CONTENIDO
                </div>

                <div className="mt-1 text-[8px] text-white/35">
                  comunicación
                </div>
              </div>

              {/* WEB */}
              <div
                className="absolute bottom-8 left-0 rounded-2xl border border-white/10 bg-[#08152b]/90 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                style={{
                  transform: `translate3d(${mouse.x * -18}px, ${
                    mouse.y * 22
                  }px, 60px)`,
                }}
              >
                <div className="text-[10px] font-semibold text-white/70">
                  WEB
                </div>

                <div className="mt-1 text-[8px] text-white/35">
                  confianza
                </div>
              </div>

              {/* ACCIÓN */}
              <div
                className="absolute bottom-3 right-0 rounded-2xl border border-green-400/20 bg-[#08152b]/90 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
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
                  crecimiento
                </div>
              </div>

              {/* CENTER LINES */}
              <div className="absolute left-[25%] top-[45%] h-px w-[50%] bg-gradient-to-r from-blue-400/10 via-orange-400/20 to-green-400/10" />

              <div className="absolute left-[48%] top-[25%] h-[50%] w-px bg-gradient-to-b from-blue-400/10 via-orange-400/20 to-green-400/10" />
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* PROPOSAL */}
      <section id="propuesta" className="px-6 py-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
              El problema
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Tener presencia digital
              <br />
              <span className="text-white/40">
                no significa tener estrategia.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-white/55 sm:text-lg">
              Publicar constantemente, abrir redes sociales o invertir en
              diferentes canales no garantiza que todos estén trabajando hacia
              el mismo objetivo. Una estrategia comienza cuando entiendes
              dónde estás, qué quieres lograr y qué camino tiene más sentido
              para tu negocio.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Sin dirección",
                text: "Se toman decisiones digitales sin una prioridad clara ni una ruta definida.",
              },
              {
                number: "02",
                title: "Canales desconectados",
                text: "Google, redes, web y otros canales funcionan por separado en lugar de complementarse.",
              },
              {
                number: "03",
                title: "Mucho esfuerzo",
                text: "Se invierte tiempo en acciones que no necesariamente están relacionadas con el objetivo comercial.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group rounded-[28px] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-400/25 hover:bg-white/[0.04]"
              >
                <div className="text-sm font-semibold text-orange-300">
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

      {/* STRATEGY */}
      <section className="px-6 pb-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                Qué hacemos
              </span>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Ordenamos las piezas
                <br />
                <span className="text-white/40">
                  para encontrar el camino.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/45">
                La consultoría parte de la realidad de tu negocio. No
                buscamos imponer una fórmula única, sino identificar
                oportunidades y definir prioridades.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Diagnóstico",
                  text: "Revisamos la situación actual de tu presencia digital y detectamos oportunidades.",
                },
                {
                  title: "Objetivos",
                  text: "Definimos qué debería conseguir la estrategia y qué prioridades tiene el negocio.",
                },
                {
                  title: "Canales",
                  text: "Analizamos dónde tiene sentido concentrar esfuerzos según el negocio y su público.",
                },
                {
                  title: "Plan de acción",
                  text: "Convertimos el análisis en pasos concretos que puedas entender y ejecutar.",
                },
                {
                  title: "Contenido",
                  text: "Orientamos la comunicación para que tenga una intención clara y sea coherente con la estrategia.",
                },
                {
                  title: "Evolución",
                  text: "La estrategia puede ajustarse a medida que aparecen nuevos datos, necesidades y oportunidades.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
                >
                  <div className="mb-4 h-2 w-8 rounded-full bg-gradient-to-r from-orange-400 to-blue-400" />

                  <h3 className="text-base font-semibold">
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

      {/* METHOD */}
      <section className="relative px-6 py-28 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-orange-500/[0.025] to-transparent" />

        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
              Método MDS
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Pensar. Priorizar.
              <br />
              <span className="text-white/40">
                Actuar.
              </span>
            </h2>
          </div>

          <div className="relative mt-16 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Entender",
                text: "Analizamos el punto de partida, el negocio, el público y el contexto.",
              },
              {
                number: "02",
                title: "Priorizar",
                text: "Identificamos qué acciones tienen mayor sentido y qué debería hacerse primero.",
              },
              {
                number: "03",
                title: "Actuar",
                text: "Convertimos la estrategia en acciones concretas que puedan ponerse en marcha.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="relative rounded-[28px] border border-white/10 bg-[#071225]/70 p-8 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-orange-300">
                    {item.number}
                  </span>

                  <span className="h-px w-20 bg-gradient-to-r from-orange-400/40 to-transparent" />
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

      {/* ECOSYSTEM */}
      <section className="px-6 py-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-orange-500/[0.06] via-white/[0.02] to-blue-500/[0.05] p-8 sm:p-12 lg:p-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                  El ecosistema MDS
                </span>

                <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                  La estrategia conecta
                  <br />
                  <span className="text-white/40">
                    todo lo demás.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/50">
                  Google puede ayudarte a ser encontrado. Una web puede
                  transmitir confianza. La inteligencia artificial puede
                  ayudarte a optimizar procesos. Pero la estrategia es la que
                  ayuda a entender cómo deben relacionarse todas esas piezas.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    title: "Google",
                    icon: "G",
                  },
                  {
                    title: "Web",
                    icon: "◉",
                  },
                  {
                    title: "Estrategia",
                    icon: "✦",
                  },
                  {
                    title: "IA",
                    icon: "AI",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
                  >
                    <span className="text-lg font-semibold text-white/70">
                      {item.icon}
                    </span>

                    <span className="mt-2 text-[9px] text-white/30">
                      {item.title}
                    </span>
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
              ¿Tu negocio tiene una dirección
              <span className="text-white/40">
                {" "}
                digital clara?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/50">
              Hablemos sobre dónde está hoy tu negocio, qué quieres conseguir
              y qué oportunidades digitales vale la pena priorizar.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#contacto"
                className="rounded-full bg-[#22C55E] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#16A34A] hover:shadow-[0_15px_45px_rgba(34,197,94,0.35)]"
              >
                Quiero hablar de mi estrategia →
              </Link>

              <Link
                href="/servicios/diseno-web"
                className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-medium text-white/70 transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
              >
                Conocer Diseño Web
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER MDS - MISMO DISEÑO DE INICIO Y DISEÑO WEB */}
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
                +57 301 2198285
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