
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SeoLocalPage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const services = [
    {
      title: "Google Business Profile",
      text: "Optimizamos la presencia principal de tu negocio en Google para que la información sea clara, completa y coherente.",
      icon: "G",
    },
    {
      title: "Google Maps",
      text: "Trabajamos la presencia local de tu negocio para facilitar que las personas puedan encontrarte y conocer dónde estás.",
      icon: "⌖",
    },
    {
      title: "Información y categorías",
      text: "Revisamos categorías, servicios, productos, horarios, contacto y demás información relevante de tu negocio.",
      icon: "✦",
    },
    {
      title: "Contenido visual",
      text: "Organizamos recomendaciones para fotografías y elementos visuales que ayuden a presentar mejor tu negocio.",
      icon: "◉",
    },
    {
      title: "Presencia local",
      text: "Analizamos directorios y otros espacios digitales que pueden contribuir a mantener consistente la información de tu negocio.",
      icon: "◎",
    },
    {
      title: "Orientación estratégica",
      text: "Te entregamos recomendaciones prácticas para fortalecer progresivamente la presencia digital local de tu negocio.",
      icon: "↗",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      text: "Analizamos cómo está apareciendo actualmente tu negocio en Google y detectamos oportunidades de mejora.",
    },
    {
      number: "02",
      title: "Estrategia",
      text: "Definimos las acciones prioritarias según la situación real de tu negocio y su presencia digital.",
    },
    {
      number: "03",
      title: "Implementación",
      text: "Aplicamos las optimizaciones acordadas para fortalecer la presencia local de tu negocio.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050b16] text-white">

      {/* =========================
          NAVBAR
      ========================= */}
      <nav className="fixed left-1/2 top-5 z-50 w-[calc(100%-32px)] max-w-6xl -translate-x-1/2">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#071222]/75 px-5 py-3 shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">

          <Link href="/" className="flex items-center">
            <img
              src="/logo-mds.png"
              alt="Meta Digital Studio"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center gap-7 text-sm text-white/65 md:flex">
            <Link href="/" className="transition hover:text-white">
              Inicio
            </Link>

            <Link href="/#nosotros" className="transition hover:text-white">
              Nosotros
            </Link>

            <Link href="/#servicios" className="text-white">
              Servicios
            </Link>

            <Link href="/#proceso" className="transition hover:text-white">
              Proceso
            </Link>

            <Link href="/#contacto" className="transition hover:text-white">
              Contacto
            </Link>
          </div>

          <Link
            href="#diagnostico"
            className="rounded-full bg-[#22C55E] px-5 py-2.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#16A34A] hover:shadow-[0_0_30px_rgba(34,197,94,0.35)]"
          >
            Diagnóstico gratuito
          </Link>
        </div>
      </nav>

      {/* =========================
          HERO
      ========================= */}
      <section className="relative flex min-h-screen items-center px-6 pb-20 pt-32 md:px-10">

        <div className="absolute inset-0">
          <div className="absolute left-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />

          <div className="absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[130px]" />

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 85%)",
            }}
          />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 xl:grid-cols-[1.05fr_0.95fr]">

          {/* HERO TEXT */}
          <div className="max-w-2xl">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs tracking-[0.22em] text-white/55">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.9)]" />
              SERVICIO #01 · SEO LOCAL
            </div>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Haz que tu negocio
              <span className="mt-2 block bg-gradient-to-r from-white via-white to-white/45 bg-clip-text text-transparent">
                sea encontrado.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/60 md:text-lg">
              Construimos y optimizamos la presencia digital local de tu
              negocio para que tus clientes puedan encontrarte, conocerte y
              llegar hasta ti cuando buscan lo que ofreces.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="#diagnostico"
                className="rounded-full bg-[#22C55E] px-7 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#16A34A] hover:shadow-[0_15px_45px_rgba(34,197,94,0.35)]"
              >
                Solicitar diagnóstico gratuito
              </Link>

              <a
                href="https://wa.me/573012198285?text=Hola%20Meta%20Digital%20Studio%2C%20quiero%20solicitar%20un%20diagn%C3%B3stico%20gratuito%20de%20SEO%20Local%20para%20mi%20negocio."
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-center text-sm font-semibold text-white/80 transition hover:border-white/30 hover:bg-white/[0.06]"
              >
                Hablar por WhatsApp
              </a>

            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/35">
              <span>Google</span>
              <span>Google Maps</span>
              <span>Presencia local</span>
              <span>Sin mensualidades</span>
            </div>
          </div>

          {/* =========================
              HERO VISUAL 3D MDS
              DISTRIBUCIÓN EQUILIBRADA
          ========================= */}
          <div className="relative mx-auto flex h-[600px] w-full max-w-[560px] items-center justify-center">

            {/* LUZ AMBIENTAL */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.09] blur-[100px]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[75px]" />

            {/* ÓRBITA EXTERIOR */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]"
              style={{
                transform: `translate(-50%, -50%) translate(${mouse.x * -4}px, ${mouse.y * -4}px) rotateX(58deg) rotateZ(-18deg)`,
              }}
            />

            {/* SEGUNDA ÓRBITA */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20"
              style={{
                transform: `translate(-50%, -50%) translate(${mouse.x * 10}px, ${mouse.y * 10}px) rotateX(62deg) rotateZ(35deg)`,
              }}
            />

            {/* TERCERA ÓRBITA */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[265px] w-[265px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-400/20"
              style={{
                transform: `translate(-50%, -50%) translate(${mouse.x * -14}px, ${mouse.y * -14}px) rotateX(65deg) rotateZ(-35deg)`,
              }}
            />

            {/* ANILLO INTERIOR LUMINOSO */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.12] shadow-[0_0_45px_rgba(59,130,246,0.08)]" />

            {/* =========================
                NÚCLEO CENTRAL MDS
                LOGO EN EL CENTRO
            ========================= */}
            <div
              className="absolute left-1/2 top-1/2 z-20 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[48px] border border-cyan-300/30 bg-gradient-to-br from-blue-500/25 via-[#101e3d] to-violet-600/20 shadow-[0_0_100px_rgba(59,130,246,0.25)] backdrop-blur-2xl"
              style={{
                transform: `translate(-50%, -50%) perspective(900px) rotateX(${mouse.y * -4}deg) rotateY(${mouse.x * 4}deg)`,
              }}
            >
              <div className="absolute inset-3 rounded-[38px] border border-white/10" />

              <div className="absolute h-36 w-36 rounded-full bg-cyan-400/15 blur-3xl" />

              <div className="relative z-10 flex h-full w-full items-center justify-center p-7">
                <img
                  src="/logo-mds.png"
                  alt="Meta Digital Studio - Logo"
                  className="h-full w-full object-contain drop-shadow-[0_0_18px_rgba(96,165,250,0.45)]"
                />
              </div>
            </div>

            {/* =========================
                GOOGLE
                ESQUINA SUPERIOR IZQUIERDA
            ========================= */}
            <div className="mds-float-one absolute left-[1%] top-[2%] z-30">
              <div
                style={{
                  transform: `translate(${mouse.x * -4}px, ${mouse.y * -4}px)`,
                }}
              >
                <FloatingNode
                  icon="G"
                  title="Google"
                  subtitle="Búsquedas"
                  accent="blue"
                />
              </div>
            </div>

            {/* =========================
                GOOGLE MAPS
                ESQUINA SUPERIOR DERECHA
            ========================= */}
            <div className="mds-float-two absolute right-[1%] top-[2%] z-30">
              <div
                style={{
                  transform: `translate(${mouse.x * 4}px, ${mouse.y * -4}px)`,
                }}
              >
                <FloatingNode
                  icon="⌖"
                  title="Google Maps"
                  subtitle="Ubicación"
                  accent="orange"
                />
              </div>
            </div>

            {/* =========================
                PRESENCIA LOCAL
                ESQUINA INFERIOR IZQUIERDA
            ========================= */}
            <div className="mds-float-three absolute bottom-[2%] left-[1%] z-30">
              <div
                style={{
                  transform: `translate(${mouse.x * -4}px, ${mouse.y * 4}px)`,
                }}
              >
                <FloatingNode
                  icon="✦"
                  title="Presencia"
                  subtitle="Visibilidad local"
                  accent="cyan"
                />
              </div>
            </div>

            {/* =========================
                CLIENTES
                ESQUINA INFERIOR DERECHA
            ========================= */}
            <div className="mds-float-four absolute bottom-[2%] right-[1%] z-30">
              <div
                style={{
                  transform: `translate(${mouse.x * 4}px, ${mouse.y * 4}px)`,
                }}
              >
                <FloatingNode
                  icon="↗"
                  title="Clientes"
                  subtitle="Nuevas oportunidades"
                  accent="orange"
                />
              </div>
            </div>

            {/* PARTÍCULAS DE LUZ */}
            <div className="mds-particle-one pointer-events-none absolute left-[27%] top-[25%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />

            <div className="mds-particle-two pointer-events-none absolute right-[27%] top-[25%] h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_16px_rgba(251,146,60,0.9)]" />

            <div className="mds-particle-three pointer-events-none absolute bottom-[25%] right-[27%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]" />

            <div className="mds-particle-one pointer-events-none absolute bottom-[25%] left-[27%] h-1.5 w-1.5 rounded-full bg-orange-300 shadow-[0_0_15px_rgba(253,186,116,0.8)]" />

          </div>
        </div>
      </section>

      {/* =========================
          OBJECTIVE
      ========================= */}
      <section className="relative px-6 py-28 md:px-10">

        <div className="mx-auto max-w-6xl">

          <div className="max-w-3xl">

            <p className="text-xs font-semibold tracking-[0.28em] text-orange-400">
              EL OBJETIVO
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Tu negocio ya existe.
              <span className="block text-white/40">
                Ahora hagamos que sea más fácil encontrarlo.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/55">
              Hoy muchas personas utilizan Google para buscar productos,
              servicios y negocios cerca de ellas. Tener una presencia local
              bien estructurada puede ayudarte a mostrarle al mercado quién
              eres, qué haces y dónde encontrarte.
            </p>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">

            <InfoCard
              number="01"
              title="Ser visible"
              text="Haz que tu negocio tenga una presencia clara y profesional cuando las personas realizan búsquedas relacionadas con lo que ofreces."
            />

            <InfoCard
              number="02"
              title="Generar confianza"
              text="Información completa, coherente y actualizada ayuda a que las personas conozcan mejor tu negocio antes de tomar una decisión."
            />

            <InfoCard
              number="03"
              title="Facilitar el contacto"
              text="Tu ubicación, horarios, teléfono, servicios y demás información deben estar disponibles para que el cliente pueda dar el siguiente paso."
            />

          </div>
        </div>
      </section>

      {/* =========================
          PROBLEM
      ========================= */}
      <section className="relative border-y border-white/[0.06] bg-white/[0.015] px-6 py-24 md:px-10">

        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-white/35">
              ¿TE ESTÁ PASANDO?
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Estar en internet no significa
              <span className="block text-white/40">
                estar bien presente.
              </span>
            </h2>
          </div>

          <div className="grid gap-4">

            <ProblemRow text="Tu negocio aparece en Google, pero la información está incompleta o desactualizada." />

            <ProblemRow text="Tus clientes potenciales pueden estar buscando lo que vendes sin encontrar fácilmente tu negocio." />

            <ProblemRow text="No tienes claro qué información deberías optimizar en Google Maps." />

            <ProblemRow text="Tu presencia digital está dispersa y no existe una estrategia clara para fortalecerla." />

          </div>
        </div>
      </section>

      {/* =========================
          SERVICE SCOPE
      ========================= */}
      <section className="relative px-6 py-28 md:px-10">

        <div className="mx-auto max-w-6xl">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div className="max-w-2xl">

              <p className="text-xs font-semibold tracking-[0.28em] text-blue-300">
                ¿QUÉ HACEMOS?
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Construimos una presencia local
                <span className="block text-white/40">
                  pensada para tu negocio.
                </span>
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-7 text-white/45">
              Analizamos, organizamos y optimizamos los elementos que forman
              parte de la presencia digital local de tu negocio.
            </p>

          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {services.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.035] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.055]"
              >

                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/[0.07] blur-3xl transition duration-500 group-hover:bg-blue-500/[0.12]" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold text-white/80">
                      {item.icon}
                    </div>

                    <span className="text-[10px] tracking-[0.25em] text-white/25">
                      MDS / SEO
                    </span>

                  </div>

                  <h3 className="mt-7 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/45">
                    {item.text}
                  </p>

                  <div className="mt-7 h-px w-full bg-gradient-to-r from-white/10 via-white/[0.04] to-transparent" />

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          PROCESS
      ========================= */}
      <section className="relative border-y border-white/[0.06] bg-white/[0.012] px-6 py-28 md:px-10">

        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">

            <p className="text-xs font-semibold tracking-[0.28em] text-orange-400">
              CÓMO FUNCIONA
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Primero entendemos.
              <span className="block text-white/40">
                Después actuamos.
              </span>
            </h2>

          </div>

          <div className="relative mt-16 grid gap-6 md:grid-cols-3">

            <div className="absolute left-[16%] right-[16%] top-[38px] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />

            {steps.map((item) => (
              <div
                key={item.number}
                className="relative rounded-[28px] border border-white/[0.08] bg-[#071222]/80 p-8 backdrop-blur-xl"
              >

                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold text-white/70">
                  {item.number}
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
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

      {/* =========================
          FREE DIAGNOSIS
      ========================= */}
      <section
        id="diagnostico"
        className="relative px-6 py-28 md:px-10"
      >

        <div className="mx-auto max-w-5xl">

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-white/[0.015] p-8 md:p-14">

            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-orange-500/10 blur-[100px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>

                <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/[0.08] px-4 py-2 text-xs text-green-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] shadow-[0_0_12px_rgba(34,197,94,0.8)]" />
                  SIN COSTO
                </div>

                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                  Empieza con un
                  <span className="block text-white/40">
                    diagnóstico gratuito.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-8 text-white/50 md:text-base">
                  Antes de contratar el servicio, revisamos la presencia
                  digital local de tu negocio y detectamos oportunidades de
                  mejora. Así puedes conocer tu situación actual y decidir con
                  información.
                </p>

                <div className="mt-7 flex flex-wrap gap-3 text-xs text-white/35">

                  <span className="rounded-full border border-white/10 px-3 py-2">
                    Google
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-2">
                    Maps
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-2">
                    Presencia local
                  </span>

                </div>

              </div>

              <a
                href="https://wa.me/573012198285?text=Hola%20Meta%20Digital%20Studio%2C%20quiero%20solicitar%20mi%20diagn%C3%B3stico%20gratuito%20de%20SEO%20Local."
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-[230px] items-center justify-center rounded-full bg-[#22C55E] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#16A34A] hover:shadow-[0_20px_50px_rgba(34,197,94,0.35)]"
              >
                Solicitar diagnóstico
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PRICE
      ========================= */}
      <section className="relative px-6 pb-28 md:px-10">

        <div className="mx-auto max-w-5xl">

          <div className="grid overflow-hidden rounded-[36px] border border-white/10 bg-[#071222] lg:grid-cols-[1fr_0.8fr]">

            <div className="p-8 md:p-14">

              <p className="text-xs font-semibold tracking-[0.28em] text-blue-300">
                UNA DECISIÓN SENCILLA
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Sin membresías.
                <span className="block text-white/40">
                  Sin pagos mensuales obligatorios.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-8 text-white/50 md:text-base">
                Si después del diagnóstico decides avanzar, puedes acceder a
                la implementación del servicio SEO Local mediante un único
                pago.
              </p>

              <div className="mt-8 space-y-3 text-sm text-white/55">

                <div className="flex items-center gap-3">
                  <span className="text-[#22C55E]">✓</span>
                  Diagnóstico inicial gratuito
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#22C55E]">✓</span>
                  Implementación del servicio
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#22C55E]">✓</span>
                  Un único pago
                </div>

              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-t border-white/10 bg-white/[0.025] p-8 text-center lg:border-l lg:border-t-0 md:p-14">

              <span className="text-xs tracking-[0.25em] text-white/30">
                SEO LOCAL MDS
              </span>

              <div className="mt-4 text-6xl font-semibold tracking-[-0.05em]">
                <span className="text-white">$200.000</span>
              </div>

              <p className="mt-2 text-sm text-white/40">
                COP · pago único
              </p>

              <Link
                href="#diagnostico"
                className="mt-8 rounded-full bg-[#22C55E] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#16A34A] hover:shadow-[0_15px_45px_rgba(34,197,94,0.35)]"
              >
                Quiero comenzar
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* =========================
          OTHER SERVICES
      ========================= */}
      <section className="border-t border-white/[0.06] px-6 py-24 md:px-10">

        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">

            <p className="text-xs font-semibold tracking-[0.28em] text-white/30">
              MÁS ALLÁ DEL SEO LOCAL
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Una presencia digital puede
              <span className="block text-white/40">
                crecer contigo.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/45">
              SEO Local puede ser el primer paso. Cuando tu negocio necesite
              ampliar su presencia digital, MDS cuenta con otras soluciones
              para acompañar ese crecimiento.
            </p>

          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">

            <MiniService
              number="02"
              title="Diseño Web"
              text="Una presencia web profesional para complementar tu ecosistema digital."
              href="/servicios/diseno-web"
            />

            <MiniService
              number="03"
              title="Marketing"
              text="Estrategia para conectar mejor tu negocio con las oportunidades digitales."
              href="/servicios/consultoria-marketing"
            />

            <MiniService
              number="04"
              title="IA"
              text="Soluciones con inteligencia artificial para optimizar procesos y potenciar tu negocio."
              href="/servicios/soluciones-ia"
            />

          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================= */}
      <section className="px-6 pb-24 pt-10 md:px-10">

        <div className="mx-auto max-w-6xl">

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.035] px-8 py-16 text-center md:px-16">

            <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-green-500/[0.06] blur-[90px]" />

            <div className="relative">

              <p className="text-xs font-semibold tracking-[0.28em] text-orange-400">
                TU PRIMER PASO
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Haz que tu negocio
                <span className="block text-white/40">
                  sea más fácil de encontrar.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45">
                Descubre cómo está apareciendo actualmente tu negocio en
                Google y conoce qué oportunidades puedes trabajar.
              </p>

              <div className="mt-9">
                <a
                  href="https://wa.me/573012198285?text=Hola%20Meta%20Digital%20Studio%2C%20quiero%20solicitar%20un%20diagn%C3%B3stico%20gratuito%20de%20SEO%20Local."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-[#22C55E] px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#16A34A] hover:shadow-[0_20px_55px_rgba(34,197,94,0.35)]"
                >
                  Solicitar diagnóstico gratuito
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER MDS - MISMO DISEÑO DE INICIO
      ========================= */}
      <footer className="border-t border-white/10 bg-[#030812]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:grid-cols-[1.2fr_1fr_0.8fr] md:px-10 lg:px-12">

          {/* IZQUIERDA */}
          <div>
            <div className="mb-5">
              <img
                src="/logo-mds.png"
                alt="Meta Digital Studio"
                className="h-24 w-auto object-contain"
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
              <Link href="/" className="transition hover:text-white">
                Inicio
              </Link>

              <Link href="/#servicios" className="transition hover:text-white">
                Servicios
              </Link>

              <Link href="/#proceso" className="transition hover:text-white">
                Proceso
              </Link>

              <Link href="/#nosotros" className="transition hover:text-white">
                ¿Por qué nosotros?
              </Link>

              <Link href="/#contacto" className="transition hover:text-white">
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

      {/* =========================
          ANIMACIONES 3D MDS
      ========================= */}
      <style jsx global>{`
        @keyframes mdsFloatOne {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-14px);
          }
        }

        @keyframes mdsFloatTwo {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(12px);
          }
        }

        @keyframes mdsFloatThree {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes mdsFloatFour {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(15px);
          }
        }

        @keyframes mdsParticle {
          0%, 100% {
            opacity: 0.35;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.35);
          }
        }

        .mds-float-one {
          animation: mdsFloatOne 6s ease-in-out infinite;
        }

        .mds-float-two {
          animation: mdsFloatTwo 7s ease-in-out infinite;
        }

        .mds-float-three {
          animation: mdsFloatThree 5.5s ease-in-out infinite;
        }

        .mds-float-four {
          animation: mdsFloatFour 6.5s ease-in-out infinite;
        }

        .mds-particle-one {
          animation: mdsParticle 3.5s ease-in-out infinite;
        }

        .mds-particle-two {
          animation: mdsParticle 4.2s ease-in-out infinite 0.5s;
        }

        .mds-particle-three {
          animation: mdsParticle 3.8s ease-in-out infinite 1s;
        }

        @media (prefers-reduced-motion: reduce) {
          .mds-float-one,
          .mds-float-two,
          .mds-float-three,
          .mds-float-four,
          .mds-particle-one,
          .mds-particle-two,
          .mds-particle-three {
            animation: none;
          }
        }
      `}</style>

    </main>
  );
}


/* =========================================================
   COMPONENTE: FLOATING NODE 3D
========================================================= */

function FloatingNode({
  icon,
  title,
  subtitle,
  accent,
}: {
  icon: string;
  title: string;
  subtitle: string;
  accent: "blue" | "orange" | "cyan";
}) {
  const accentStyles = {
    blue: {
      border: "border-blue-300/25",
      glow: "bg-blue-400/15",
      icon: "text-blue-200",
      shadow: "shadow-[0_12px_45px_rgba(37,99,235,0.16)]",
    },
    orange: {
      border: "border-orange-300/25",
      glow: "bg-orange-400/15",
      icon: "text-orange-200",
      shadow: "shadow-[0_12px_45px_rgba(249,115,22,0.13)]",
    },
    cyan: {
      border: "border-cyan-300/25",
      glow: "bg-cyan-400/15",
      icon: "text-cyan-200",
      shadow: "shadow-[0_12px_45px_rgba(34,211,238,0.13)]",
    },
  };

  const style = accentStyles[accent];

  return (
    <div
      className={`relative w-[145px] overflow-hidden rounded-[24px] border ${style.border} bg-gradient-to-br from-[#14243c]/95 via-[#091729]/95 to-[#071222]/95 p-4 backdrop-blur-2xl ${style.shadow}`}
    >
      {/* RESPLANDOR INTERIOR */}
      <div
        className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full ${style.glow} blur-2xl`}
      />

      {/* BORDE INTERIOR */}
      <div className="pointer-events-none absolute inset-[5px] rounded-[19px] border border-white/[0.045]" />

      <div className="relative">

        <div className="flex items-center justify-between">
          <span className="text-[9px] font-medium tracking-[0.22em] text-white/30">
            MDS / LOCAL
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
        </div>

        <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-[15px] border border-white/10 bg-white/[0.055] shadow-inner">
          <span className={`text-2xl font-semibold ${style.icon}`}>
            {icon}
          </span>
        </div>

        <h3 className="mt-3 text-sm font-semibold tracking-wide text-white/90">
          {title}
        </h3>

        <p className="mt-1 text-[10px] leading-4 text-white/40">
          {subtitle}
        </p>

        <div className="mt-3 h-px w-full bg-gradient-to-r from-white/15 via-white/[0.05] to-transparent" />

      </div>
    </div>
  );
}


/* =========================================================
   COMPONENTE: INFO CARD
========================================================= */

function InfoCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7">

      <span className="text-xs tracking-[0.25em] text-white/25">
        {number}
      </span>

      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-white/40">
        {text}
      </p>

    </div>
  );
}


/* =========================================================
   COMPONENTE: PROBLEM ROW
========================================================= */

function ProblemRow({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">

      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-orange-400/30 text-[10px] text-orange-400">
        !
      </div>

      <p className="text-sm leading-7 text-white/50">
        {text}
      </p>

    </div>
  );
}


/* =========================================================
   COMPONENTE: MINI SERVICE
========================================================= */

function MiniService({
  number,
  title,
  text,
  href,
}: {
  number: string;
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.045]"
    >

      <div className="flex items-center justify-between">

        <span className="text-xs tracking-[0.25em] text-white/25">
          {number}
        </span>

        <span className="text-white/25 transition group-hover:translate-x-1 group-hover:text-white/60">
          →
        </span>

      </div>

      <h3 className="mt-7 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-white/40">
        {text}
      </p>

    </Link>
  );
}
