<script setup>
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const parent = el.parentElement;
          if (parent) {
            const siblings = Array.from(parent.querySelectorAll('.reveal-on-scroll'));
            const idx = siblings.indexOf(el);
            if (idx > -1) {
              el.style.transitionDelay = `${idx * 90}ms`;
              el.style.animationDelay  = `${idx * 90}ms`;
            }
          }
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    },
    { root: null, rootMargin: '0px 0px -50px 0px', threshold: 0.06 }
  );
  document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
});
</script>

<template>
  <LandingNavbar />
  <slot />
  <LandingFooter />
</template>
