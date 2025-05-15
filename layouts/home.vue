<template>
  <main>
    <div class="fixed left-0 top-0 z-50 w-full text-brand-50">
      <TheHeader />
    </div>
    <slot />
    <div class="pointer-events-none absolute h-[57px] w-full" ref="trigger" />
    <TheFooter
      :colors="[
        tailwindColors.brand[950],
        tailwindColors.brand[50],
        tailwindColors.brand[500],
      ]"
      :class="{ visible: isVisible }"
    />
  </main>
</template>

<script setup>
import tailwindColors from "#tailwind-config/theme/colors";

const trigger = ref();
const isVisible = shallowRef(false);

const obs = useIntersectionObserver(
  trigger,
  ([entry]) => {
    isVisible.value = entry?.isIntersecting || false;
  },
  { threshold: 1 },
);
</script>

<style lang="postcss"></style>
