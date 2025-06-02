<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="c-the-modal"
      ref="modal"
      @click="(e) => e.target === modal && closeModal()"
    >
      <div class="c-the-modal__content">
        <div class="flex h-full flex-col border border-brand-950 bg-brand-50">
          <div
            class="flex flex-shrink-0 items-center justify-between gap-5 border-b border-brand-950 p-5"
          >
            <p class="text-2xl uppercase">
              <slot name="header" />
            </p>
            <button
              @click="closeModal"
              class="flex size-10 flex-shrink-0 items-center justify-center border border-brand-950 bg-brand-50 duration-300 hover:border-brand-500 hover:bg-brand-500 hover:text-brand-50"
            >
              <AnIcon class="size-3" type="x" />
            </button>
          </div>

          <div class="flex-auto">
            <slot name="body" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["close"]);

watch(
  () => props.show,
  (newValue) => {
    if (newValue) document.body.classList.add("overflow-hidden");
  },
);

const modal = ref();

function closeModal() {
  document.body.classList.remove("overflow-hidden");
  emit("close");
}
</script>

<style lang="postcss">
:where(.c-the-modal) {
  @apply fixed left-0 top-0 z-50 flex size-full bg-brand-500 bg-opacity-60;

  & .c-the-modal__content {
    @apply relative p-5;
  }
}

/* ANIMATION */
.modal-enter-from,
.modal-leave-to {
  @apply bg-opacity-0;

  & .c-the-modal__content {
    @apply -translate-x-full;
  }
}

.modal-enter-active,
.modal-leave-active {
  &,
  & .c-the-modal__content {
    @apply transition-all duration-500;
  }
}
</style>
