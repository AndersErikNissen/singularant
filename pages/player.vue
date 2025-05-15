<template>
  <div class="p-player">
    <section class="px-5" ref="page-header">
      <div
        class="flex items-stretch justify-between gap-3 border-l border-r border-brand-950"
      >
        <h1 class="p-5 text-4xl uppercase">Player</h1>
      </div>
      <div class="border-brand-950">
        <div class="flex w-full gap-[1px] bg-brand-950 p-[1px]">
          <input
            @click="(e) => e.target.select()"
            v-model="query"
            class="p-player__input"
            placeholder="Search..."
          />
          <div class="flex items-center bg-brand-50 p-5">
            <p class="flex items-center gap-1">
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
            class="flex-[0_1_50%]"
            @click="activeItems = 'cards'"
            :class="{
              active: activeItems === 'cards',
            }"
            >Cards</AButton
          >
          <AButton
            class="flex-[0_1_50%]"
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
      <div class="border border-t-0 border-brand-950 p-5">
        <ul
          v-show="activeItems === 'cards'"
          class="grid flex-auto grid-cols-3 md:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-12"
        >
          <li
            v-for="(card, index) in computedCards"
            :key="`${card.uuid}-${index}`"
            class="group -ml-[1px] -mt-[1px] cursor-pointer bg-brand-950 p-[1px]"
            @click="() => toggleModal(card)"
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
          class="grid flex-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8"
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
          v-show="computedCards.length === 0"
          class="border border-t-0 border-brand-950 p-5"
        >
          <p class="text-lg">No results - try again!</p>
        </div>
      </div>
    </section>

    <Transition name="modal">
      <div
        v-if="!!modal"
        ref="modal-wrapper"
        class="fixed left-0 top-0 z-50 flex size-full cursor-pointer justify-end bg-brand-500 bg-opacity-85 p-5"
        @click="(e) => e.target === modalWrapper && toggleModal()"
      >
        <div class="p-player__modal-content">
          <div class="flex items-center gap-5 border border-brand-950 p-5">
            <h4 class="text-2xl uppercase">{{ modal.displayName }}</h4>
            <button
              @click="toggleModal"
              class="flex size-10 items-center justify-center border border-brand-950 bg-brand-50 duration-300 hover:border-brand-500 hover:bg-brand-500 hover:text-brand-50"
            >
              <AnIcon class="size-3" type="x" />
            </button>
          </div>
          <div
            class="grid flex-auto grid-cols-1 gap-[1px] bg-brand-950 p-[1px] pt-0"
          >
            <div
              v-if="modal.smallArt"
              class="flex items-center justify-center bg-brand-50 p-5"
            >
              <NuxtImg :src="modal.smallArt" />
            </div>
            <div
              v-if="modal.wideArt"
              class="flex items-center justify-center bg-brand-50 p-5"
            >
              <NuxtImg :src="modal.wideArt" />
            </div>
            <div
              v-if="modal.largeArt"
              class="flex items-center justify-center bg-brand-50 p-5"
            >
              <NuxtImg :src="modal.largeArt" />
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="scroll-top">
      <div
        v-if="scrollTop"
        class="fixed bottom-0 right-5 border border-brand-950 uppercase"
      >
        <AButton @click="scrolToTop">Scroll top</AButton>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const { data: player } = await useFetch("/api/player");

const activeItems = ref("cards");
const query = ref("");

const computedCards = computed(() => {
  return player.value.cards.filter((item) =>
    item.displayName.toLowerCase().includes(query.value),
  );
});

const computedTitles = computed(() => {
  return player.value.titles.filter((item) =>
    item.displayName.toLowerCase().includes(query.value),
  );
});

const modal = ref(false);
const modalWrapper = useTemplateRef("modal-wrapper");
const toggleModal = (item) => (modal.value = !!modal.value ? false : item);

const scrollTop = ref(false);
const pageHeader = useTemplateRef("page-header");
const scrolToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

useIntersectionObserver(
  pageHeader,
  ([entry]) => {
    scrollTop.value = entry?.isIntersecting ? false : true;
  },
  { threshold: 1 },
);
</script>

<style lang="postcss">
:where(.p-player) {
  @apply bg-brand-50;
}

.p-player__input {
  @apply w-full border-none bg-brand-50 p-5 text-brand-500 outline-none;
}

.p-player__input:focus {
  @apply bg-brand-500;
}

.p-player__input::placeholder {
  @apply text-brand-500;
}

.p-player__input:focus::placeholder,
.p-player__input:focus {
  @apply text-brand-50;
}

:where(.p-player__modal-content) {
  @apply flex max-w-full cursor-auto flex-col bg-brand-50;
}

/* Modal animation */
.modal-enter-from,
.modal-leave-to {
  @apply bg-opacity-0;
}

.modal-enter-from .p-player__modal-content,
.modal-leave-to .p-player__modal-content {
  @apply translate-x-full;
}

.modal-enter-active,
.modal-leave-active,
.modal-enter-active .p-player__modal-content,
.modal-leave-active .p-player__modal-content {
  @apply transition-all duration-500;
}

/* Scroll top animation */
.scroll-top-enter-from,
.scroll-top-leave-to {
  @apply translate-y-full;
}

.scroll-top-enter-active,
.scroll-top-leave-active {
  @apply transition-transform duration-300;
}
</style>
