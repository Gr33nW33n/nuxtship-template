<script setup>
import imgFlavio   from "~/assets/integrantes/flavio.jpeg";
import imgLuciano  from "~/assets/integrantes/luciano2.jpeg";
import imgRene     from "~/assets/integrantes/rene.jpeg";
import imgFranco   from "~/assets/integrantes/franco2.jpeg";

const team = [
  { name: "Flavio Ocampo",  title: "Desarrollador de Software", avatar: { src: imgFlavio,  pos: "center 15%" } },
  { name: "Luciano Alfaro", title: "Gestor de Proyecto",            avatar: { src: imgLuciano, pos: "center top" } },
  { name: "Rene Castro",    title: "Coordinador de Procesos",            avatar: { src: imgRene,    pos: "center 20%" } },
  { name: "Franco Davalos", title: "Encargado de Sistemas Electrónicos",            avatar: { src: imgFranco,  pos: "center 35%" } },
];
</script>

<template>
  <div class="team-bg hex-pattern-bg py-28 relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/15 to-transparent"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-20 reveal-on-scroll">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/25 bg-primary-500/8 mb-5">
          <span class="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
          <span class="text-primary-400 text-xs font-bold tracking-[0.2em] uppercase">Nuestro equipo</span>
        </div>
        <h2 class="text-4xl lg:text-5xl font-black text-white">
         <span class="text-shimmer"> Equipo conformado por</span>
        </h2>
        <p class="text-lg mt-4 text-slate-400 max-w-2xl mx-auto">
          Conoce a las personas que impulsan la innovación y sustentabilidad.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(item, index) in team"
          :key="item.name"
          class="team-card reveal-on-scroll group relative overflow-hidden rounded-2xl"
        >
          <!-- ═══ Neon corner frame lines (L-shapes) ═══ -->
          <div class="frame-tl" aria-hidden="true"></div>
          <div class="frame-tr" aria-hidden="true"></div>
          <div class="frame-bl" aria-hidden="true"></div>
          <div class="frame-br" aria-hidden="true"></div>

          <!-- ═══ Photo ═══ -->
          <div class="aspect-square overflow-hidden relative">
            <!-- Dark overlay -->
            <div class="photo-overlay"></div>
            <!-- Color accent bar at bottom -->
            <div class="photo-bar"></div>
            <!-- Neon scan sweep on hover -->
            <div class="photo-scan"></div>

            <img
              :src="item.avatar.src"
              :style="{ objectPosition: item.avatar.pos }"
              alt="Team Member"
              class="team-photo"
              loading="lazy"
            />

            <!-- Netflix slide-up name overlay -->
            <div class="name-overlay">
              <div class="name-badge">
                <span class="neon-line"></span>
                <h3 class="text-base font-black text-white mt-1">{{ item.name }}</h3>
                <p class="text-xs text-primary-400 font-bold uppercase tracking-widest">{{ item.title }}</p>
                <span class="neon-line neon-line--bottom"></span>
              </div>
            </div>
          </div>

          <!-- Card footer (fades on hover) -->
          <div class="team-footer">
            <div class="footer-dot"></div>
            <div>
              <h3 class="text-sm font-black text-white">{{ item.name }}</h3>
              <p class="text-xs text-primary-400 font-bold uppercase tracking-widest mt-0.5">{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-14 text-center reveal-on-scroll">
        <LandingLink href="/about" styleName="outline">Ver todo el equipo</LandingLink>
      </div>
    </div>

    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/15 to-transparent"></div>
  </div>
</template>

<style scoped>
.team-bg { background: #000000; }

/* ═══ Card base ═══ */
.team-card {
  background: #080808;
  border: 1px solid rgba(57, 255, 20, 0.07);
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.45s ease,
              border-color 0.45s ease;
}
.team-card:hover {
  transform: translateY(-14px) scale(1.04);
  border-color: rgba(57, 255, 20, 0.45);
  box-shadow:
    0 32px 64px rgba(0,0,0,0.65),
    0 0 0 1px rgba(57,255,20,0.15),
    0 0 45px rgba(57,255,20,0.14),
    0 0 90px rgba(57,255,20,0.05);
}

/* ═══ Neon L-shaped corner frames ═══ */
.frame-tl,
.frame-tr,
.frame-bl,
.frame-br {
  position: absolute;
  width: 18px; height: 18px;
  z-index: 10;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
}
.frame-tl { top: 6px;  left: 6px;  border-top: 2px solid #39ff14; border-left:  2px solid #39ff14; transform: translate(-4px,-4px); }
.frame-tr { top: 6px;  right: 6px; border-top: 2px solid #22d3ee; border-right: 2px solid #22d3ee; transform: translate(4px,-4px); }
.frame-bl { bottom: 6px; left: 6px;  border-bottom: 2px solid #22d3ee; border-left: 2px solid #22d3ee; transform: translate(-4px,4px); }
.frame-br { bottom: 6px; right: 6px; border-bottom: 2px solid #39ff14; border-right:2px solid #39ff14; transform: translate(4px,4px); }

.team-card:hover .frame-tl,
.team-card:hover .frame-tr,
.team-card:hover .frame-bl,
.team-card:hover .frame-br {
  opacity: 1;
  transform: translate(0,0);
}
.team-card:hover .frame-tl { box-shadow: -3px -3px 8px rgba(57,255,20,0.5); transition-delay: 0s; }
.team-card:hover .frame-tr { box-shadow:  3px -3px 8px rgba(34,211,238,0.4); transition-delay: 0.05s; }
.team-card:hover .frame-bl { box-shadow: -3px  3px 8px rgba(34,211,238,0.4); transition-delay: 0.10s; }
.team-card:hover .frame-br { box-shadow:  3px  3px 8px rgba(57,255,20,0.5); transition-delay: 0.15s; }

/* ═══ Photo ═══ */
.team-photo {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.34,1.56,0.64,1),
              filter 0.6s ease;
  filter: grayscale(80%) brightness(0.85);
}
.team-card:hover .team-photo {
  transform: scale(1.12);
  filter: grayscale(0%) brightness(1.0);
}

/* Dark overlay */
.photo-overlay {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.1) 50%, transparent 100%);
  opacity: 0.5;
  transition: opacity 0.5s ease;
}
.team-card:hover .photo-overlay { opacity: 0.85; }

/* Accent bar at bottom */
.photo-bar {
  position: absolute; bottom: 0; left: 0; right: 0; height: 2px; z-index: 5;
  background: linear-gradient(90deg, #39ff14, #22d3ee, #39ff14);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.34,1.56,0.64,1);
  box-shadow: 0 0 12px #39ff14;
}
.team-card:hover .photo-bar { transform: scaleX(1); }

/* Scan sweep */
.photo-scan {
  position: absolute; left: 0; right: 0; height: 3px; z-index: 4;
  background: linear-gradient(90deg, transparent, rgba(57,255,20,0.6), transparent);
  top: 0;
}
@keyframes photoScan {
  0%   { top: -3px; opacity: 0; }
  5%   { opacity: 1; }
  95%  { opacity: 1; }
  100% { top: 110%; opacity: 0; }
}
.team-card:hover .photo-scan { animation: photoScan 1.4s linear infinite; }

/* ═══ Netflix name overlay ═══ */
.name-overlay {
  position: absolute; bottom: 0; left: 0; right: 0; z-index: 10;
  padding: 0 16px 16px;
  transform: translateY(100%);
  transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1);
}
.team-card:hover .name-overlay { transform: translateY(0); }

.name-badge {
  padding: 10px 12px;
  background: rgba(0,0,0,0.88);
  border-radius: 10px;
  border: 1px solid rgba(57,255,20,0.2);
  backdrop-filter: blur(8px);
  position: relative;
  overflow: hidden;
}
/* Inner shimmer on the name badge */
.name-badge::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(105deg, transparent 40%, rgba(57,255,20,0.08) 55%, transparent 70%);
  transform: translateX(-100%);
  animation: badgeShimmer 2s linear infinite;
}
@keyframes badgeShimmer {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}

.neon-line {
  display: block;
  height: 1px;
  background: linear-gradient(90deg, transparent, #39ff14, #22d3ee, transparent);
  margin-bottom: 6px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s 0.2s cubic-bezier(0.34,1.56,0.64,1);
}
.neon-line--bottom {
  margin-top: 6px;
  margin-bottom: 0;
  transform-origin: right;
  transition-delay: 0.3s;
}
.team-card:hover .neon-line { transform: scaleX(1); }

/* ═══ Footer ═══ */
.team-footer {
  padding: 16px;
  background: #080808;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: opacity 0.3s ease;
}
.team-card:hover .team-footer { opacity: 0; }

.footer-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #39ff14;
  box-shadow: 0 0 8px #39ff14;
  flex-shrink: 0;
  animation: pulse 2s infinite;
}
</style>
