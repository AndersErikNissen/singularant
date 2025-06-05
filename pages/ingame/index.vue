<template>
  <div class="p-ingame">
    <section class="border-y border-brand-950 px-5">
      <div class="border-x border-brand-950 p-5">
        <h1 class="text-2xl uppercase sm:text-4xl">In-game</h1>
      </div>
    </section>
    <section v-if="bundles?.length > 0" class="px-5">
      <div
        class="flex flex-wrap items-center justify-between gap-2 border-x border-brand-950 p-5 sm:flex-nowrap sm:gap-5"
      >
        <h2 class="flex-auto text-xl uppercase sm:text-2xl">
          Selected bundles ({{ currentIndex + 2 }} /
          {{ selectedBundles.length }})
        </h2>
      </div>
      <div class="border-x border-t border-brand-950">
        <div class="-my-[1px] -mr-[1px] flex justify-end">
          <NuxtLink
            class="flex h-10 items-center border border-brand-950 px-3 duration-300 hover:border-brand-500 hover:bg-brand-500 hover:text-brand-50"
            to="/ingame/bundles"
          >
            <span>SEE ALL</span>
          </NuxtLink>
          <button
            @click="() => scroller.scrollToIndex('<')"
            class="-mx-[1px] flex size-10 items-center justify-center border border-brand-950 p-3 text-lg font-bold duration-300 hover:border-brand-500 hover:bg-brand-500 hover:text-brand-50"
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
            class="flex-[0_0_calc(75%_-_0.5px)] sm:flex-[0_0_calc(50%_-_0.5px)]"
          />
        </AScroller>
      </div>
    </section>
    <section class="-mt-[1px] border-y border-brand-950">
      <div class="border-b border-brand-950">
        <InfinityBanner class="py-5"
          ><span class="pr-16 text-2xl uppercase italic sm:text-4xl"
            >FILTERS</span
          ></InfinityBanner
        >
      </div>
      <div class="px-5">
        <div class="flex items-center gap-[1px] bg-brand-950 px-[1px] text-lg">
          <AButton
            v-for="(value, key, index) in categories"
            :key="`category-${key}-${index}`"
            class="flex-grow-1 flex basis-full items-center justify-center bg-brand-50 p-5 text-sm sm:text-base"
            :class="{
              active: activeCategory === key,
            }"
            @click="activeCategory = key"
          >
            <span class="uppercase">{{ key }}</span>
          </AButton>
        </div>
      </div>
      <div class="-mb-[1px] flex flex-wrap items-stretch px-5 sm:flex-nowrap">
        <SearchField @change:query="query = $event" class="flex-auto" />
        <ul
          v-if="activeCategory === 'weapons'"
          class="grid flex-shrink-0 flex-grow grid-cols-2 gap-[1px] bg-brand-950 pb-[1px] pl-[1px] pr-[1px] sm:flex-grow-0 sm:py-[1px] sm:pl-0"
        >
          <li
            v-for="(name, index) in weaponFilterNames"
            :key="`weapon-filter-${name}-${index}`"
            class="flex items-center justify-center gap-2 bg-brand-50 p-3 sm:p-5"
          >
            <div class="relative size-4 sm:size-5">
              <input
                type="checkbox"
                :id="`input-${name}`"
                :value="name"
                v-model="checkedWeaponFilters"
                class="block size-full cursor-pointer opacity-0"
              />
              <div
                class="pointer-events-none absolute left-0 top-0 size-full border p-1"
                :class="{
                  'border-brand-500 bg-brand-500 text-brand-50':
                    checkedWeaponFilters.includes(name),
                  'border-brand-950': !checkedWeaponFilters.includes(name),
                }"
              >
                <AnIcon
                  v-show="checkedWeaponFilters.includes(name)"
                  type="checkmark"
                  class="size-full"
                />
              </div>
            </div>
            <label
              :for="`input-${name}`"
              class="block translate-y-[2%] cursor-pointer text-sm uppercase sm:text-base"
              >{{ name }}</label
            >
          </li>
        </ul>
      </div>
    </section>
    <section class="border-b border-brand-950 px-5">
      <div
        class="-mb-[1px] grid grid-cols-2 pl-[1px] sm:grid-cols-4 2xl:grid-cols-6"
      >
        <CardIngame
          v-for="(item, index) in computedCategory"
          :key="`${item.uuid}-${index}`"
          :item="item"
          class="-ml-[1px] -mt-[1px] bg-brand-950 p-[1px]"
        >
          <template #image="{ src }">
            <img
              :src="src"
              class="object-contain duration-300 group-hover:scale-105"
              :class="{
                'max-h-[23%]': activeCategory === 'weapons',
                'max-h-full': activeCategory !== 'weapons',
              }"
            />
          </template>
        </CardIngame>
        <div
          v-if="computedCategory.length === 0"
          class="col-span-full -ml-[1px] -mt-[1px] bg-brand-950 p-[1px]"
        >
          <div class="bg-brand-50 p-5">
            <p class="uppercase">No matches - try again!</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useColors();

const scroller = ref(null);
const currentIndex = ref(0);

const { data: ingame } = await useFetch("/api/ingame");
const { bundles, weapons, buddies, sprays } = ingame.value;
const activeCategory = ref("weapons");
const query = ref("");

const weaponFilterNames = ["chromas", "levels"];
const checkedWeaponFilters = ref([]);

const categories = {
  weapons: weapons.filter((weapon) => {
    let firstWord = weapon.displayName.replace(/ .*/, "").toLowerCase();

    return firstWord !== "standard" && firstWord !== "random";
  }),
  buddies: buddies,
  sprays: sprays,
};

const computedCategory = computed(() => {
  let filtered = categories[activeCategory.value].filter((item) =>
    item.displayName.toLowerCase().includes(query.value),
  );

  if (activeCategory.value === "weapons") {
    checkedWeaponFilters.value.forEach((filter) => {
      filtered = filtered.filter((item) => item[filter].length > 1);
    });
  }

  return filtered;
});

const selectedBundles = useState("selectedBundles", () =>
  useRandomArray(bundles, 20),
);
</script>

<style lang="postcss">
:where(.p-ingame) {
  @apply bg-brand-50;
}
</style>
