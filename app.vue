<template>
  <div id="app">
    <TheHeader
      :style="{
        color: colors.header.color,
        backgroundColor: colors.header.bg,
      }"
    />
    <main
      :style="{
        color: colors.body.color,
        backgroundColor: colors.body.bg,
      }"
    >
      <NuxtPage />
    </main>
    <div class="pointer-events-none absolute h-[57px] w-full" ref="trigger" />
    <TheFooter
      :class="{ visible: isVisible }"
      :style="{
        color: colors.footer.color,
        backgroundColor: colors.footer.bg,
        '--color-cta': colors.footer.cta,
      }"
    />
    <TheCurtain />
  </div>
</template>

<script setup>
const colors = useColors();

const trigger = ref();
const isVisible = shallowRef(false);

useIntersectionObserver(
  trigger,
  ([entry]) => {
    isVisible.value = entry?.isIntersecting || false;
  },
  { threshold: 1 },
);
</script>
