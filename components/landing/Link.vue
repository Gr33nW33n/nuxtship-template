<script setup lang="ts">
interface Props {
  href: string;
  size?: "md" | "lg";
  block?: boolean;
  styleName?: "outline" | "primary" | "inverted" | "muted";
  className?: string;
  [x: string]: any;
}

withDefaults(defineProps<Props>(), {
  size: "lg",
  styleName: "primary",
});

const sizes = {
  lg: "px-8 py-3",
  md: "px-5 py-2.5",
};

const styles = {
  outline:  "bg-transparent border border-primary-500/30 hover:border-primary-500/70 text-slate-300 hover:text-primary-300 hover:bg-primary-500/8",
  primary:  "bg-primary-500 hover:bg-primary-400 text-black font-black border border-primary-400/60",
  inverted: "bg-white text-black border border-transparent hover:bg-slate-100",
  muted:    "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10",
};
</script>

<template>
  <NuxtLink
    :href="href"
    :class="[
      'btn-shimmer inline-flex items-center justify-center rounded-xl text-center transition-all duration-300 focus-visible:ring-2 ring-offset-2 ring-primary-500/40 font-bold tracking-wide',
      block && 'w-full',
      sizes[size],
      styles[styleName],
    ]"
    ><slot />
  </NuxtLink>
</template>
