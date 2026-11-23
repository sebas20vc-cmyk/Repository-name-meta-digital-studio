
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SolucionesIAPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSolution, setActiveSolution] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const solutions = [
    {
      number: "01",
      icon: "✦",
      title: "Asistentes inteligentes",
      description:
        "Incorpora asistentes con inteligencia artificial capaces de orientar a tus clientes, responder preguntas frecuentes y facilitar la comunicación con tu negocio.",
      features: [
        "Atención inicial automatizada",
        "Respuestas a preguntas frecuentes",
        "Orientación hacia tus servicios",
        "Conexión con WhatsApp",
      ],
      color: "from-blue-500 to-cyan-400",
    },
    {
      number: "02",
      icon: "⌘",
      title: "Automatización de procesos",
      description:
        "Reduce tareas repetitivas y conecta procesos digitales para que puedas dedicar más tiempo a las actividades importantes de tu negocio.",
      features: [
        "Organización de información",
        "Flujos de trabajo automatizados",
        "Gestión de solicitudes",
        "Optimización de tareas",
      ],
      color: "from-violet-500 to-blue-400",
    },
    {
      number: "03",
      icon: "✧",
      title: "Contenido con inteligencia artificial",
      description:
        "Utiliza herramientas de IA como apoyo para desarrollar ideas, textos y recursos que fortalezcan la comunicación digital de tu marca.",
      features: [
        "Generación de ideas y textos",
        "Apoyo para redes sociales",
        "Contenido para páginas web",
        "Optimización de mensajes comerciales",
      ],
      color: "from-orange-400 to-amber-300",
    },
    {
      number: "04",
      icon: "◈",
      title: "Soluciones a la medida",
      description:
        "Analizamos las necesidades de tu negocio para identificar dónde la inteligencia artificial puede aportar valor y desarrollar una solución adecuada.",
      features: [
        "Análisis de necesidades",
        "Identificación de oportunidades",
        "Selección de herramientas",
        "Implementación según alcance",
      ],
      color: "from-emerald-400 to-cyan-300",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Entendemos tu negocio",
      description:
        "Conocemos tus objetivos, identificamos tus necesidades y escuchamos los desafíos que quieres resolver.",
    },
    {
      number: "02",
      title: "Identificamos oportunidades",
      description:
        "Evaluamos qué tareas, procesos o puntos de contacto pueden beneficiarse de la inteligencia artificial.",
    },
    {
      number: "03",
      title: "Diseñamos la solución",
      description:
        "Definimos las herramientas, funcionalidades y alcance de una solución pensada para tu operación.",
    },
    {
      number: "04",
      title: "Implementamos y orientamos",
      description:
        "Desarrollamos la solución acordada y te orientamos para que puedas aprovecharla en tu negocio.",
    },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hola, Meta Digital Studio. Quiero conocer cómo pueden ayudarme a implementar soluciones de inteligencia artificial en mi negocio."
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#050b18] text-white selection:bg-blue-500/30">

      {/* FONDO GENERAL */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-64 top-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute -right-64 top-[700px] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />
      </div>

      {/* NAVEGACIÓN */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#071020]/85 px-5 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl md:px-8">
          <Link href="/" className="flex items-center">
            <img
              src="/logo-mds.png"
              alt="Meta Digital Studio"
              className="h-11 w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center gap-8 text-sm text-blue-100/75 md:flex">
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
              Nosotros
            </Link>
          </div>

          <a
            href={`https://wa.me/573012198285?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:shadow-green-500/40 md:text-sm"
          >
            Hablemos
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto grid min-h-[850px] max-w-7xl items-center gap-14 px-6 pb-24 pt-40 md:px-10 lg:grid-cols-2 lg:px-12">

        {/* TEXTO HERO */}
        <div className="relative z-20">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
              Inteligencia artificial aplicada
            </span>
          </div>

          <h1 className="max-w-2xl text-5xl font-bold leading-[1.12] tracking-tight md:text-6xl lg:text-[68px]">
            La inteligencia artificial puede{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              impulsar tu negocio.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-blue-100/65">
            Transformamos las posibilidades de la inteligencia artificial en
            soluciones digitales que ayudan a tu negocio a trabajar de manera
            más inteligente, optimizar procesos y ofrecer mejores experiencias.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={`https://wa.me/573012198285?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-7 py-4 font-bold text-white shadow-xl shadow-green-500/20 transition hover:-translate-y-1 hover:shadow-green-500/40"
            >
              Explorar soluciones
              <span className="transition group-hover:translate-x-1">→</span>
            </a>

            <a
              href="#soluciones"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold text-blue-100 transition hover:border-blue-300/40 hover:bg-white/[0.08]"
            >
              Conocer más
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
            <div>
              <p className="text-2xl font-bold text-white">IA</p>
              <p className="mt-1 text-xs text-blue-200/50">
                Tecnología aplicada
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="mt-1 text-xs text-blue-200/50">
                Enfoque en tu negocio
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">MDS</p>
              <p className="mt-1 text-xs text-blue-200/50">
                Estrategia & crecimiento
              </p>
            </div>
          </div>
        </div>

        {/* VISUAL 3D DE INTELIGENCIA ARTIFICIAL */}
        <div className="relative mx-auto flex h-[540px] w-full max-w-[570px] items-center justify-center">

          <div className="absolute h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />

          <div
            className="absolute h-[420px] w-[420px] rounded-full border border-blue-400/10"
            style={{
              transform: `rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
            }}
          />

          <div
            className="absolute h-[330px] w-[330px] rounded-full border border-dashed border-cyan-400/20"
            style={{
              transform: `rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * -8}deg)`,
            }}
          />

          <div
            className="absolute h-[250px] w-[250px] rounded-full border border-violet-400/20"
            style={{
              transform: `rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`,
            }}
          />

          {/* NÚCLEO CENTRAL CON LOGO REAL DE MDS */}
          <div
            className="relative z-20 flex h-56 w-56 items-center justify-center rounded-[48px] border border-cyan-300/30 bg-gradient-to-br from-blue-500/25 via-[#101e3d] to-violet-600/20 shadow-[0_0_100px_rgba(59,130,246,0.25)] backdrop-blur-2xl transition-transform duration-300"
            style={{
              transform: `perspective(900px) rotateX(${mousePosition.y * -4}deg) rotateY(${mousePosition.x * 4}deg)`,
            }}
          >
            <div className="absolute inset-3 rounded-[38px] border border-white/10" />

            {/* RESPLANDOR DEL LOGO */}
            <div className="absolute h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl" />

            {/* LOGO ORIGINAL */}
            <div className="relative flex h-full w-full items-center justify-center p-7">
              <img
                src="/logo-mds.png"
                alt="Meta Digital Studio - Logo"
                className="relative z-10 h-full w-full object-contain drop-shadow-[0_0_18px_rgba(96,165,250,0.45)]"
              />
            </div>
          </div>

          {/* TARJETAS FLOTANTES */}
          <div className="absolute left-0 top-16 animate-[float_6s_ease-in-out_infinite] rounded-2xl border border-blue-300/20 bg-[#101c34]/90 p-4 shadow-2xl shadow-blue-900/30 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-xl text-cyan-300">
                ✦
              </div>
              <div>
                <p className="text-xs font-bold text-white">Asistencia IA</p>
                <p className="text-[10px] text-blue-200/50">
                  Atención inteligente
                </p>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-24 animate-[float_7s_ease-in-out_infinite] rounded-2xl border border-violet-300/20 bg-[#101c34]/90 p-4 shadow-2xl shadow-violet-900/30 backdrop-blur-xl [animation-delay:1s]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-xl text-violet-300">
                ⌘
              </div>
              <div>
                <p className="text-xs font-bold text-white">Automatización</p>
                <p className="text-[10px] text-blue-200/50">
                  Procesos eficientes
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-20 left-2 animate-[float_8s_ease-in-out_infinite] rounded-2xl border border-orange-300/20 bg-[#101c34]/90 p-4 shadow-2xl shadow-orange-900/20 backdrop-blur-xl [animation-delay:2s]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 text-xl text-orange-300">
                ✧
              </div>
              <div>
                <p className="text-xs font-bold text-white">Creatividad</p>
                <p className="text-[10px] text-blue-200/50">
                  Contenido inteligente
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-16 right-2 animate-[float_7s_ease-in-out_infinite] rounded-2xl border border-emerald-300/20 bg-[#101c34]/90 p-4 shadow-2xl shadow-emerald-900/20 backdrop-blur-xl [animation-delay:3s]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-xl text-emerald-300">
                ◈
              </div>
              <div>
                <p className="text-xs font-bold text-white">Estrategia</p>
                <p className="text-[10px] text-blue-200/50">
                  Soluciones a medida
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />
        </div>
      </section>

      {/* MENSAJE DE TRANSICIÓN */}
      <section className="relative z-10 border-y border-white/[0.07] bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center md:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
            Más que tecnología
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
            No se trata de utilizar IA por utilizarla.{" "}
            <span className="text-blue-300">
              Se trata de hacer que trabaje a favor de tu negocio.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-100/60">
            Cada negocio tiene necesidades diferentes. Por eso, en MDS
            buscamos oportunidades reales para aplicar inteligencia artificial
            de manera estratégica, práctica y responsable.
          </p>
        </div>
      </section>

      {/* SOLUCIONES */}
      <section
        id="soluciones"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-12"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            Lo que podemos desarrollar
          </p>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Soluciones inteligentes para{" "}
            <span className="text-blue-300">nuevos desafíos.</span>
          </h2>
          <p className="mt-6 leading-8 text-blue-100/60">
            La inteligencia artificial ofrece múltiples posibilidades.
            Exploramos las que realmente pueden aportar valor a tu empresa,
            emprendimiento o proyecto.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <button
              key={solution.number}
              type="button"
              onClick={() => setActiveSolution(index)}
              className={`group relative overflow-hidden rounded-3xl border p-7 text-left transition duration-300 md:p-9 ${
                activeSolution === index
                  ? "border-blue-400/40 bg-gradient-to-br from-blue-500/[0.13] to-violet-500/[0.06] shadow-2xl shadow-blue-950/30"
                  : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.05]"
              }`}
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-[65px] transition group-hover:bg-blue-400/20" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.color} text-2xl font-bold text-white shadow-lg`}>
                    {solution.icon}
                  </div>
                  <span className="text-sm font-bold tracking-[0.2em] text-blue-200/30">
                    {solution.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {solution.title}
                </h3>

                <p className="mt-4 min-h-[90px] leading-7 text-blue-100/60">
                  {solution.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm font-semibold text-blue-200">
                    {activeSolution === index
                      ? "Solución seleccionada"
                      : "Explorar solución"}
                  </span>
                  <span className="text-xl text-cyan-300 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>

                {activeSolution === index && (
                  <div className="mt-6 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
                    {solution.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-blue-100/75"
                      >
                        <span className="text-cyan-300">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="relative z-10 border-y border-white/[0.07] bg-[#081326] py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-2 lg:px-12">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              El valor de hacerlo bien
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Más tiempo para lo que realmente{" "}
              <span className="text-blue-300">importa.</span>
            </h2>

            <p className="mt-7 leading-8 text-blue-100/60">
              Una solución de inteligencia artificial bien planteada no busca
              reemplazar el valor de las personas. Busca apoyarlas, facilitar
              su trabajo y mejorar la forma en que un negocio desarrolla sus
              actividades.
            </p>

            <a
              href={`https://wa.me/573012198285?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-3 font-bold text-cyan-300 transition hover:text-white"
            >
              Hablemos de tu proyecto
              <span>→</span>
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: "◷",
                title: "Ahorro de tiempo",
                description:
                  "Disminuye el esfuerzo dedicado a tareas repetitivas.",
              },
              {
                icon: "◎",
                title: "Mejor atención",
                description:
                  "Facilita la orientación y respuesta a tus clientes.",
              },
              {
                icon: "⌘",
                title: "Mayor organización",
                description:
                  "Optimiza procesos y conecta actividades digitales.",
              },
              {
                icon: "✧",
                title: "Nuevas posibilidades",
                description:
                  "Explora herramientas que pueden impulsar tu crecimiento.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
              >
                <span className="text-3xl text-cyan-300">
                  {benefit.icon}
                </span>
                <h3 className="mt-6 text-lg font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-blue-100/55">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section
        id="proceso"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-12"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            Nuestra metodología
          </p>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            De una necesidad a una{" "}
            <span className="text-blue-300">solución inteligente.</span>
          </h2>
          <p className="mt-6 leading-8 text-blue-100/60">
            No comenzamos eligiendo una herramienta. Comenzamos entendiendo
            qué necesita tu negocio.
          </p>
        </div>

        <div className="relative mt-20 grid gap-10 md:grid-cols-4">
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent md:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/30 bg-[#0c1a31] text-lg font-bold text-cyan-300 shadow-lg shadow-blue-950/40">
                {step.number}
              </div>
              <h3 className="mt-7 text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-blue-100/55">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ENFOQUE MDS */}
      <section className="relative z-10 overflow-hidden border-y border-white/10 bg-gradient-to-br from-[#0b1b35] via-[#0a1427] to-[#10112b] py-24">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-3xl text-cyan-300">
            ✦
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            Nuestra filosofía
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
            La tecnología debe adaptarse a tu negocio.{" "}
            <span className="text-blue-300">
              No tu negocio a la tecnología.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-blue-100/60">
            En Meta Digital Studio combinamos estrategia, herramientas
            digitales e inteligencia artificial para construir soluciones
            que tengan sentido para cada proyecto.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 px-6 py-28 md:px-10">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-blue-300/20 bg-gradient-to-br from-[#11264a] via-[#0d1c38] to-[#151634] px-7 py-16 text-center shadow-2xl shadow-blue-950/40 md:px-16 md:py-20">

          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-400/15 blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-400/15 blur-[80px]" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              El siguiente paso comienza aquí
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Tu negocio tiene nuevas posibilidades.{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Descúbrelas con IA.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-blue-100/65">
              Cuéntanos qué necesitas mejorar, qué proceso quieres optimizar
              o qué idea te gustaría desarrollar. En MDS podemos ayudarte a
              explorar las posibilidades.
            </p>

            <a
              href={`https://wa.me/573012198285?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-9 py-4 font-bold text-white shadow-xl shadow-green-500/20 transition hover:-translate-y-1 hover:shadow-green-500/40"
            >
              Cuéntanos tu idea
              <span className="text-xl">→</span>
            </a>

            <p className="mt-6 text-xs text-blue-200/40">
              Meta Digital Studio · Estrategia & Crecimiento Digital
            </p>
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

      {/* ANIMACIONES */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-13px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
