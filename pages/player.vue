<template>
  <div class="p-player">
    <section class="px-5">
      <div
        class="flex items-stretch justify-between gap-3 border-l border-r border-brand-950"
      >
        <h1 class="p-5 text-2xl uppercase sm:text-4xl">Player</h1>
      </div>
      <div class="border-brand-950">
        <div class="flex w-full">
          <SearchField @change:query="query = $event" />
          <div
            class="-ml-[1px] flex items-center border border-brand-950 bg-brand-50 p-3 sm:p-5"
          >
            <p class="flex items-center gap-1 text-sm sm:text-base">
              <span class="text-brand-500">
                {{
                  activeItems === "cards"
                    ? computedCards.length
                    : computedTitles.length
                }}
              </span>
              <span class="uppercase">{{ activeItems }}</span>
            </p>
          </div>
        </div>
        <div class="flex gap-[1px] bg-brand-950 p-[1px] pt-0">
          <AButton
            class="flex-[0_1_50%] uppercase"
            @click="activeItems = 'cards'"
            :class="{
              active: activeItems === 'cards',
            }"
            >Cards</AButton
          >
          <AButton
            class="flex-[0_1_50%] uppercase"
            @click="activeItems = 'titles'"
            :class="{
              active: activeItems === 'titles',
            }"
            >Titles</AButton
          >
        </div>
      </div>
    </section>

    <section class="px-5 pt-0">
      <div class="sm:border sm:border-t-0 sm:border-brand-950 sm:p-5">
        <ul
          v-show="activeItems === 'cards'"
          class="grid flex-auto grid-cols-2 pl-[1px] md:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-12"
        >
          <li
            v-for="(card, index) in computedCards"
            :key="`${card.uuid}-${index}`"
            class="group -ml-[1px] -mt-[1px] cursor-pointer bg-brand-950 p-[1px]"
            @click="() => (modal = card)"
          >
            <div class="relative overflow-hidden">
              <NuxtImg
                :src="card.largeArt"
                class="h-auto w-full duration-300 group-hover:scale-110"
              />
              <div
                class="absolute left-[50%] top-[50%] flex size-10 -translate-x-[50%] -translate-y-[50%] scale-50 items-center justify-center border border-brand-950 bg-brand-50 opacity-0 duration-300 group-hover:scale-100 group-hover:opacity-100"
              >
                <AnIcon class="size-3" />
              </div>
            </div>
          </li>
        </ul>

        <ul
          v-show="activeItems === 'titles'"
          class="grid flex-auto grid-cols-1 pl-[1px] sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8"
        >
          <li
            v-for="(title, index) in computedTitles"
            :key="`${title.uuid}-${index}`"
            class="group -ml-[1px] -mt-[1px] bg-brand-950 p-[1px]"
          >
            <div
              class="flex h-full items-center bg-brand-50 px-5 py-3 duration-300 group-hover:bg-brand-500 group-hover:text-brand-50"
            >
              <p>{{ title.titleText }}</p>
            </div>
          </li>
        </ul>

        <div
          v-show="
            (activeItems === 'cards' && computedCards.length === 0) ||
            (activeItems === 'titles' && computedTitles.length === 0)
          "
          class="border border-brand-950 p-5"
        >
          <p class="text-lg">No results - try again!</p>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <TheModal :show="!!modal" @close="modal = false">
        <template #header>
          {{ modal.displayName }}
        </template>
        <template #body>
          <div class="flex h-full flex-col gap-[1px] bg-brand-950">
            <div
              v-if="modal.smallArt"
              class="flex items-center justify-center bg-brand-50 p-5"
            >
              <img
                class="size-full max-w-[118px] object-contain"
                :src="modal.smallArt"
              />
            </div>
            <div
              v-if="modal.wideArt"
              class="flex items-center justify-center bg-brand-50 p-5"
            >
              <img
                class="size-full max-w-[442px] object-contain"
                :src="modal.wideArt"
              />
            </div>
            <div
              v-if="modal.largeArt"
              class="flex flex-auto items-center justify-center bg-brand-50 p-5"
            >
              <div class="relative size-full max-w-[258px]">
                <img
                  class="absolute left-0 top-0 size-full object-contain"
                  :src="modal.largeArt"
                />
              </div>
            </div>
          </div>
        </template>
      </TheModal>
    </Teleport>
  </div>
</template>

<script setup>
useHead({
  title: "Player",
});
useColors();

const { data: player } = await useFetch("/api/player");

const activeItems = ref("cards");
const query = ref("");

const computedCards = computed(() => {
  return player.value.cards.filter((item) =>
    item.displayName.toLowerCase().replace("card", "").includes(query.value),
  );
});

const computedTitles = computed(() => {
  return player.value.titles.filter((item) => {
    return item.titleText.toLowerCase().includes(query.value);
  });
});

const modal = ref(false);
</script>

<style lang="postcss">
:where(.p-player) {
  @apply bg-brand-50;
}
</style>
