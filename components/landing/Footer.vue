<template>
  <footer class="footer-bg border-t pt-12 pb-10" style="border-color: rgba(57,255,20,0.08);">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex flex-col items-center gap-4">
        <!-- Neon separator -->
        <div class="w-20 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent mb-2"></div>

        <!-- Logo with mini Rubik -->
        <a href="/" class="flex items-center gap-2 group mt-1">
          <div class="rubik-face group-hover:rotate-45 transition-transform duration-500" style="width:22px;gap:1.5px;padding:1.5px;">
            <div class="rubik-cell" style="background:rgba(57,255,20,0.8);border-radius:1px;"></div>
            <div class="rubik-cell" style="background:rgba(57,255,20,0.3);border-radius:1px;"></div>
            <div class="rubik-cell" style="background:rgba(57,255,20,0.6);border-radius:1px;"></div>
            <div class="rubik-cell" style="background:rgba(57,255,20,0.4);border-radius:1px;"></div>
            <div class="rubik-cell" style="background:rgba(57,255,20,1.0);border-radius:1px;"></div>
            <div class="rubik-cell" style="background:rgba(57,255,20,0.5);border-radius:1px;"></div>
            <div class="rubik-cell" style="background:rgba(57,255,20,0.7);border-radius:1px;"></div>
            <div class="rubik-cell" style="background:rgba(57,255,20,0.2);border-radius:1px;"></div>
            <div class="rubik-cell" style="background:rgba(57,255,20,0.9);border-radius:1px;"></div>
          </div>
          <span class="text-lg font-black">
            <span class="logo-glow text-primary-500">Eco</span><span class="text-slate-400 group-hover:text-slate-200 transition-colors">Infinity</span>
          </span>
        </a>

        <p class="text-center text-xs text-slate-600 hover:text-slate-400 transition-colors duration-300 mt-1 tracking-wide">
          © {{ new Date().getFullYear() }} Eco-Infinity. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-bg { background: #000000; }
.logo-glow {
  text-shadow: 0 0 14px rgba(57,255,20,0.5);
  transition: text-shadow 0.3s ease;
}
a:hover .logo-glow {
  text-shadow: 0 0 28px rgba(57,255,20,0.9);
}
</style>
