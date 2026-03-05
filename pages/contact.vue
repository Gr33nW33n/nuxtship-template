<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Contacto</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          Contacta con nosotros
        </h2>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
           Completa el formulario o envianos un correo directamente
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-primary-600 w-5 h-5" name="uil:map-marker" />
            <span>Chile, Iquique</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-primary-600 w-5 h-5" name="uil:envelope" /><a
              href="mailto:eco.infinity.contacto@gmail.com"
              class="hover:text-primary-700 transition-colors"
              >eco.infinity.contacto@gmail.com</a
            >
          </div>
          <!-- <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-primary-600 w-5 h-5" name="uil:phone" /><a
              href="tel:+1 (234) 5678 999"
              >+1 (234) 5678 999</a
            >
          </div> -->
        </div>
      </div>
      <div>
        <LandingContactform />
      </div>
    </div>
  </LandingContainer>
</template>
