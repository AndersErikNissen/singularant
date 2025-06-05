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
  @apply relative inline-block justify-center overflow-hidden bg-brand-50 px-5 py-3 font-medium text-[currentColor] duration-300 sm:min-w-40;
}

:where(.c-a-button__slot) {
  @apply whitespace-nowrap;
}

.c-a-button.active .c-a-button__slot,
.c-a-button:hover .c-a-button__slot {
  @apply text-brand-50;
}

.c-a-button::before {
  content: "";
  @apply absolute left-0 top-0 size-full -translate-y-full bg-brand-500 transition-all duration-300;
}

.c-a-button--inherit::before {
  @apply bg-[currentColor];
}

.c-a-button.active::before,
.c-a-button:hover::before {
  @apply translate-y-0;
}

:where(.c-a-button__slot) {
  @apply relative;
}
</style>
