<template>
  <!--
    ═══════════════════════════════════════════════════
    HERO  ·  Dragon-scale hex pattern + Tetris floaters
    ═══════════════════════════════════════════════════
  -->
  <main class="hero-root hex-pattern-bg relative overflow-hidden" style="min-height:100vh; width:100vw; margin-left:calc(-50vw + 50%);">

    <!-- ── Ambient radial glows (dark green depth) ── -->
    <div class="amb-glow amb-glow--tl" aria-hidden="true"></div>
    <div class="amb-glow amb-glow--br" aria-hidden="true"></div>
    <div class="amb-glow amb-glow--center" aria-hidden="true"></div>

    <!-- ── Scan-line ── -->
    <div class="scan-line" aria-hidden="true"></div>

    <!-- ══════════════════════════════════════════════
         🧩  FLOATING TETRIS PIECES
         All pieces use CSS-variable based animation
         durations/delays for variety without JS.
    ══════════════════════════════════════════════ -->
    <div class="tetris-wrap" aria-hidden="true">

      <!-- ① L-piece  ·  top-left -->
      <div class="t-piece anim-float-a" style="--dur:14s;--delay:0s; top:9%; left:3.5%; grid-template-columns:repeat(2,18px); grid-template-rows:repeat(3,18px);">
        <div class="t-cell"></div>    <div></div>
        <div class="t-cell"></div>    <div></div>
        <div class="t-cell"></div>    <div class="t-cell"></div>
      </div>

      <!-- ② Rubik 3×3  ·  top-right -->
      <div class="t-piece anim-cube" style="--dur:24s;--delay:1s; top:6%; right:5%;">
        <div class="rubik-face" style="width:78px;">
          <div class="rubik-cell" style="background:rgba(57,255,20,0.70);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.25);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.55);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.30);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,1.00);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.40);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.65);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.20);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.50);"></div>
        </div>
      </div>

      <!-- ③ S-piece  ·  mid-left -->
      <div class="t-piece anim-drift" style="--dur:20s;--delay:5s; top:42%; left:1.5%; grid-template-columns:repeat(3,16px); grid-template-rows:repeat(2,16px);">
        <div></div>               <div class="t-cell-dim"></div>  <div class="t-cell-dim"></div>
        <div class="t-cell-dim"></div> <div class="t-cell-dim"></div> <div></div>
      </div>

      <!-- ④ Square block  ·  bottom-left -->
      <div class="t-piece anim-float-b" style="--dur:12s;--delay:3s; bottom:16%; left:5%; grid-template-columns:repeat(2,22px); grid-template-rows:repeat(2,22px);">
        <div class="t-cell"></div> <div class="t-cell"></div>
        <div class="t-cell"></div> <div class="t-cell"></div>
      </div>

      <!-- ⑤ I-piece horizontal  ·  bottom-center -->
      <div class="t-piece anim-float-c" style="--dur:18s;--delay:8s; bottom:12%; left:38%; grid-template-columns:repeat(4,14px); grid-template-rows:14px;">
        <div class="t-cell-dim"></div><div class="t-cell-dim"></div><div class="t-cell-dim"></div><div class="t-cell-dim"></div>
      </div>

      <!-- ⑥ T-piece  ·  mid-right -->
      <div class="t-piece anim-drift" style="--dur:22s;--delay:11s; top:38%; right:2.5%; grid-template-columns:repeat(3,16px); grid-template-rows:repeat(2,16px);">
        <div class="t-cell-dim"></div><div class="t-cell-dim"></div><div class="t-cell-dim"></div>
        <div></div>                    <div class="t-cell-dim"></div><div></div>
      </div>

      <!-- ⑦ Rubik 2×2  ·  lower-right -->
      <div class="t-piece anim-float-a" style="--dur:16s;--delay:6s; bottom:20%; right:4%; grid-template-columns:repeat(2,20px); grid-template-rows:repeat(2,20px);">
        <div class="t-cell"></div> <div class="t-cell-dim"></div>
        <div class="t-cell-dim"></div> <div class="t-cell"></div>
      </div>

      <!-- ⑧ L-piece inverted  ·  top-center-right -->
      <div class="t-piece anim-float-b" style="--dur:19s;--delay:2s; top:18%; right:18%; grid-template-columns:repeat(2,14px); grid-template-rows:repeat(3,14px);">
        <div></div>                 <div class="t-cell-dim"></div>
        <div></div>                 <div class="t-cell-dim"></div>
        <div class="t-cell-dim"></div><div class="t-cell-dim"></div>
      </div>

      <!-- ⑨ Small Rubik 3×3  ·  top-center -->
      <div class="t-piece anim-cube" style="--dur:30s;--delay:4s; top:14%; left:46%;">
        <div class="rubik-face" style="width:48px; opacity:0.7;">
          <div class="rubik-cell" style="background:rgba(57,255,20,0.60);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.20);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.80);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.35);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.90);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.30);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.50);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.75);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.45);"></div>
        </div>
      </div>

      <!-- ⑩ Z-piece  ·  lower far-left -->
      <div class="t-piece anim-float-c" style="--dur:25s;--delay:9s; bottom:28%; left:9%; grid-template-columns:repeat(3,13px); grid-template-rows:repeat(2,13px);">
        <div class="t-cell-dim"></div><div class="t-cell-dim"></div><div></div>
        <div></div><div class="t-cell-dim"></div><div class="t-cell-dim"></div>
      </div>

      <!-- ══ EDGE PIECES — fill the side margins ══ -->

      <!-- ⑪ Big Rubik  ·  far LEFT edge -->
      <div class="t-piece anim-cube" style="--dur:28s;--delay:0.5s; top:20%; left:-1%;">
        <div class="rubik-face" style="width:68px;">
          <div class="rubik-cell" style="background:rgba(57,255,20,0.65);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.25);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.80);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.35);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.95);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.45);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.70);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.20);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.55);"></div>
        </div>
      </div>

      <!-- ⑫ L-piece  ·  far LEFT edge lower -->
      <div class="t-piece anim-float-a" style="--dur:17s;--delay:6s; bottom:30%; left:-1%; grid-template-columns:repeat(2,20px); grid-template-rows:repeat(3,20px);">
        <div class="t-cell"></div>     <div></div>
        <div class="t-cell"></div>     <div></div>
        <div class="t-cell"></div>     <div class="t-cell"></div>
      </div>

      <!-- ⑬ Rubik  ·  far LEFT edge very bottom -->
      <div class="t-piece anim-float-b" style="--dur:21s;--delay:12s; bottom:8%; left:0%; grid-template-columns:repeat(2,16px); grid-template-rows:repeat(2,16px);">
        <div class="t-cell"></div> <div class="t-cell-dim"></div>
        <div class="t-cell-dim"></div> <div class="t-cell"></div>
      </div>

      <!-- ⑭ Big Rubik  ·  far RIGHT edge -->
      <div class="t-piece anim-cube" style="--dur:26s;--delay:3s; top:25%; right:-1%;">
        <div class="rubik-face" style="width:68px;">
          <div class="rubik-cell" style="background:rgba(57,255,20,0.50);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.85);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.30);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.70);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.40);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.90);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.60);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.25);"></div>
          <div class="rubik-cell" style="background:rgba(57,255,20,0.75);"></div>
        </div>
      </div>

      <!-- ⑮ T-piece  ·  far RIGHT lower -->
      <div class="t-piece anim-drift" style="--dur:23s;--delay:7s; bottom:22%; right:-1%; grid-template-columns:repeat(3,18px); grid-template-rows:repeat(2,18px);">
        <div class="t-cell"></div><div class="t-cell"></div><div class="t-cell"></div>
        <div></div><div class="t-cell"></div><div></div>
      </div>

      <!-- ⑯ I-piece vertical  ·  far RIGHT edge bottom -->
      <div class="t-piece anim-float-c" style="--dur:20s;--delay:14s; bottom:5%; right:0%; grid-template-columns:14px; grid-template-rows:repeat(4,14px);">
        <div class="t-cell-dim"></div>
        <div class="t-cell-dim"></div>
        <div class="t-cell-dim"></div>
        <div class="t-cell-dim"></div>
      </div>

      <!-- ⑰ Square  ·  top LEFT extreme -->
      <div class="t-piece anim-float-a" style="--dur:15s;--delay:1s; top:5%; left:-1%; grid-template-columns:repeat(2,24px); grid-template-rows:repeat(2,24px);">
        <div class="t-cell"></div> <div class="t-cell"></div>
        <div class="t-cell"></div> <div class="t-cell"></div>
      </div>

      <!-- ⑱ S-piece  ·  top RIGHT extreme -->
      <div class="t-piece anim-float-b" style="--dur:18s;--delay:4s; top:8%; right:0%; grid-template-columns:repeat(3,16px); grid-template-rows:repeat(2,16px);">
        <div></div>                    <div class="t-cell-dim"></div><div class="t-cell-dim"></div>
        <div class="t-cell-dim"></div><div class="t-cell-dim"></div><div></div>
      </div>
    </div>

    <!-- ══════════════════════════════════════════════
         HERO CONTENT
    ══════════════════════════════════════════════ -->
    <div class="hero-inner relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 place-items-center py-24 lg:py-36 gap-12">

      <!-- Image column -->
      <div class="hidden md:flex justify-center items-center lg:order-2">
        <div class="img-wrap relative group">
          <!-- Outer hex glow ring -->
          <div class="hex-ring"></div>
          <!-- Rubik accent top-right of image -->
          <div class="img-rubik-accent anim-float-b" style="--dur:10s;--delay:1.5s;">
            <div class="rubik-face" style="width:40px; opacity:0.55;">
              <div class="rubik-cell" style="background:rgba(57,255,20,0.8);"></div>
              <div class="rubik-cell" style="background:rgba(57,255,20,0.35);"></div>
              <div class="rubik-cell" style="background:rgba(57,255,20,0.65);"></div>
              <div class="rubik-cell" style="background:rgba(57,255,20,0.4);"></div>
              <div class="rubik-cell" style="background:rgba(57,255,20,1.0);"></div>
              <div class="rubik-cell" style="background:rgba(57,255,20,0.5);"></div>
              <div class="rubik-cell" style="background:rgba(57,255,20,0.7);"></div>
              <div class="rubik-cell" style="background:rgba(57,255,20,0.2);"></div>
              <div class="rubik-cell" style="background:rgba(57,255,20,0.9);"></div>
            </div>
          </div>
          <img
            src="~/assets/img/infinity1.png"
            alt="Eco Infinity"
            class="hero-img anim-hero-float group-hover:scale-105 transition-transform duration-700"
            loading="eager" width="512" height="512"
          />
        </div>
      </div>

      <!-- Text column -->
      <div class="lg:order-1 flex flex-col gap-6">

        <!-- Badge -->
        <div class="hero-badge anim-fade-up" style="animation-delay:0.05s;">
          <span class="hero-badge__dot"></span>
          <span>Innovación &amp; Sustentabilidad</span>
        </div>

        <!-- Title -->
        <h1 class="hero-title anim-fade-up" style="animation-delay:0.15s;">
          Eco-Infinity<br/>
          <span class="text-shimmer anim-neon-flicker">startup</span>
        </h1>

        <!-- Description -->
        <p class="hero-desc anim-fade-up" style="animation-delay:0.28s;">
          Eco-Infinity es una startup que ofrece servicios y ventas de tecnologías.
          <strong class="text-primary-400">Innovación y Sustentabilidad</strong> integradas para el futuro.
        </p>

        <!-- CTA -->
        <div class="anim-fade-up" style="animation-delay:0.42s;">
          <LandingLink
            href="/contact"
            target="_blank"
            rel="noopener"
            class="btn-shimmer font-black shadow-[0_0_28px_rgba(57,255,20,0.40)] hover:shadow-[0_0_48px_rgba(57,255,20,0.70)] hover:scale-105 transition-all duration-300"
          >Contáctanos</LandingLink>
        </div>
      </div>
    </div>

    <!-- Bottom gradient fade-out -->
    <div class="hero-fade-bottom" aria-hidden="true"></div>
  </main>
</template>

<style scoped>
/* ── Hero background base ── */
.hero-root {
  background: #000000;
  background-image:
    radial-gradient(ellipse 80% 60% at 15% 45%, rgba(57,255,20,0.06) 0%, transparent 55%),
    radial-gradient(ellipse 70% 50% at 88% 20%, rgba(34,211,238,0.04) 0%, transparent 50%),
    radial-gradient(ellipse 60% 50% at 50% 95%, rgba(57,255,20,0.04) 0%, transparent 55%);
}

/* ── Ambient glow circles ── */
.amb-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  animation: pulse 4s cubic-bezier(0.4,0,0.6,1) infinite;
}
.amb-glow--tl {
  top: -10%; left: -8%;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(57,255,20,0.07) 0%, transparent 70%);
  animation-delay: 0s;
}
.amb-glow--br {
  bottom: -12%; right: -6%;
  width: 420px; height: 420px;
  background: radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%);
  animation-delay: 1.5s;
}
.amb-glow--center {
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(57,255,20,0.025) 0%, transparent 65%);
  animation-delay: 0.8s;
}

/* ── Image wrapper ── */
.img-wrap { position: relative; display: inline-flex; }

.hex-ring {
  position: absolute;
  inset: -28px;
  border-radius: 50%;
  border: 1px solid rgba(57,255,20,0.12);
  box-shadow: 0 0 40px rgba(57,255,20,0.12), inset 0 0 40px rgba(57,255,20,0.04);
  animation: hexRingPulse 3.5s ease-in-out infinite;
  pointer-events: none;
}
@keyframes hexRingPulse {
  0%,100% { box-shadow: 0 0 30px rgba(57,255,20,0.10), inset 0 0 30px rgba(57,255,20,0.03); }
  50%     { box-shadow: 0 0 60px rgba(57,255,20,0.22), inset 0 0 50px rgba(57,255,20,0.06); }
}

.hero-img {
  width: clamp(260px, 36vw, 380px);
  height: clamp(260px, 36vw, 380px);
  object-fit: contain;
  filter: drop-shadow(0 0 40px rgba(57,255,20,0.30));
  transition: filter 0.6s ease;
}
.img-wrap:hover .hero-img {
  filter: drop-shadow(0 0 70px rgba(57,255,20,0.55));
}

.img-rubik-accent {
  position: absolute;
  top: -12px; right: -14px;
  z-index: 2;
}

/* ── Text elements ── */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid rgba(57,255,20,0.25);
  background: rgba(57,255,20,0.07);
  color: #4ade80;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  width: max-content;
}
.hero-badge__dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #39ff14;
  animation: pulse 2s infinite;
}

.hero-title {
  font-size: clamp(2.6rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.hero-desc {
  font-size: clamp(1rem, 1.6vw, 1.18rem);
  color: #94a3b8;
  max-width: 48ch;
  line-height: 1.75;
}

/* ── Bottom fade ── */
.hero-fade-bottom {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 120px;
  background: linear-gradient(to bottom, transparent, #000000);
  pointer-events: none; z-index: 5;
}
</style>
