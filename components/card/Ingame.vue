<template>
  <div class="c-card-ingame group">
    <div
      class="relative flex size-full items-center justify-center overflow-hidden bg-brand-50 p-5"
    >
      <slot name="image" :src="src" />

      <div class="absolute bottom-0 left-0 w-full overflow-hidden">
        <div
          v-if="item.chromas?.length > 0"
          class="flex flex-wrap duration-300 sm:translate-y-full sm:group-hover:translate-y-0"
        >
          <template
            v-for="(chroma, index) in item.chromas"
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
      v-if="item.displayName?.length > 0"
      class="w-full border-t border-brand-950 bg-brand-50"
    >
      <p class="p-2 uppercase">
        {{ item.displayName }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});

const activeChroma = ref(0);

const src = computed(() => {
  if (props.item.chromas) {
    return (
      props.item.chromas[activeChroma.value].displayIcon ||
      props.item.chromas[activeChroma.value].fullRender ||
      props.item.displayIcon
    );
  }

  if (props.item.largeArt) {
    return props.item.largeArt || props.item.smallArt || props.item.displayIcon;
  }

  return (
    props.item.animationPng ||
    props.item.animationGif ||
    props.item.fullTransparentIcon ||
    props.item.displayIcon
  );
});
</script>

<style lang="postcss">
:where(.c-card-ingame) {
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
