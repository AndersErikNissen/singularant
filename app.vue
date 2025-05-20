<template>
  <div
    id="app"
    :style="{
      color: colors.body,
    }"
  >
    <TheHeader />
    <main>
      <NuxtPage />
    </main>
    <div class="pointer-events-none absolute h-[57px] w-full" ref="trigger" />
    <TheFooter :class="{ visible: isVisible }" />
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
