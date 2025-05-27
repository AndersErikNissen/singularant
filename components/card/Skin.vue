<template>
  <div class="c-card-skin group">
    <div
      class="relative flex size-full items-center justify-center overflow-hidden bg-brand-50 p-5"
    >
      <slot name="image" :src="src" />

      <div class="absolute bottom-0 left-0 w-full overflow-hidden">
        <div
          v-if="skin.chromas?.length > 0"
          class="flex translate-y-full flex-wrap duration-300 group-hover:translate-y-0"
        >
          <template
            v-for="(chroma, index) in skin.chromas"
            :key="chroma.displayName + index"
          >
            <img
              v-if="chroma.swatch"
              class="relative block size-[10%] cursor-pointer"
              :class="{
                'opacity-65': index === activeChroma,
              }"
              :src="chroma.swatch"
              @click="activeChroma = index"
            />
          </template>
        </div>
      </div>
    </div>
    <div
      v-if="skin.displayName.length > 0"
      class="w-full border-t border-brand-950 bg-brand-50"
    >
      <p class="p-2 uppercase">
        {{ skin.displayName }}
      </p>
    </div>
  </div>
</template>

<script setup>
const { skin } = defineProps({
  skin: {
    type: Object,
    default: {},
  },
});

const activeChroma = ref(0);

const src = computed(() => {
  if (skin.chromas) {
    return (
      skin.chromas[activeChroma.value].displayIcon ||
      skin.chromas[activeChroma.value].fullRender ||
      skin.displayIcon
    );
  }

  if (skin.largeArt) {
    return skin.largeArt || skin.smallArt || skin.displayIcon;
  }

  return (
    skin.animationPng ||
    skin.animationGif ||
    skin.fullTransparentIcon ||
    skin.displayIcon
  );
});
</script>

<style lang="postcss">
:where(.c-card-skin) {
  @apply flex aspect-square flex-col items-center justify-end;
}

.src-swap-enter-active,
.src-swap-leave-active {
  @apply transition-all duration-150;
}

.src-swap-enter-from,
.src-swap-leave-to {
  @apply opacity-0;
}
</style>
