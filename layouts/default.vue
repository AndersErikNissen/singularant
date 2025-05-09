<template>
  <main>
    <div class="sticky top-0 z-50 bg-brand-50 -mb-[1px]">
      <TheHeader />
    </div>
    <slot />
    <div class="pointer-events-none absolute h-[57px] w-full" ref="trigger" />
    <TheFooter :class="{ visible: isVisible }" />
  </main>
</template>

<script setup>
const trigger = ref();
const isVisible = shallowRef(false);

const obs = useIntersectionObserver(
  trigger,
  ([entry]) => {
    isVisible.value = entry?.isIntersecting || false;
  },
  { threshold: 1 }
);
</script>

<style></style>
