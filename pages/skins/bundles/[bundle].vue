<template>
  <div class="p-bundle">
    <section class="px-5">
      <div
        class="border-x border-b border-brand-950 p-5 text-sm text-brand-700"
      >
        <ul class="flex items-center gap-2">
          <li>
            <NuxtLink
              class="underline underline-offset-2 duration-300 hover:text-brand-950"
              to="/skins"
              >SKINS</NuxtLink
            >
          </li>
          <li>/</li>
          <li>
            <NuxtLink
              class="underline underline-offset-2 duration-300 hover:text-brand-950"
              to="/skins/bundles"
              >BUNDLES</NuxtLink
            >
          </li>
          <li>/</li>
          <li>
            <p class="uppercase">{{ bundle.displayName }}</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="px-5">
      <div class="border-x border-brand-950 p-5">
        <h1 class="text-4xl uppercase">{{ bundle.displayName }}</h1>
      </div>
    </section>
    <section class="p-bundle__banner">
      <div class="group col-span-3 overflow-hidden">
        <img
          class="size-full object-cover duration-300 group-hover:scale-105"
          :src="bundle.displayIcon ?? bundle.displayIcon2"
        />
      </div>
      <div class="group overflow-hidden">
        <img
          class="size-full object-cover duration-300 group-hover:scale-105"
          :src="bundle.verticalPromoImage ?? bundle.displayIcon"
        />
      </div>
    </section>
    <section class="w-full">
      <InfinityBanner class="py-5"
        ><span class="pr-16 text-4xl uppercase italic"
          >INCLUDES</span
        ></InfinityBanner
      >
    </section>
    <section>
      <ContentSwapper :items="bundle.items">
        <template #item="{ item, swap }">
          <div class="flex flex-wrap gap-[1px]">
            <div
              v-for="childItem in item.items"
              class="flex-[0_0_calc((100%_-_5px)_/_4)]"
            >
              <div class="flex size-full flex-col gap-[1px] bg-brand-950">
                <div
                  class="relative flex flex-auto items-center justify-center bg-brand-50 p-5"
                >
                  <img
                    class="absolute left-0 top-0 size-full object-cover"
                    v-if="childItem.wallpaper"
                    :src="childItem.wallpaper"
                  />
                  <img class="relative" :src="childItem.displayIcon" />
                </div>
                <div class="flex-shrink-0 bg-brand-50 p-2">
                  <p>{{ childItem.displayName }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </ContentSwapper>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: skins } = await useFetch("/api/skins");

const bundle = skins.value?.bundles.find(
  (bundle) => bundle.uuid === route.params.bundle,
);
</script>

<style lang="postcss">
:where(.p-bundle) {
  @apply border-y border-brand-950 bg-brand-50;

  & .p-bundle__banner {
    @apply relative grid aspect-[16/6] grid-cols-4 gap-[1px] bg-brand-950 p-[1px];

    &::before,
    &::after {
      content: "";
      @apply absolute top-0 z-10 h-full w-[1px] bg-brand-950;
    }

    &::before {
      @apply left-5;
    }

    &::after {
      @apply right-5;
    }
  }
}
</style>
