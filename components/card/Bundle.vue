<template>
  <div class="c-card-bundle group">
    <div class="relative aspect-[4/3] overflow-hidden">
      <img
        class="absolute left-0 top-0 size-full object-cover duration-300 group-hover:scale-105"
        :src="bundle.displayIcon ?? bundle.displayIcon2"
      />
      <ul
        class="relative flex flex-wrap gap-2 p-2 text-xs uppercase text-brand-50"
      >
        <li
          v-for="(item, index) in bundle.items"
          :key="`c-card-bundle-badge-${item.displayName}-${index}`"
          class="bg-brand-950 px-3 py-1"
        >
          <span>{{ item.displayName }}</span>
        </li>
      </ul>
    </div>
    <div class="flex-auto border-t border-brand-950 bg-brand-50 p-2">
      <p class="text-lg uppercase">{{ bundle.displayName }}</p>
    </div>
    <NuxtLink
      :to="'/ingame/bundles/' + bundle.uuid"
      class="absolute left-0 top-0 size-full"
    />
  </div>
</template>

<script setup>
defineProps({
  bundle: {
    type: Object,
    default: {},
  },
});
</script>

<style lang="postcss">
:where(.c-card-bundle) {
  @apply relative flex flex-col;
}
</style>
