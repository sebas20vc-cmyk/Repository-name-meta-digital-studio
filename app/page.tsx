"use client";

import { useEffect, useState, type FormEvent } from "react";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  accent: "blue" | "orange";
};

function ServiceCard({
  number,
  title,
  description,
  tags,
  icon,
  accent,
}: ServiceCardProps) {
  const isOrange = accent === "orange";

  const serviceHref =
    title === "SEO Local"
      ? "/servicios/seo-local"
      : title === "Diseño Web"
        ? "/servicios/diseno-web"
        : title === "Consultoría de Marketing"
          ? "/servicios/consultoria-marketing"
          : "/servicios/soluciones-ia";

  return (
    <a
      href={serviceHref}
      className="group relative block min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.055]"
    >
      {/* GLOW DE FONDO */}
      <div
        className={`absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[90px] transition-all duration-700 ${
          isOrange
            ? "bg-orange-500/[0.07] group-hover:bg-orange-500/[0.15]"
            : "bg-blue-500/[0.07] group-hover:bg-blue-500/[0.15]"
        }`}
      />

      <div
        className={`absolute -bottom-24 -left-20 h-56 w-56 rounded-full blur-[90px] transition-all duration-700 ${
          isOrange ? "bg-blue-500/[0.04]" : "bg-orange-500/[0.04]"
        }`}
      />

      {/* GRID SUTIL */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:38px_38px]" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium tracking-[0.3em] text-white/30">
            {number}
          </span>

          <div
            className={`flex h-11 w-11 items-center justify-center rounded-2xl border text-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
              isOrange
                ? "border-orange-300/20 bg-orange-400/[0.07] text-orange-300 shadow-[0_0_30px_rgba(251,146,60,0.08)]"
                : "border-blue-300/20 bg-blue-400/[0.07] text-blue-300 shadow-[0_0_30px_rgba(96,165,250,0.08)]"
            }`}
          >
            {icon}
          </div>
        </div>

        {/* VISUAL */}
        <div className="relative mt-8 flex h-24 items-center">
          <div
            className={`absolute left-2 h-20 w-20 rounded-full border transition-all duration-700 group-hover:scale-110 ${
              isOrange ? "border-orange-400/20" : "border-blue-400/20"
            }`}
          />

          <div
            className={`absolute left-7 h-12 w-12 rounded-full border transition-all duration-700 group-hover:scale-125 ${
              isOrange ? "border-orange-300/30" : "border-blue-300/30"
            }`}
          />

          <div
            className={`absolute left-[47px] h-3 w-3 rounded-full transition-all duration-500 group-hover:scale-150 ${
              isOrange
                ? "bg-orange-400 shadow-[0_0_25px_rgba(251,146,60,0.9)]"
                : "bg-blue-400 shadow-[0_0_25px_rgba(96,165,250,0.9)]"
            }`}
          />

          <div
            className={`absolute left-0 top-1/2 h-px w-40 origin-left scale-x-50 transition-all duration-700 group-hover:scale-x-100 ${
              isOrange
                ? "bg-gradient-to-r from-orange-400/50 to-transparent"
                : "bg-gradient-to-r from-blue-400/50 to-transparent"
            }`}
          />
        </div>

        {/* TEXTO */}
        <div className="mt-auto">
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {title}
            </h3>

            <span
              className={`translate-x-[-4px] text-lg opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 ${
                isOrange ? "text-orange-300" : "text-blue-300"
              }`}
            >
              ↗
            </span>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/45 transition-colors duration-500 group-hover:text-white/60">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[11px] text-white/40 transition-all duration-500 group-hover:border-white/15 group-hover:text-white/55"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

function ProcessStep({
  number,
  title,
  description,
}: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-sm font-medium text-orange-300">
          {number}
        </div>

        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>

      <p className="text-sm leading-7 text-white/50">{description}</p>
    </div>
  );
}

/* ========================================================= */
/* CLIENTES / PROYECTOS                                      */
/* ========================================================= */

type ClientProject = {
  name: string;
  logo: string;
  service: string;
  url?: string;
  destination?: "google" | "web";
};

const clientProjects: ClientProject[] = [
  // CLIENTE 1
  {
    name: "Dulzura Divina",
    logo: "/clientes/cliente-1-dulzura-divina.png",
    service: "SEO Local",
    url: "https://share.google/1YnZJdB3AElZRxLmB",
    destination: "google",
  },

  // CLIENTE 2
  {
    name: "M&G Racing Store",
    logo: "/clientes/cliente-2-mg-racing-store.png",
    service: "Diseño Web",
    url: "https://www.mygracingstore.com",
    destination: "web",
  },

  // CLIENTE 3
  {
    name: "Veterinaria Dr. Vacca",
    logo: "/clientes/cliente-3-dr-vacca.png",
    service: "SEO Local",
    url: "https://share.google/do1cXLFJgFQAkzLDX",
    destination: "google",
  },
];

/*
 * AQUÍ AGREGARÁS LOS CLIENTES REALES.
 *
 * Ejemplo:
 *
 * {
 *   name: "Nombre del negocio",
 *   logo: "/clientes/nombre-negocio.png",
 *   service: "SEO Local",
 *   url: "https://...",
 *   destination: "google",
 * }
 *
 * No he inventado clientes ni URLs.
 */

/* ========================================================= */
/* VAGÓN DEL TREN                                            */
/* ========================================================= */

function ClientTrainWagon({
  project,
  index,
}: {
  project?: ClientProject;
  index: number;
}) {
  const content = (
    <div className="group relative h-[230px] w-[290px] shrink-0 overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0a1629]/90 shadow-[0_15px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:shadow-[0_20px_80px_rgba(59,130,246,0.12)] sm:w-[330px]">
      {/* GLOW */}
      <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-blue-500/[0.07] blur-[70px] transition-all duration-500 group-hover:bg-blue-500/[0.13]" />

      <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-orange-500/[0.045] blur-[70px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* PARTE SUPERIOR */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-5">
        <span className="text-[9px] font-medium tracking-[0.35em] text-white/25 uppercase">
          Proyecto {String(index + 1).padStart(2, "0")}
        </span>

        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[10px] text-white/30 transition group-hover:border-blue-300/20 group-hover:text-blue-300">
          ↗
        </span>
      </div>

      {/* LOGO */}
      <div className="relative z-10 flex h-[112px] items-center justify-center px-8">
        {project ? (
          <div className="flex h-[82px] w-full items-center justify-center rounded-2xl border border-white/5 bg-white/[0.025] p-5">
            <img
              src={project.logo}
              alt={project.name}
              className="max-h-full max-w-[180px] object-contain opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
          </div>
        ) : (
          <div className="relative flex h-[82px] w-full items-center justify-center rounded-2xl border border-white/5 bg-white/[0.025]">
            <div className="absolute h-16 w-16 rounded-full bg-blue-500/[0.08] blur-2xl" />

            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
              <div className="h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.9)]" />
            </div>
          </div>
        )}
      </div>

      {/* INFORMACIÓN */}
      <div className="relative z-10 px-6">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white/75">
              {project ? project.name : "Próximo proyecto"}
            </p>

            <p className="mt-1 text-[10px] tracking-[0.2em] text-white/25 uppercase">
              {project ? project.service : "MDS · Proyecto"}
            </p>
          </div>

          <span className="shrink-0 text-[9px] tracking-[0.2em] text-blue-300/40 uppercase">
            MDS
          </span>
        </div>
      </div>

      {/* LÍNEA INFERIOR */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
    </div>
  );

  if (project?.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Ver proyecto ${project.name}`}
        className="block shrink-0"
      >
        {content}
      </a>
    );
  }

  return <div className="shrink-0">{content}</div>;
}

/* ========================================================= */
/* TREN CONTINUO                                             */
/* ========================================================= */

function ClientTrain() {
  /*
   * Mientras todavía no haya clientes cargados, mostramos vagones
   * de preparación. Cuando agregues clientes al arreglo anterior,
   * el tren utilizará automáticamente esos proyectos.
   */
  const fallbackProjects: ClientProject[] = [
    {
      name: "Próximo proyecto",
      logo: "",
      service: "SEO Local",
    },
    {
      name: "Próximo proyecto",
      logo: "",
      service: "Diseño Web",
    },
    {
      name: "Próximo proyecto",
      logo: "",
      service: "Estrategia",
    },
    {
      name: "Próximo proyecto",
      logo: "",
      service: "Soluciones con IA",
    },
    {
      name: "Próximo proyecto",
      logo: "",
      service: "SEO Local",
    },
    {
      name: "Próximo proyecto",
      logo: "",
      service: "Presencia Digital",
    },
  ];

  const projects =
    clientProjects.length > 0 ? clientProjects : fallbackProjects;

  /*
   * DUPLICAMOS EL MISMO TREN.
   *
   * La animación desplaza exactamente el ancho de una copia.
   * Al llegar al final, la segunda copia es idéntica a la primera,
   * por lo que el reinicio es visualmente imperceptible.
   */
  const train = [...projects, ...projects];

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-8">
      {/* DESVANECIMIENTO LATERAL */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-[#07101f] via-[#07101f]/90 to-transparent sm:w-48" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-[#07101f] via-[#07101f]/90 to-transparent sm:w-48" />

      {/* LÍNEA DEL TREN */}
      <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />

      {/* MOVIMIENTO CONTINUO */}
      <div className="mds-train-track flex w-max items-center gap-5 pl-5">
        {train.map((project, index) => (
          <ClientTrainWagon
            key={`${project.name}-${project.service}-${index}`}
            project={project}
            index={index % projects.length}
          />
        ))}
      </div>

      {/* INDICADOR INFERIOR */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400/30" />

        <span className="text-[9px] font-medium tracking-[0.35em] text-white/20 uppercase">
          Proyectos · Experiencias · Crecimiento
        </span>

        <span className="h-px w-8 bg-gradient-to-l from-transparent to-orange-400/30" />
      </div>
    </div>
  );
}

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkjrpoqn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07101f] text-white">
      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <header className="fixed left-1/2 top-5 z-50 w-[calc(100%-32px)] max-w-6xl -translate-x-1/2">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-[#081326]/75 px-5 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl md:px-6">
          <a href="#inicio" className="flex items-center">
            <img
              src="/logo-mds.png"
              alt="Meta Digital Studio"
              className="h-18 w-auto object-contain"
            />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#inicio" className="text-sm text-white/60 transition hover:text-white">
              Inicio
            </a>

            <a href="#servicios" className="text-sm text-white/60 transition hover:text-white">
              Servicios
            </a>

            <a href="#proceso" className="text-sm text-white/60 transition hover:text-white">
              Proceso
            </a>

            <a href="#nosotros" className="text-sm text-white/60 transition hover:text-white">
              Nosotros
            </a>

            <a
              href="#contacto"
              className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm text-white transition hover:border-orange-400/40 hover:bg-white/[0.08]"
            >
              Contacto
            </a>
          </div>
        </nav>
      </header>

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section
        id="inicio"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32"
      >
        {/* FONDO */}
        <div className="absolute inset-0">
          <div className="absolute left-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute right-[-10%] top-[25%] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* TEXTO HERO */}
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(251,146,60,0.9)]" />

              <span className="text-xs font-medium tracking-[0.2em] text-white/55">
                META DIGITAL STUDIO
              </span>
            </div>

            <p className="mb-5 text-sm font-medium tracking-[0.35em] text-blue-300/80 uppercase">
              Estrategia & crecimiento digital
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Haz que tu negocio{" "}
              <span className="bg-gradient-to-r from-white via-blue-200 to-orange-300 bg-clip-text text-transparent">
                avance.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/50 sm:text-lg">
              Impulsamos negocios locales con estrategia digital, presencia
              en Google, desarrollo web y soluciones inteligentes con IA.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-[#07101f] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10"
              >
                Solicitar diagnóstico gratuito
              </a>

              <a
                href="#servicios"
                className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-center text-sm font-medium text-white/75 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                Explorar servicios
              </a>
            </div>
          </div>

          {/* ===================================================== */}
          {/* VISUAL 3D MDS - NUEVA COMPOSICIÓN */}
          {/* ===================================================== */}

          <div className="relative flex min-h-[600px] items-center justify-center perspective-[1200px]">
            {/* ANILLO EXTERIOR */}
            <div
              className="absolute h-[430px] w-[430px] rounded-full border border-white/[0.07]"
              style={{
                transform: `translate3d(${mouse.x * 10}px, ${mouse.y * 10}px, 0) rotateX(${mouse.y * -3}deg) rotateY(${mouse.x * 3}deg)`,
                transition: "transform 0.15s ease-out",
              }}
            />

            {/* ANILLO INTERMEDIO */}
            <div
              className="absolute h-[350px] w-[350px] rounded-full border border-blue-400/[0.10]"
              style={{
                transform: `translate3d(${mouse.x * -15}px, ${mouse.y * -15}px, 0) rotateX(${mouse.y * 5}deg) rotateY(${mouse.x * -5}deg)`,
                transition: "transform 0.2s ease-out",
              }}
            />

            {/* ANILLO INTERIOR */}
            <div
              className="absolute h-[270px] w-[270px] rounded-full border border-orange-400/[0.10] bg-orange-500/[0.015]"
              style={{
                transform: `translate3d(${mouse.x * 18}px, ${mouse.y * 18}px, 0) rotateX(${mouse.y * -7}deg) rotateY(${mouse.x * 7}deg)`,
                transition: "transform 0.25s ease-out",
              }}
            />

            {/* GLOW CENTRAL */}
            <div
              className="absolute h-[280px] w-[280px] rounded-full bg-blue-500/[0.12] blur-[80px]"
              style={{
                transform: `translate3d(${mouse.x * 10}px, ${mouse.y * 10}px, 0)`,
                transition: "transform 0.2s ease-out",
              }}
            />

            {/* LOGO CENTRAL MDS */}
            <div
              className="mds-center relative z-20 flex h-56 w-56 items-center justify-center rounded-[3rem] border border-cyan-300/30 bg-gradient-to-br from-blue-500/25 via-[#101e3d] to-violet-600/20 shadow-[0_0_100px_rgba(59,130,246,0.30)] backdrop-blur-2xl"
              style={{
                transform: `translate3d(${mouse.x * 12}px, ${mouse.y * 12}px, 40px) rotateX(${mouse.y * -8}deg) rotateY(${mouse.x * 8}deg)`,
                transition: "transform 0.15s ease-out",
              }}
            >
              <div className="absolute inset-3 rounded-[2.4rem] border border-white/10" />
              <div className="absolute h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />

              <div className="relative flex h-full w-full items-center justify-center p-7">
                <img
                  src="/logo-mds.png"
                  alt="Meta Digital Studio"
                  className="relative z-10 h-full w-full object-contain drop-shadow-[0_0_22px_rgba(96,165,250,0.5)]"
                />
              </div>
            </div>

            {/* MÓDULO GOOGLE */}
            <div
              className="mds-float mds-float-one absolute left-[3%] top-[13%] z-30 flex h-[125px] w-[112px] flex-col items-center justify-center rounded-[1.6rem] border border-white/15 bg-[#0b172b]/75 shadow-xl shadow-blue-500/10 backdrop-blur-2xl"
              style={{
                transform: `translate3d(${mouse.x * -22}px, ${mouse.y * -14}px, 70px)`,
              }}
            >
              <span className="text-xs font-medium tracking-wide text-white/75">
                Google
              </span>

              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-300/25 bg-blue-400/10 text-2xl font-bold text-blue-300 shadow-[0_0_25px_rgba(96,165,250,0.12)]">
                G
              </div>
            </div>

            {/* MÓDULO WEB */}
            <div
              className="mds-float mds-float-two absolute right-[2%] top-[24%] z-30 flex h-[125px] w-[112px] flex-col items-center justify-center rounded-[1.6rem] border border-white/15 bg-[#0b172b]/75 shadow-xl shadow-orange-500/10 backdrop-blur-2xl"
              style={{
                transform: `translate3d(${mouse.x * 25}px, ${mouse.y * 16}px, 80px)`,
              }}
            >
              <span className="text-xs font-medium tracking-wide text-white/75">
                Web
              </span>

              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-300/25 bg-orange-400/10 text-2xl text-orange-300 shadow-[0_0_25px_rgba(251,146,60,0.12)]">
                ◉
              </div>
            </div>

            {/* MÓDULO ESTRATEGIA */}
            <div
              className="mds-float mds-float-three absolute bottom-[15%] left-[5%] z-30 flex h-[125px] w-[112px] flex-col items-center justify-center rounded-[1.6rem] border border-white/15 bg-[#0b172b]/75 shadow-xl shadow-blue-500/10 backdrop-blur-2xl"
              style={{
                transform: `translate3d(${mouse.x * -18}px, ${mouse.y * 22}px, 60px)`,
              }}
            >
              <span className="text-xs font-medium tracking-wide text-white/75">
                Estrategia
              </span>

              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-300/25 bg-blue-400/10 text-2xl text-blue-300 shadow-[0_0_25px_rgba(96,165,250,0.12)]">
                ✦
              </div>
            </div>

            {/* MÓDULO IA */}
            <div
              className="mds-float mds-float-four absolute bottom-[11%] right-[4%] z-30 flex h-[125px] w-[112px] flex-col items-center justify-center rounded-[1.6rem] border border-white/15 bg-[#0b172b]/75 shadow-xl shadow-orange-500/10 backdrop-blur-2xl"
              style={{
                transform: `translate3d(${mouse.x * 20}px, ${mouse.y * 25}px, 90px)`,
              }}
            >
              <span className="text-xs font-medium tracking-wide text-white/75">
                IA
              </span>

              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-300/25 bg-orange-400/10 text-sm font-bold text-orange-300 shadow-[0_0_25px_rgba(251,146,60,0.12)]">
                AI
              </div>
            </div>

            {/* DESTELLOS */}
            <div className="absolute left-[28%] top-[30%] h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_15px_rgba(147,197,253,0.9)]" />

            <div className="absolute right-[25%] top-[19%] h-1 w-1 rounded-full bg-orange-300 shadow-[0_0_15px_rgba(253,186,116,0.9)]" />

            <div className="absolute bottom-[29%] right-[31%] h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_15px_rgba(147,197,253,0.9)]" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-center md:block">
          <span className="text-[10px] tracking-[0.35em] text-white/25 uppercase">
            Desplázate para explorar
          </span>
        </div>
      </section>

      {/* ========================================================= */}
      {/* NOSOTROS */}
      {/* ========================================================= */}

      <section
        id="nosotros"
        className="relative overflow-hidden border-t border-white/5 px-6 py-32"
      >
        <div className="absolute left-[-15%] top-[20%] h-[420px] w-[420px] rounded-full bg-blue-600/[0.06] blur-[130px]" />
        <div className="absolute right-[-10%] bottom-[10%] h-[380px] w-[380px] rounded-full bg-orange-500/[0.05] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="h-px w-10 bg-orange-400/70" />

                <p className="text-xs font-medium tracking-[0.3em] text-orange-300/80 uppercase">
                  Nuestra visión
                </p>
              </div>

              <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Digitalizar no es el objetivo.
                <br />
                <span className="bg-gradient-to-r from-white/80 via-blue-200/70 to-orange-300/70 bg-clip-text text-transparent">
                  Hacer avanzar tu negocio sí.
                </span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
                En Meta Digital Studio entendemos lo digital como una
                herramienta para avanzar. Analizamos, estructuramos y
                desarrollamos soluciones que ayudan a los negocios a construir
                una presencia más clara, profesional y preparada para crecer.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {/* ESTRATEGIA */}
            <div className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/20 hover:bg-white/[0.05]">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs font-medium tracking-[0.3em] text-white/25">
                  01
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-300/20 bg-orange-400/[0.06] text-orange-300">
                  ✦
                </div>
              </div>

              <h3 className="mb-4 text-xl font-semibold text-white">
                Estrategia
              </h3>

              <p className="text-sm leading-7 text-white/40">
                Cada negocio tiene una realidad diferente. Por eso partimos
                del análisis antes de proponer soluciones.
              </p>
            </div>

            {/* PRESENCIA */}
            <div className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/20 hover:bg-white/[0.05]">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs font-medium tracking-[0.3em] text-white/25">
                  02
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/[0.06] text-blue-300">
                  ◉
                </div>
              </div>

              <h3 className="mb-4 text-xl font-semibold text-white">
                Presencia
              </h3>

              <p className="text-sm leading-7 text-white/40">
                Construimos una presencia digital coherente para que tu
                negocio comunique mejor quién es y qué ofrece.
              </p>
            </div>

            {/* CRECIMIENTO */}
            <div className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/20 hover:bg-white/[0.05]">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs font-medium tracking-[0.3em] text-white/25">
                  03
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-300/20 bg-orange-400/[0.06] text-orange-300">
                  ↗
                </div>
              </div>

              <h3 className="mb-4 text-xl font-semibold text-white">
                Crecimiento
              </h3>

              <p className="text-sm leading-7 text-white/40">
                Transformamos las oportunidades detectadas en acciones
                concretas que permitan construir una base digital más sólida.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs tracking-[0.25em] text-white/25 uppercase">
              Estrategia · Presencia · Crecimiento
            </p>

            <p className="text-sm text-white/30">Meta Digital Studio</p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVICIOS */}
      {/* ========================================================= */}

      <section
        id="servicios"
        className="relative overflow-hidden border-t border-white/5 px-6 py-32"
      >
        {/* AMBIENTE */}
        <div className="absolute left-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-blue-600/[0.05] blur-[140px]" />
        <div className="absolute right-[-12%] bottom-[10%] h-[450px] w-[450px] rounded-full bg-orange-500/[0.045] blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* ENCABEZADO */}
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="h-px w-10 bg-blue-400/70" />

                <p className="text-xs font-medium tracking-[0.3em] text-blue-300/80 uppercase">
                  Servicios
                </p>
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Soluciones digitales
                <br />
                <span className="bg-gradient-to-r from-white/75 via-blue-200/60 to-orange-300/60 bg-clip-text text-transparent">
                  pensadas para avanzar.
                </span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-base leading-8 text-white/40 sm:text-lg">
                Combinamos presencia digital, estrategia, desarrollo y
                tecnología para construir soluciones que respondan a las
                necesidades reales de cada negocio.
              </p>
            </div>
          </div>

          {/* TARJETAS */}
          <div className="grid gap-5 md:grid-cols-2">
            <ServiceCard
              number="01"
              title="SEO Local"
              icon="G"
              accent="blue"
              description="Optimizamos la presencia de tu negocio en Google para mejorar la información, estructura y experiencia de quienes lo buscan."
              tags={["Google", "Maps", "Perfil de Negocio"]}
            />

            <ServiceCard
              number="02"
              title="Diseño Web"
              icon="◉"
              accent="orange"
              description="Diseñamos sitios web profesionales que comunican con claridad lo que haces y construyen una presencia digital más sólida."
              tags={["Diseño", "Desarrollo", "Experiencia"]}
            />

            <ServiceCard
              number="03"
              title="Consultoría de Marketing"
              icon="✦"
              accent="orange"
              description="Analizamos tu ecosistema digital y convertimos las oportunidades detectadas en una estrategia clara y accionable."
              tags={["Estrategia", "Análisis", "Crecimiento"]}
            />

            <ServiceCard
              number="04"
              title="Soluciones con IA"
              icon="AI"
              accent="blue"
              description="Integramos herramientas de inteligencia artificial para optimizar procesos, contenidos y nuevas oportunidades digitales."
              tags={["IA", "Automatización", "Innovación"]}
            />
          </div>

          {/* CIERRE */}
          <div className="mt-10 flex flex-col gap-4 border-t border-white/5 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs tracking-[0.25em] text-white/25 uppercase">
              Google · Web · Estrategia · IA
            </p>

            <p className="text-sm text-white/30">
              Explora una solución para tu negocio →
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PROCESO */}
      {/* ========================================================= */}

      <section
        id="proceso"
        className="relative border-t border-white/5 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-xs font-medium tracking-[0.3em] text-orange-300/80 uppercase">
              Proceso
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Del diagnóstico
              <span className="text-white/35"> a la acción.</span>
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            <ProcessStep
              number="01"
              title="Diagnóstico"
              description="Revisamos tu presencia digital, detectamos oportunidades y definimos los puntos que requieren atención."
            />

            <ProcessStep
              number="02"
              title="Estrategia"
              description="Convertimos el diagnóstico en una ruta de trabajo clara, priorizando lo que realmente puede aportar valor."
            />

            <ProcessStep
              number="03"
              title="Implementación"
              description="Ejecutamos las mejoras acordadas y dejamos una estructura digital más clara y preparada para crecer."
            />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PROYECTOS — TREN CONTINUO MDS */}
      {/* ========================================================= */}

      <section
        id="proyectos"
        className="relative overflow-hidden border-t border-white/5 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-medium tracking-[0.3em] text-blue-300/80 uppercase">
                Proyectos
              </p>

              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Trabajo que
                <span className="text-white/35"> habla por sí mismo.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/35">
              Una selección de proyectos, comercios y marcas que iremos
              incorporando al ecosistema digital de Meta Digital Studio.
            </p>
          </div>

          {/* ===================================================== */}
          {/* TREN EN MOVIMIENTO CONTINUO                          */}
          {/* ===================================================== */}

          <ClientTrain />
        </div>
      </section>

      {/* ========================================================= */}
      {/* GOOGLE — RESEÑAS Y PRESENCIA */}
      {/* ========================================================= */}

      <section
        id="google"
        className="relative overflow-hidden border-t border-white/5 px-6 py-28"
      >
        <div className="absolute left-[-12%] top-[20%] h-[420px] w-[420px] rounded-full bg-blue-500/[0.06] blur-[130px]" />
        <div className="absolute right-[-10%] bottom-[10%] h-[380px] w-[380px] rounded-full bg-orange-500/[0.045] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="h-px w-10 bg-blue-400/70" />

                <p className="text-xs font-medium tracking-[0.3em] text-blue-300/80 uppercase">
                  Google
                </p>
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Una presencia que
                <br />
                <span className="bg-gradient-to-r from-white/75 via-blue-200/60 to-orange-300/60 bg-clip-text text-transparent">
                  también habla por nosotros.
                </span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-base leading-8 text-white/40 sm:text-lg">
                Conoce nuestra presencia en Google, consulta la información
                del perfil y descubre las experiencias que nuestros clientes
                han decidido compartir.
              </p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            {/* RESEÑAS */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl transition-all duration-500 hover:border-blue-400/20 hover:bg-white/[0.05] md:p-10">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/[0.07] blur-[90px] transition-all duration-700 group-hover:bg-blue-500/[0.12]" />

              <div className="relative z-10">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.3em] text-white/25 uppercase">
                      Perfil de Google
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      Meta Digital Studio
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-white/40">
                      Tu opinión ayuda a construir confianza y nos permite
                      seguir mejorando la experiencia digital que ofrecemos.
                    </p>
                  </div>

                  <div className="shrink-0 rounded-2xl border border-blue-300/15 bg-blue-400/[0.05] px-5 py-4 text-center">
                    <div className="text-2xl tracking-[0.2em] text-orange-300">
                      ★★★★★
                    </div>
                    <p className="mt-2 text-[9px] tracking-[0.25em] text-white/25 uppercase">
                      Reseñas en Google
                    </p>
                  </div>
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://maps.app.goo.gl/LJvg4JxuiLzwwsuL7"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-[#07101f] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10"
                  >
                    Ver perfil en Google
                  </a>

                  <a
                    href="https://g.page/r/Cc8RQKcx67FcECE/review"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-center text-sm font-medium text-white/70 transition hover:-translate-y-1 hover:border-orange-400/30 hover:text-white"
                  >
                    Dejar una reseña ↗
                  </a>
                </div>
              </div>
            </div>

            {/* PRESENCIA */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl transition-all duration-500 hover:border-orange-400/20 hover:bg-white/[0.05] md:p-10">
              <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-orange-500/[0.06] blur-[90px] transition-all duration-700 group-hover:bg-orange-500/[0.11]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium tracking-[0.3em] text-white/25 uppercase">
                    Presencia local
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-300/20 bg-orange-400/[0.06] text-xl text-orange-300">
                    G
                  </div>
                </div>

                <h3 className="mt-7 text-2xl font-semibold text-white">
                  Encuéntranos en Google
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  Consulta nuestra ubicación, información del negocio y
                  presencia directamente desde Google Maps.
                </p>

                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-[#07101f]/70 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/[0.06] text-blue-300">
                      ◉
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white/75">
                        Meta Digital Studio
                      </p>
                      <p className="mt-1 text-[10px] tracking-[0.15em] text-white/25 uppercase">
                        Google Business Profile
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.app.goo.gl/LJvg4JxuiLzwwsuL7"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm font-medium text-white/65 transition hover:border-blue-400/25 hover:bg-white/[0.06] hover:text-white"
                >
                  <span>Abrir ubicación en Google Maps</span>
                  <span className="text-blue-300">↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/5 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs tracking-[0.25em] text-white/25 uppercase">
              Google · Confianza · Presencia local
            </p>

            <p className="text-sm text-white/30">
              Meta Digital Studio
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACTO */}
      {/* ========================================================= */}

      <section
        id="contacto"
        className="relative overflow-hidden border-t border-white/5 px-6 py-28"
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20 backdrop-blur-2xl md:p-12">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-4 text-xs font-medium tracking-[0.3em] text-orange-300/80 uppercase">
                  Hablemos de tu negocio
                </p>

                <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  El siguiente paso
                  <span className="text-white/35"> puede comenzar hoy.</span>
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-white/45">
                  Solicita un diagnóstico SEO Local gratuito y descubre qué
                  oportunidades puede tener tu presencia digital.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/573012198285"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#25D366] px-7 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/20"
                  >
                    Solicitar diagnóstico gratuito
                  </a>

                  <a
                    href="tel:+573012198285"
                    className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-center text-sm text-white/70 transition hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    +57 301 2198285
                  </a>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-white/10 shadow-[0_0_60px_rgba(59,130,246,0.25)] backdrop-blur-xl">
                  <img
                    src="/logo-mds.png"
                    alt="Meta Digital Studio"
                    className="h-30 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* FORMULARIO DE CONTACTO */}
            <form
              onSubmit={handleContactSubmit}
              className="mt-10 border-t border-white/10 pt-10"
            >
              <input
                type="hidden"
                name="_subject"
                value="Nueva solicitud de contacto — Meta Digital Studio"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="nombre"
                    className="mb-2 block text-xs font-medium tracking-[0.15em] text-white/45 uppercase"
                  >
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Tu nombre"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-blue-400/40 focus:bg-white/[0.06]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="negocio"
                    className="mb-2 block text-xs font-medium tracking-[0.15em] text-white/45 uppercase"
                  >
                    Nombre del negocio
                  </label>
                  <input
                    id="negocio"
                    name="negocio"
                    type="text"
                    required
                    placeholder="Nombre de tu negocio"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-blue-400/40 focus:bg-white/[0.06]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefono"
                    className="mb-2 block text-xs font-medium tracking-[0.15em] text-white/45 uppercase"
                  >
                    WhatsApp / teléfono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+57 300 000 0000"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-blue-400/40 focus:bg-white/[0.06]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="correo"
                    className="mb-2 block text-xs font-medium tracking-[0.15em] text-white/45 uppercase"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="correo"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="correo@ejemplo.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-blue-400/40 focus:bg-white/[0.06]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="servicio"
                    className="mb-2 block text-xs font-medium tracking-[0.15em] text-white/45 uppercase"
                  >
                    Servicio de interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-white/10 bg-[#0a1629] px-5 py-4 text-sm text-white/70 outline-none transition focus:border-blue-400/40"
                  >
                    <option value="" disabled>
                      Selecciona un servicio
                    </option>
                    <option value="SEO Local">SEO Local</option>
                    <option value="Diseño Web">Diseño Web</option>
                    <option value="Consultoría de Marketing">Consultoría de Marketing</option>
                    <option value="Soluciones con IA">Soluciones con IA</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="mensaje"
                    className="mb-2 block text-xs font-medium tracking-[0.15em] text-white/45 uppercase"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    placeholder="Cuéntanos brevemente qué necesitas o qué quieres mejorar en tu negocio."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-7 text-white outline-none placeholder:text-white/20 transition focus:border-blue-400/40 focus:bg-white/[0.06]"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-h-[24px] text-sm">
                  {formStatus === "success" && (
                    <p className="text-emerald-300">
                      Solicitud enviada correctamente. Te contactaremos pronto.
                    </p>
                  )}

                  {formStatus === "error" && (
                    <p className="text-red-300">
                      No pudimos enviar la solicitud. Inténtalo nuevamente.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Enviando solicitud..." : "Solicitar diagnóstico"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER MDS */}
      {/* ========================================================= */}

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
              <a href="#inicio" className="transition hover:text-white">
                Inicio
              </a>

              <a href="#servicios" className="transition hover:text-white">
                Servicios
              </a>

              <a href="#proceso" className="transition hover:text-white">
                Proceso
              </a>

              <a href="#nosotros" className="transition hover:text-white">
                ¿Por qué nosotros?
              </a>

              <a href="#contacto" className="transition hover:text-white">
                Contacto
              </a>
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

      {/* ========================================================= */}
      {/* ANIMACIONES 3D + TREN CONTINUO                            */}
      {/* ========================================================= */}

      <style jsx global>{`
        @keyframes mdsFloatOne {
          0%, 100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -16px;
          }
        }

        @keyframes mdsFloatTwo {
          0%, 100% {
            translate: 0 0;
          }
          50% {
            translate: 0 18px;
          }
        }

        @keyframes mdsFloatThree {
          0%, 100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -13px;
          }
        }

        @keyframes mdsFloatFour {
          0%, 100% {
            translate: 0 0;
          }
          50% {
            translate: 0 15px;
          }
        }

        /*
         * TREN MDS
         *
         * El track contiene dos copias idénticas.
         * Se desplaza continuamente hacia la izquierda.
         * Al completar una copia, la segunda ocupa exactamente
         * la misma posición visual y el ciclo vuelve a empezar.
         */
        @keyframes mdsContinuousTrain {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(calc(-50% - 10px), 0, 0);
          }
        }

        .mds-float-one {
          animation: mdsFloatOne 5.5s ease-in-out infinite;
        }

        .mds-float-two {
          animation: mdsFloatTwo 6.5s ease-in-out infinite;
        }

        .mds-float-three {
          animation: mdsFloatThree 6s ease-in-out infinite;
        }

        .mds-float-four {
          animation: mdsFloatFour 7s ease-in-out infinite;
        }

        /*
         * VELOCIDAD DEL TREN
         *
         * 42 segundos = movimiento elegante y relativamente lento.
         * No es un carrusel por botones ni por desplazamientos:
         * es una animación CSS permanente.
         */
        .mds-train-track {
          animation: mdsContinuousTrain 42s linear infinite;
          will-change: transform;
        }

        /*
         * AL PASAR EL MOUSE SOBRE EL TREN:
         * se detiene suavemente para poder observar un proyecto.
         */
        .mds-train-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .mds-train-track {
            animation-duration: 34s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mds-float-one,
          .mds-float-two,
          .mds-float-three,
          .mds-float-four,
          .mds-train-track {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}