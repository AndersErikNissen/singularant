<template>
  <component :is="tag" class="c-a-button group">
    <span class="c-a-button__slot">
      <slot />
    </span>
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: "button",
  },
});
</script>

<style lang="postcss">
.c-a-button {
  @apply inline-block min-w-40 font-medium py-3 px-5 bg-brand-50 relative overflow-hidden justify-center duration-300;
}

:where(.c-a-button__slot) {
  @apply whitespace-nowrap;
}

.c-a-button.active,
.c-a-button:hover {
  @apply text-brand-50;
}

.c-a-button::before {
  content: "";
  @apply absolute size-full top-0 left-0 -translate-y-full duration-300 transition-all bg-brand-500;
}

.c-a-button.active::before,
.c-a-button:hover::before {
  @apply translate-y-0;
}

:where(.c-a-button__slot) {
  @apply relative;
}
</style>
