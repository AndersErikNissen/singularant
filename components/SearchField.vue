<template>
  <div
    class="c-search-bar"
    :class="{
      active: query.length > 0,
    }"
  >
    <input
      @click="targetInput"
      @input="delayedInput"
      v-model="query"
      class="c-search-bar__input"
      placeholder="Search..."
      ref="input"
    />
    <button class="cursor-pointer p-5 opacity-0" @click="clearQuery">
      <AnIcon class="size-3 text-brand-50" type="x" />
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(["change:query"]);
const props = defineProps({
  delay: {
    type: Number,
    default: 500,
  },
});

const input = ref();
const query = ref("");
const delaying = ref(false);

function targetInput() {
  input.value.focus();
  input.value.select();
}

function clearQuery() {
  query.value = "";
  emit("change:query", query.value);
}

function delayedInput() {
  if (delaying.value) clearTimeout(delaying.value);

  delaying.value = setTimeout(() => {
    emit("change:query", query.value);
  }, props.delay);
}
</script>

<style lang="postcss">
:where(.c-search-bar) {
  @apply relative flex w-full items-center border border-brand-950 transition-colors duration-300;

  &:has(.c-search-bar__input:focus) {
    @apply bg-brand-500;

    &.active .c-search-bar__input + button {
      @apply opacity-100 duration-300;
    }
  }

  & .c-search-bar__input {
    @apply w-full border-none bg-[transparent] p-5 text-brand-500 outline-none;

    &::placeholder {
      @apply text-brand-500;
    }

    &:focus::placeholder,
    &:focus {
      @apply text-brand-50;
    }
  }
}
</style>
