<template>
  <div class="c-content-swapper">
    <div
      class="grid flex-shrink-0 grid-cols-1 gap-[1px] border border-[currentColor] bg-[currentColor]"
    >
      <AButton
        v-for="(item, index) in items"
        :key="`c-content-wrapper-label-${index}-${item.displayName}`"
        class="c-a-button--inherit w-full uppercase"
        :class="{
          active: activeItem === item.displayName,
        }"
        @click="activeItem = item.displayName"
      >
        {{ item.displayName }}
      </AButton>
    </div>
    <TransitionGroup
      name="items"
      tag="div"
      class="relative -ml-[1px] flex-auto overflow-hidden border border-[currentColor]"
    >
      <template
        v-for="(item, index) in items"
        :key="`c-content-wrapper-item-${index}-${item.displayName}`"
      >
        <slot
          v-if="activeItem === item.displayName"
          name="item"
          :item="item"
          :swap="swap"
        />
      </template>
    </TransitionGroup>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
  },
});

const activeItem = ref(props.items[0].displayName);
const swap = ref(false);

watch(activeItem, () => {
  swap.value = !swap.value;
});
</script>

<style lang="postcss">
:where(.c-content-swapper) {
  @apply flex;
}

.items-enter-active,
.items-leave-active {
  @apply absolute transition-all duration-700;
}

.items-enter-from {
  @apply -translate-y-full;
}

.items-enter-from,
.items-enter-to {
  @apply z-10;
}

.items-leave-from,
.items-leave-to {
  @apply z-0;
}

.items-leave-to {
  @apply absolute left-0 top-0 translate-y-4;
}
</style>
