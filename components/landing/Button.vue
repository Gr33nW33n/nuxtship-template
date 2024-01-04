<script setup lang="ts">
interface Props {
  size?: "md" | "lg";
  block?: boolean;
  styleName?: "outline" | "primary" | "inverted";
  className?: string;
  [x: string]: any;
}

withDefaults(defineProps<Props>(), {
  size: "md",
  styleName: "primary",
});

const sizes = {
  md: "px-5 py-2.5",
  lg: "px-6 py-3",
};

const styles = {
  outline: "border-2 border-black hover:bg-black text-black hover:text-white",
  primary:
    "bg-black text-white hover:bg-slate-900  border-2 border-transparent",
};
</script>

<template>
  <button
    :class="[
      'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200',
      block && 'w-full',
      sizes[size],
      styles[styleName],
      className,
    ]"
  >
    <slot />
  </button>
</template>
