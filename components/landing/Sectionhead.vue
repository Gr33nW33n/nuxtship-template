<script setup>
defineProps({
  align: {
    default: "center",
  },
});
</script>

<template>
  <div :class="['mt-16', align === 'center' && 'text-center']">
    <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      <slot name="title">Title</slot>
    </h1>
    <p class="text-lg mt-4 text-slate-600">
      <slot name="desc">Some description goes here</slot>
    </p>
  </div>
</template>
