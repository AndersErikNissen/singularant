<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      v-if="type === '+'"
      d="M8.55887 12.0055V20.4H11.8411V12.0055H20.2V8.74862H11.8411V0.399994H8.55887V8.74862H0.200012V12.0055H8.55887Z"
      fill="currentColor"
    />
    <path
      v-if="type === 'x'"
      d="M10.4523 12.7733L16.3881 18.7091L18.7091 16.3881L12.7733 10.4523L18.6839 4.54173L16.3809 2.23877L10.4703 8.14938L4.56693 2.24601L2.24601 4.56693L8.14938 10.4703L2.23877 16.3809L4.54173 18.6839L10.4523 12.7733Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "+",
  },
});
</script>

<style></style>
