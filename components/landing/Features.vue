<script setup>
const features = [
  {
    title: "Sitios Webs",
    description:
      "Desarrollo de sitios web modernos , responsivos , tecnologías actuales y  enfocados en rendimiento, diseño profesional y experiencia de usuario.",
    icon: "bx:bx-code-alt",
  },
  {
    title: "Area Robotica",
    description:
      "Diseño y creación de robots autónomos y controlados remotamente, integrando sensores, LoRa, microcontroladores y visión computacional para proyectos educativos e industriales.",
    icon: "bx:bxs-bot",
  },
  {
    title: "Big-Data",
    description:
      "Análisis avanzado de grandes volúmenes de datos utilizando pipelines, modelos predictivos, dashboards y visualizaciones para toma de decisiones basada en información real.",
    icon: "bx:bx-line-chart",
  },
  {
    title: "Monitoreo en tiempo real",
    description:
      "Sistemas capaces de capturar, procesar y transmitir datos en tiempo real mediante LoRa, IoT y sensores especializados, con paneles dinámicos y alertas instantáneas.",
    icon: "bx:bx-pulse",
  },
  {
    title: "Productos electronicos",
    description:
      "Desarrollo de hardware personalizado, prototipos electrónicos, sensores, automatización y módulos integrados para soluciones tecnológicas a medida.",
    icon: "bx:bxs-chip",
  },
  {
    title: "Eficiencia",
    description:
      "Optimización de procesos, automatización inteligente y tecnologías que aumentan la eficiencia operativa en industrias, campo, educación y sistemas energéticos.",
    icon: "bx:bxs-bolt",
  },
];
</script>

<template>
  <div class="features-bg hex-pattern-bg py-28 relative overflow-hidden" id="servicio">

    <!-- BG glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full" style="background:radial-gradient(circle,rgba(57,255,20,0.06) 0%,transparent 70%);"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-20 reveal-on-scroll">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/25 bg-primary-500/8 mb-5">
          <span class="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
          <span class="text-primary-400 text-xs font-bold tracking-[0.2em] uppercase">Lo que ofrecemos</span>
        </div>
        <h2 class="text-4xl lg:text-5xl font-black text-white">
          Nuestros <span class="text-shimmer">Servicios</span>
        </h2>
        <p class="text-lg mt-4 text-slate-400 max-w-2xl mx-auto">
          Soluciones integrales en diversas áreas tecnológicas, impulsando la innovación en tu negocio.
        </p>
      </div>

      <!-- Cards grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in features"
          :key="index"
          class="feature-card reveal-on-scroll group relative overflow-hidden rounded-2xl p-8 cursor-default"
          :style="`animation-delay:${index*60}ms`"
        >
          <!-- ═══ Tracing border (SVG-based animated stroke) ═══ -->
          <div class="card-border-tracer" aria-hidden="true"></div>

          <!-- ═══ Shimmer sweep diagonal ═══ -->
          <div class="card-shimmer-sweep" aria-hidden="true"></div>

          <!-- ═══ Corner neon accent dots ═══ -->
          <span class="corner-dot corner-dot--tr" aria-hidden="true"></span>
          <span class="corner-dot corner-dot--bl" aria-hidden="true"></span>

          <!-- ═══ Scan line ═══ -->
          <div class="card-scan-line" aria-hidden="true"></div>

          <!-- ═══ Top neon glow bar ═══ -->
          <div class="card-top-bar" aria-hidden="true"></div>

          <!-- ═══ Content ═══ -->
          <div class="relative z-10">
            <!-- Icon -->
            <div class="icon-ring group-hover:icon-ring-active mb-6">
              <div class="icon-inner">
                <Icon class="text-primary-400 w-7 h-7 group-hover:text-primary-300 group-hover:scale-110 transition-all duration-300" :name="item.icon" />
              </div>
            </div>

            <h3 class="font-black text-xl text-white mb-3 group-hover:text-primary-300 transition-colors duration-300 group-hover:translate-x-1 transform">
              {{ item.title }}
            </h3>
            <p class="text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors duration-400 text-sm">
              {{ item.description }}
            </p>

            <!-- Bottom tag -->
            <div class="card-tag mt-5">
              <span class="w-1 h-1 rounded-full bg-primary-500 animate-pulse inline-block mr-1.5"></span>
              <span>Eco-Infinity</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/15 to-transparent"></div>
  </div>
</template>

<style scoped>
.features-bg {
  background: #000000;
  background-image: radial-gradient(ellipse at 50% 0%, rgba(57,255,20,0.04) 0%, transparent 60%);
}

/* ═══ Card base ═══ */
.feature-card {
  background: #080808;
  border: 1px solid rgba(57, 255, 20, 0.08);
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.45s ease,
              border-color 0.45s ease,
              background 0.45s ease;
  transform-style: preserve-3d;
}

.feature-card:hover {
  transform: translateY(-12px) scale(1.03);
  background: #0a0f0a;
  border-color: rgba(57, 255, 20, 0.40);
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(57, 255, 20, 0.15),
    0 0 40px rgba(57, 255, 20, 0.12),
    0 0 80px rgba(57, 255, 20, 0.05),
    inset 0 0 40px rgba(57, 255, 20, 0.03);
}

/* ═══ Tracing border (4-side neon line that draws on hover) ═══ */
.card-border-tracer {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  overflow: hidden;
  z-index: 2;
}
.card-border-tracer::before,
.card-border-tracer::after {
  content: '';
  position: absolute;
  border-radius: inherit;
  transition: opacity 0.1s ease;
  opacity: 0;
}
/* Top + right border trace */
.card-border-tracer::before {
  top: 0; left: 0;
  width: 0%; height: 2px;
  background: linear-gradient(90deg, #39ff14, #22d3ee);
  box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
  opacity: 0;
  transition: width 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.15s ease;
}
.feature-card:hover .card-border-tracer::before {
  width: 100%;
  opacity: 1;
}
/* Left border trace */
.card-border-tracer::after {
  bottom: 0; right: 0;
  width: 2px; height: 0%;
  background: linear-gradient(180deg, #22d3ee, #39ff14);
  box-shadow: 0 0 10px #22d3ee;
  opacity: 0;
  transition: height 0.55s 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.15s 0.3s ease;
}
.feature-card:hover .card-border-tracer::after {
  height: 100%;
  opacity: 1;
}

/* ═══ Diagonal shimmer sweep ═══ */
.card-shimmer-sweep {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    transparent 0%,
    transparent 35%,
    rgba(57, 255, 20, 0.08) 50%,
    rgba(34, 211, 238, 0.05) 55%,
    transparent 70%,
    transparent 100%
  );
  transform: translateX(-100%) skewX(-10deg);
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
  z-index: 1;
}
.feature-card:hover .card-shimmer-sweep {
  transform: translateX(120%) skewX(-10deg);
}

/* ═══ Corner accent dots ═══ */
.corner-dot {
  position: absolute;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #39ff14;
  box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
}
.feature-card:hover .corner-dot { opacity: 1; transform: scale(1); }
.corner-dot--tr { top: 10px; right: 10px; transition-delay: 0.1s; }
.corner-dot--bl { bottom: 10px; left: 10px; transition-delay: 0.2s; }

/* dot pulse */
@keyframes dotPulse {
  0%, 100% { box-shadow: 0 0 8px #39ff14, 0 0 16px #39ff14; }
  50%       { box-shadow: 0 0 16px #39ff14, 0 0 32px #39ff14; }
}
.feature-card:hover .corner-dot { animation: dotPulse 1.5s ease-in-out infinite; }

/* ═══ Horizontal scan line sweeps top → bottom ═══ */
.card-scan-line {
  position: absolute;
  left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(57,255,20,0.5), transparent);
  top: 0;
  transform: translateY(-100%);
  pointer-events: none;
  z-index: 4;
  opacity: 0;
}
@keyframes scanCard {
  0%   { transform: translateY(-100%); opacity: 0; }
  5%   { opacity: 1; }
  95%  { opacity: 1; }
  100% { transform: translateY(40rem); opacity: 0; }
}
.feature-card:hover .card-scan-line {
  animation: scanCard 1.8s linear infinite;
}

/* ═══ Top neon glow bar ═══ */
.card-top-bar {
  position: absolute;
  top: 0; left: 20%; right: 20%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #39ff14, transparent);
  box-shadow: 0 0 12px #39ff14;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1);
  pointer-events: none;
  z-index: 3;
}
.feature-card:hover .card-top-bar { transform: scaleX(1); }

/* ═══ Icon ring ═══ */
.icon-ring {
  width: 56px; height: 56px;
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(57,255,20,0.07);
  border: 1px solid rgba(57,255,20,0.15);
  transition: background 0.4s ease, border-color 0.4s ease,
              box-shadow 0.4s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1),
              border-radius 0.4s ease;
}
.feature-card:hover .icon-ring {
  background: rgba(57,255,20,0.15);
  border-color: rgba(57,255,20,0.6);
  box-shadow: 0 0 20px rgba(57,255,20,0.35), inset 0 0 12px rgba(57,255,20,0.1);
  transform: rotate(8deg) scale(1.15);
  border-radius: 50%;
}

/* ═══ Bottom card tag ═══ */
.card-tag {
  display: inline-flex;
  align-items: center;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(57,255,20,0.0);
  transition: color 0.4s ease 0.1s;
}
.feature-card:hover .card-tag { color: rgba(57,255,20,0.55); }
</style>
