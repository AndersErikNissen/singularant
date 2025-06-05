<template>
  <div id="app">
    <TheModal />
    <TheHeader
      :style="{
        color: colors.header.color,
        '--color-bg': colors.header.bg,
      }"
    />
    <main
      class="relative z-[1]"
      :style="{
        color: colors.body.color,
        backgroundColor: colors.body.bg,
      }"
    >
      <NuxtPage />
    </main>
    <div class="pointer-events-none absolute h-[57px] w-full" ref="trigger" />
    <div
      class="pointer-events-none absolute left-0 top-0 h-[300vh] max-h-full w-full"
      ref="scroll-top-trigger"
    />
    <TheFooter
      :class="{ visible: isVisible }"
      :style="{
        color: colors.footer.color,
        '--color-bg': colors.footer.bg,
        '--color-cta': colors.footer.cta,
      }"
    />
    <Transition name="scroll-top">
      <div
        v-if="scrollTop"
        class="fixed bottom-0 right-5 z-10 border border-b-0 border-brand-950 uppercase"
      >
        <AButton @click="scrolToTop" class="text-sm sm:text-base"
          >Scroll top</AButton
        >
      </div>
    </Transition>
    <TheCurtain />
  </div>
</template>

<script setup>
useHead({ titleTemplate: "%s - SINGULARANT" });
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

const scrollTop = ref(false);
const scrollTopTrigger = useTemplateRef("scroll-top-trigger");
const scrolToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

useIntersectionObserver(
  scrollTopTrigger,
  ([entry]) => {
    scrollTop.value = entry?.isIntersecting ? false : true;
  },
  { threshold: 0 },
);
</script>

<style lang="postcss">
#app {
  @apply relative;
}

/* Scroll top animation */
.scroll-top-enter-from,
.scroll-top-leave-to {
  @apply translate-y-full;
}

.scroll-top-enter-active,
.scroll-top-leave-active {
  @apply transition-transform duration-300;
}
</style>
