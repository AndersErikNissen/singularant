<template>
  <div class="p-skins">
    <section class="border-y border-brand-950 px-5">
      <div class="border-x border-brand-950 p-5">
        <h1 class="text-4xl uppercase">Skins</h1>
      </div>
    </section>
    <section v-if="bundles.length > 0" class="border-b border-brand-950 px-5">
      <div
        class="flex items-center justify-between gap-5 border-x border-brand-950 p-5"
      >
        <h2 class="text-2xl uppercase">Bundles</h2>
        <div class="flex gap-1">
          <button
            class="flex size-10 items-center justify-center border border-brand-950 p-3 text-lg font-bold duration-300 hover:border-brand-500 hover:bg-brand-500 hover:text-brand-50"
          >
            <AnIcon class="size-full" type="<" />
          </button>
          <button
            class="flex size-10 items-center justify-center border border-brand-950 p-3 text-lg font-bold duration-300 hover:border-brand-500 hover:bg-brand-500 hover:text-brand-50"
          >
            <AnIcon class="size-full" type=">" />
          </button>
        </div>
      </div>
      <div
        class="no-scrollbar flex w-full justify-start gap-[1px] overflow-x-scroll bg-brand-950 p-[1px]"
        ref="scroller"
      >
        <div
          v-for="bundle in bundles"
          class="aspect-[16/9] flex-[0_0_calc(50%_-_0.5px)]"
        >
          <img
            :src="bundle.displayIcon ?? bundle.displayIcon2"
            class="size-full object-cover"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const scroller = ref();
/**
 * # Content
 * - Collections
 * - Weapon
 * - Buddies
 * - Spray
 * --- Filter by: Weapon, (Collection), Has Chromas, Has Levels
 *
 * Modal for Skin (Used on both Collection, Armory and Skins ofc)
 * --- With Levels/Chroma video handling
 *
 *
 * Filters
 * Level 1: Bundles, Weapons, Buddies, Sprays
 */

const { data: skins } = await useFetch("/api/skins");
const { bundles, weapons, buddies, sprays } = skins.value;
</script>

<style lang="postcss">
:where(.p-skins) {
  @apply bg-brand-50;
}
</style>
