<template>
  <div class="p-skins">
    <section class="border-y border-brand-950 px-5">
      <div class="border-x border-brand-950 p-5">
        <h1 class="text-4xl uppercase">Skins</h1>
      </div>
    </section>
    <section v-if="bundles?.length > 0" class="border-b border-brand-950 px-5">
      <div
        class="flex items-center justify-between gap-5 border-x border-brand-950 p-5"
      >
        <h2 class="text-2xl uppercase">
          Selected bundles ({{ currentIndex + 2 }} /
          {{ selectedBundles.length }})
        </h2>
        <div class="flex gap-1">
          <NuxtLink
            class="flex h-10 items-center border border-brand-950 px-3 duration-300 hover:border-brand-500 hover:bg-brand-500 hover:text-brand-50"
            to="/skins/bundles"
          >
            <span>SEE ALL</span>
          </NuxtLink>
          <button
            @click="() => scroller.scrollToIndex('<')"
            class="flex size-10 items-center justify-center border border-brand-950 p-3 text-lg font-bold duration-300 hover:border-brand-500 hover:bg-brand-500 hover:text-brand-50"
          >
            <AnIcon class="size-full" type="<" />
          </button>
          <button
            @click="() => scroller.scrollToIndex('>')"
            class="flex size-10 items-center justify-center border border-brand-950 p-3 text-lg font-bold duration-300 hover:border-brand-500 hover:bg-brand-500 hover:text-brand-50"
          >
            <AnIcon class="size-full" type=">" />
          </button>
        </div>
      </div>
      <div class="border-x border-brand-950">
        <AScroller
          class="no-scrollbar flex w-full justify-start gap-[1px] overflow-x-scroll bg-brand-950 py-[1px]"
          ref="scroller"
          :count="selectedBundles.length"
          :current-index="currentIndex"
          @change="currentIndex = $event"
        >
          <CardBundle
            v-for="(bundle, index) in selectedBundles"
            :key="`p-bundles-bundle-${bundle.displayName}-${index}`"
            :bundle="bundle"
            class="flex-[0_0_calc(50%_-_0.5px)]"
          />
        </AScroller>
      </div>
    </section>
  </div>
</template>

<script setup>
const scroller = ref(null);
const currentIndex = ref(0);

const { data: skins } = await useFetch("/api/skins");
const { bundles, weapons, buddies, sprays } = skins.value;
const selectedBundles = bundles.slice(0, 20);
</script>

<style lang="postcss">
:where(.p-skins) {
  @apply bg-brand-50;
}
</style>
