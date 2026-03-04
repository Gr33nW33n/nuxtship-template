<script setup>
const menuitems = [
  { title: "Servicios", path: "#servicio" },
  { title: "Acerca de", path: "/about" },
  { title: "Contacto",  path: "/contact" },
];
const open = ref(false);
</script>

<template>
  <div class="sticky top-0 z-50 navbar-glass transition-all duration-500">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <header class="flex flex-col lg:flex-row justify-between items-center py-4">
        <div class="flex items-center justify-between w-full lg:w-auto">
          <a href="/" class="flex items-center gap-2 group">
            <!-- Mini Rubik accent -->
            <div class="rubik-face w-8 h-8 transition-all duration-500 group-hover:rotate-45" style="width:28px; gap:2px; padding:2px;">
              <div class="rubik-cell" style="background:rgba(57,255,20,0.8); border-radius:1px;"></div>
              <div class="rubik-cell" style="background:rgba(57,255,20,0.3); border-radius:1px;"></div>
              <div class="rubik-cell" style="background:rgba(57,255,20,0.6); border-radius:1px;"></div>
              <div class="rubik-cell" style="background:rgba(57,255,20,0.4); border-radius:1px;"></div>
              <div class="rubik-cell" style="background:rgba(57,255,20,1.0); border-radius:1px;"></div>
              <div class="rubik-cell" style="background:rgba(57,255,20,0.5); border-radius:1px;"></div>
              <div class="rubik-cell" style="background:rgba(57,255,20,0.7); border-radius:1px;"></div>
              <div class="rubik-cell" style="background:rgba(57,255,20,0.2); border-radius:1px;"></div>
              <div class="rubik-cell" style="background:rgba(57,255,20,0.9); border-radius:1px;"></div>
            </div>
            <span class="text-xl font-black tracking-tight">
              <span class="logo-glow text-primary-500">Eco</span><span class="text-white">Infinity</span>
            </span>
          </a>
          <button @click="open = !open" class="lg:hidden text-slate-400 hover:text-primary-400 focus:outline-none transition-colors p-2 rounded-lg hover:bg-white/5">
            <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <nav class="w-full lg:w-auto lg:flex overflow-hidden transition-all duration-500 ease-spring"
          :class="open ? 'mt-4 max-h-64 opacity-100' : 'max-h-0 lg:max-h-none opacity-0 lg:opacity-100 mt-0'">
          <ul class="flex flex-col lg:flex-row lg:gap-2 pb-4 lg:pb-0">
            <li v-for="item of menuitems" :key="item.title">
              <a :href="item.path"
                class="nav-link-hover flex lg:px-4 py-2 text-slate-400 hover:text-primary-400 font-semibold transition-colors duration-300 text-sm tracking-widest uppercase">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
</template>

<style scoped>
.navbar-glass {
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(57,255,20,0.08);
}
.logo-glow {
  text-shadow: 0 0 20px rgba(57,255,20,0.6);
  transition: text-shadow 0.3s ease;
}
a:hover .logo-glow {
  text-shadow: 0 0 35px rgba(57,255,20,1), 0 0 70px rgba(57,255,20,0.4);
}
</style>
