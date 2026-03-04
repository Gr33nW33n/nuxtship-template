<template>
  <div class="cta-bg hex-pattern-bg py-28 relative overflow-hidden">
    <!-- Tetris pieces -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div class="tetris-piece animate-tetris-drift" style="top:15%;left:4%;animation-delay:2s;animation-duration:22s;opacity:0.07;">
        <div class="flex gap-1">
          <div class="cell h-6 w-6 rounded-sm"></div>
          <div class="cell h-6 w-6 rounded-sm"></div>
          <div class="cell h-6 w-6 rounded-sm"></div>
          <div class="cell h-6 w-6 rounded-sm"></div>
        </div>
      </div>
      <div class="tetris-piece animate-float" style="bottom:15%;right:5%;animation-delay:4s;animation-duration:16s;opacity:0.07;">
        <div class="rubik-face" style="width:64px;">
          <div class="rubik-cell" style="background:rgba(57,255,20,0.6);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.3);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.7);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.4);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.8);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.2);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.5);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.9);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.4);"></div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="cta-card reveal-on-scroll mx-auto max-w-4xl rounded-3xl px-8 sm:px-16 py-20 text-center relative overflow-hidden group">
        <!-- Rotating conic glow -->
        <div class="cta-conic-glow absolute inset-0 pointer-events-none"></div>
        <!-- Inner radial -->
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.06)_0%,transparent_70%)] group-hover:opacity-150 transition-opacity duration-700"></div>

        <!-- Corner brackets -->
        <div class="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary-500/40 rounded-tl-3xl"></div>
        <div class="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary-500/40 rounded-tr-3xl"></div>
        <div class="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary-500/20 rounded-bl-3xl"></div>
        <div class="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary-500/20 rounded-br-3xl"></div>

        <!-- Tetris corner deco (top-right inside card) -->
        <div class="absolute top-5 right-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <div class="grid gap-1" style="grid-template-columns:repeat(3,12px);">
            <div style="background:#39ff14;height:12px;border-radius:1px;"></div>
            <div style="background:#39ff14;height:12px;border-radius:1px;"></div>
            <div style="background:#39ff14;height:12px;border-radius:1px;"></div>
            <div style="background:transparent;height:12px;"></div>
            <div style="background:#39ff14;height:12px;border-radius:1px;"></div>
            <div style="background:transparent;height:12px;"></div>
          </div>
        </div>

        <div class="relative z-10">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/25 bg-primary-500/8 mb-8">
            <span class="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
            <span class="text-primary-400 text-xs font-bold tracking-[0.2em] uppercase">Empieza hoy</span>
          </div>
          <h2 class="text-white font-black text-3xl sm:text-5xl lg:text-6xl leading-tight">
            Trabaja con nosotros de la forma más<br/>
            <span class="text-shimmer">rápida y eficiente.</span>
          </h2>
          <!-- <p class="text-slate-400 mt-4 text-xl">Static or Dynamic, the choice is yours with Nuxt's hybrid rendering modes.</p> -->
          <div class="flex justify-center mt-12">
            <LandingLink href="/contact" styleName="primary"
              class="btn-shimmer font-black shadow-[0_0_30px_rgba(57,255,20,0.35)] hover:shadow-[0_0_55px_rgba(57,255,20,0.65)] hover:scale-105 transition-all duration-300">
              Contacto
            </LandingLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cta-bg {
  background: #000000;
  background-image: radial-gradient(ellipse at 50% 60%, rgba(57,255,20,0.04) 0%, transparent 60%);
}

.cta-card {
  background: #0a0a0a;
  border: 1px solid rgba(57,255,20,0.12);
  transition: border-color 0.5s ease, box-shadow 0.5s ease;
}
.cta-card:hover {
  border-color: rgba(57,255,20,0.28);
  box-shadow: 0 30px 80px rgba(0,0,0,0.7), 0 0 50px rgba(57,255,20,0.1);
}

.cta-conic-glow {
  background: conic-gradient(from 0deg at 50% 50%,
    transparent 0deg,
    rgba(57,255,20,0.05) 45deg,
    transparent 90deg,
    rgba(57,255,20,0.03) 180deg,
    transparent 270deg,
    rgba(57,255,20,0.05) 315deg,
    transparent 360deg
  );
  animation: rotate-conic 10s linear infinite;
}
@keyframes rotate-conic {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
</style>
