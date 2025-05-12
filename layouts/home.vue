<template>
  <main>
    <div class="fixed top-0 left-0 z-50 text-brand-50 w-full">
      <TheHeader />
    </div>
    <slot />
    <div class="pointer-events-none absolute h-[57px] w-full" ref="trigger" />
    <TheFooter
      :colors="[tailwindColors.brand[950], tailwindColors.brand[50], tailwindColors.brand[500]]"
      :class="{ visible: isVisible }"
    />
  </main>
</template>

<script setup>
import tailwindColors from "#tailwind-config/theme/colors";

const trigger = ref();
const isVisible = shallowRef(false);
const colorClasses = {
  body: "text-brand-950",
  bg: "bg-brand-50",
  logo: "text-brand-500",
};

const obs = useIntersectionObserver(
  trigger,
  ([entry]) => {
    isVisible.value = entry?.isIntersecting || false;
  },
  { threshold: 1 }
);
</script>

<style lang="postcss"></style>
