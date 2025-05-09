<template>
  <div class="c-infinity-banner" ref="component">
    <div v-if="!ready" class="inline-block" ref="placeholder">
      <slot />
    </div>

    <Transition name="ready">
      <div v-if="ready" class="flex animate-[infinityLoop_10s_linear_infinity]">
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
const ready = ref(false);
const component = ref();
const placeholder = ref();

const itemCount = ref(1);

onMounted(() => {
  const placeholderWidth = placeholder.value.getBoundingClientRect().width;
  const componentWidth = component.value.getBoundingClientRect().width;
  itemCount.value = Math.ceil(componentWidth / placeholderWidth) + 1; // +1: Just to be sure it's wide enough
  ready.value = true;
});
</script>

<style lang="postcss">
:where(.c-infinity-banner) {
  @apply overflow-hidden;
}

.ready-enter-from,
.ready-leave-to {
  @apply opacity-0;
}

.ready-enter-active,
.ready-leave-active {
  @apply transition-all duration-150;
}

@keyframes infinityLoop {
  to {
    transform: translateX(-50%);
  }
}
</style>
