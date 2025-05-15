<template>
  <div class="p-player">
    <section class="px-5">
      <div
        class="flex items-center justify-between gap-3 border-l border-r border-brand-950 p-5"
      >
        <h1 class="text-4xl uppercase">Player</h1>
        <p class="text-xs">
          {{ computedItems.length }} <span class="uppercase">{{ active }}</span>
        </p>
      </div>
      <div class="border-brand-950">
        <div class="flex w-full gap-[1xp] bg-brand-950 p-[1px]">
          <input
            @click="(e) => e.target.select()"
            v-model="query"
            class="p-player__input"
            placeholder="Search..."
          />
        </div>
        <div class="flex gap-[1px] bg-brand-950 p-[1px] pt-0">
          <AButton
            class="flex-[0_1_50%]"
            @click="active = 'cards'"
            :class="{
              active: active === 'cards',
            }"
            >Cards</AButton
          >
          <AButton
            class="flex-[0_1_50%]"
            @click="active = 'titles'"
            :class="{
              active: active === 'titles',
            }"
            >Titles</AButton
          >
        </div>
      </div>
    </section>
    <section class="px-5 pt-0">
      <div
        class="grid flex-auto grid-cols-2 border-l border-r-brand-950 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8"
      >
        <div
          v-for="(item, index) in computedItems"
          :key="`${item.uuid}-${index}`"
          class="group bg-brand-950 p-[1px] pl-0 pt-0"
        >
          <div
            v-if="active === 'cards'"
            class="relative cursor-pointer overflow-hidden"
            @click="() => toggleModal(item)"
          >
            <NuxtImg
              :src="item.largeArt"
              class="h-auto w-full duration-300 group-hover:scale-110"
            />
            <div
              class="absolute left-[50%] top-[50%] flex size-10 -translate-x-[50%] -translate-y-[50%] scale-50 items-center justify-center bg-brand-50 opacity-0 duration-300 group-hover:scale-100 group-hover:opacity-100"
            >
              <AnIcon class="size-3" />
            </div>
          </div>
          <div
            v-else
            class="flex h-full items-center bg-brand-50 px-5 py-3 duration-300 group-hover:bg-brand-500 group-hover:text-brand-50"
          >
            <p>{{ item.titleText }}</p>
          </div>
        </div>
      </div>
    </section>
    <Transition name="modal">
      <div
        v-if="!!modal"
        ref="modal-wrapper"
        class="fixed left-0 top-0 z-50 flex size-full justify-end bg-brand-500 bg-opacity-70 p-5"
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
            <div class="flex items-center justify-center bg-brand-50 p-5">
              <NuxtImg :src="modal.smallArt" />
            </div>
            <div class="flex items-center justify-center bg-brand-50 p-5">
              <NuxtImg :src="modal.wideArt" />
            </div>
            <div class="flex items-center justify-center bg-brand-50 p-5">
              <NuxtImg :src="modal.largeArt" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const { data: player } = await useFetch("/api/player");

const active = ref("cards");
const query = ref("");

const computedItems = computed(() => {
  return player.value[active.value].filter((item) =>
    item.displayName.toLowerCase().includes(query.value),
  );
});

const modal = ref(false);
const modalWrapper = useTemplateRef("modal-wrapper");
const toggleModal = (item) => (modal.value = !!modal.value ? false : item);
</script>

<style lang="postcss">
:where(.p-player) {
  @apply bg-brand-50;
}

.p-player__input {
  @apply w-full border-none bg-brand-50 p-5 outline-none;
}

.p-player__input:focus {
  @apply bg-brand-950;
}

.p-player__input::placeholder {
  @apply text-brand-950;
}

.p-player__input:focus::placeholder,
.p-player__input:focus {
  @apply text-brand-50;
}

:where(.p-player__modal-content) {
  @apply flex max-w-full flex-col bg-brand-50;
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
</style>
