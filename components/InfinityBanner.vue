<template>
  <div class="c-infinity-banner" ref="component">
    <div v-if="!ready" class="inline-block" ref="placeholder">
      <slot />
    </div>

    <Transition name="ready">
      <div
        v-if="ready"
        class="c-infinity-banner__content"
        :style="{
          animationDuration: duration + 's',
        }"
      >
        <ul v-for="n in 2" class="flex flex-shrink-0">
          <li v-for="n in itemCount" class="flex-shrink-0">
            <slot />
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const props = defineProps({
  duration: {
    type: Number,
    default: 20,
  },
});

const ready = ref(false);
const component = ref();
const placeholder = ref();
const duration = ref(props.duration);
const itemCount = ref(0);

function init() {
  if (ready.value) ready.value = false;
  const placeholderWidth = placeholder.value.getBoundingClientRect().width;
  const componentWidth = component.value.getBoundingClientRect().width;
  itemCount.value = Math.ceil(componentWidth / placeholderWidth);
  duration.value =
    duration.value * (componentWidth / (placeholderWidth * itemCount.value)); // Adjust duration since the content will be wider than the component
  ready.value = true;
}

onMounted(() => {
  init();

  window.addEventListener("resize", init);
});
</script>

<style lang="postcss">
:where(.c-infinity-banner) {
  @apply flex overflow-hidden;
}
:where(.c-infinity-banner__content) {
  @apply flex flex-shrink-0;
  animation: infinity 10s linear infinite;
}

.ready-enter-from,
.ready-leave-to {
  @apply opacity-0;
}

.ready-enter-active,
.ready-leave-active {
  @apply transition-all duration-150;
}

@keyframes infinity {
  to {
    transform: translateX(-50%);
  }
}
</style>
