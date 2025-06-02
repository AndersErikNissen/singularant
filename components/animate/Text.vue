<template>
  <span class="c-animate-text">
    <span
      v-for="(letter, index) in text.split('')"
      :key="`c-animate-text-${letter}-${index}`"
      class="c-animate-text__letter"
      :style="{ '--delay': props.delay * index + 'ms' }"
    >
      <span class="block">{{ letter }}</span>
      <span class="absolute left-0 top-0 block -translate-y-full">{{
        letter
      }}</span>
    </span>
  </span>

  <!-- 
    # Letter
    Info: letters,  
    Delay = 5 items / total delay

    <span class="c-animate-text__letter" :style="{'--delay': 0}">
      <span>
        A
      </span>
      <span class="absolute top-0 -translate-x-full">
        A (Hidden)
      </span>
    </span>
    -->
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  delay: {
    type: Number,
    default: 50,
  },
});
</script>

<style lang="postcss">
:where(.c-animate-text) {
  @apply inline-block overflow-hidden;

  & .c-animate-text__letter {
    @apply relative inline-block delay-[var(--delay,0ms)] duration-300 group-hover:translate-y-full;
  }
}
</style>
