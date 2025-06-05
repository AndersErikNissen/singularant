<template>
  <div class="p-bundle">
    <pre>{{ bundle.items.cards }}</pre>
    <PageHeader class="-mt-[1px]" :crumbs="['in-game', 'bundles']">
      {{ bundle.displayName }}
    </PageHeader>
    <section class="p-bundle__banner">
      <img
        class="size-full object-cover duration-300 group-hover:scale-105"
        :src="bundle.displayIcon ?? bundle.displayIcon2"
      />
    </section>
    <section
      v-for="(item, index) in bundle.items"
      :key="`bundle-items-section-${index}-${item.displayName}`"
      class="-mb-[1px] border-t border-brand-950"
    >
      <InfinityBanner class="border-b border-brand-950 py-3 sm:py-5"
        ><span class="pr-16 text-xl uppercase italic sm:text-2xl">{{
          item.displayName.slice(0, -1) + "(s)"
        }}</span></InfinityBanner
      >
      <div class="px-5">
        <div class="grid grid-cols-1 pl-[1px] sm:grid-cols-2 lg:grid-cols-4">
          <CardIngame
            v-for="(childItem, index) in item.items"
            :key="`${childItem.uuid}-${index}`"
            :item="childItem"
            class="-ml-[1px] -mt-[1px] bg-brand-950 p-[1px]"
          >
            <template #image="{ src }">
              <img
                :src="src"
                class="object-contain duration-300 group-hover:scale-105"
                :class="{
                  'max-h-[23%]': item.displayName === 'weapons',
                  'max-h-full': item.displayName !== 'weapons',
                }"
              />
            </template>
          </CardIngame>
        </div>
      </div>
    </section>

    <InfinityBanner class="-mb-[1px] border-y border-brand-950 py-3 sm:py-5"
      ><span class="pr-16 text-xl uppercase italic sm:text-2xl"
        >Other bundles</span
      ></InfinityBanner
    >

    <section class="border-t border-brand-950 px-5">
      <div class="-my-[1px] grid grid-cols-1 pl-[1px] pt-[1px] sm:grid-cols-2">
        <CardBundle
          v-for="(otherBundle, index) in otherBundles"
          :key="`otherBundle-${otherBundle.displayName}-${index}`"
          :bundle="otherBundle"
          class="-ml-[1px] -mt-[1px] bg-brand-950 p-[1px]"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
useColors();

const route = useRoute();
const { data: ingame } = await useFetch("/api/ingame");
const bundleIndex = ingame.value?.bundles.findIndex(
  (bundle) => bundle.uuid === route.params.bundle,
);
const bundle = ingame.value.bundles[bundleIndex];

const otherBundles = useState("otherBundles", () =>
  useRandomArray(ingame.value.bundles, 4, [bundleIndex]),
);

useHead({
  title: bundle.displayName.toUpperCase() + " BUNDLE",
});

// Change bundles on route change
onMounted(() => {
  otherBundles.value = useRandomArray(ingame.value.bundles, 4, [bundleIndex]);
});
</script>

<style lang="postcss">
:where(.p-bundle) {
  @apply border-y border-brand-950 bg-brand-50;

  & .p-bundle__banner {
    @apply relative -mb-[1px] aspect-[4/3] bg-brand-950 p-[1px] sm:aspect-[16/6];

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
