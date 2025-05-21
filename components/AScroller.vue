<template>
  <component ref="scroller" :is="tag">
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: "div",
});

const scroller = ref();
</script>

<style lang="postcss"></style>
