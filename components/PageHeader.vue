<template>
  <div class="c-page-header">
    <ul
      v-if="breadcrumbs.length > 0"
      class="flex items-center gap-2 border-x border-b border-brand-950 p-5 text-sm uppercase text-brand-500"
    >
      <template v-for="(crumb, index) in crumbs">
        <li>
          <NuxtLink
            class="underline underline-offset-2 duration-300 hover:text-brand-950"
            :to="breadcrumbs[index]"
            >{{ crumb }}</NuxtLink
          >
        </li>
        <li>/</li>
      </template>
      <li>
        <slot />
      </li>
    </ul>

    <div class="border-x border-brand-950 p-5">
      <h1 class="text-4xl uppercase">
        <slot />
      </h1>
    </div>
  </div>
</template>

<script setup>
const { crumbs } = defineProps({
  crumbs: {
    type: Array,
    default: [],
  },
});

let currentPath = "";
const breadcrumbs = [];

crumbs.forEach((path) => {
  currentPath = currentPath + "/" + path.replace("-", "");
  breadcrumbs.push(currentPath);
});
</script>

<style lang="postcss">
:where(.c-page-header) {
  @apply border-y border-brand-950 bg-brand-50 px-5;
}
</style>
