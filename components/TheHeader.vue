<template>
  <header class="the-header" :class="{ index: route.fullPath === '/' }">
    <div
      class="-my-[1px] flex w-full items-stretch justify-between border border-[currentColor]"
    >
      <NuxtLink class="border-r border-[currentColor] p-4" to="/">
        <BrandLogo />
      </NuxtLink>
      <TheNavigationMenu
        class="text-light flex items-stretch border-l border-[currentColor]"
      >
        <template #item="{ item, index }">
          <NuxtLink
            :to="item.path"
            class="menu-item group"
            :class="{ 'border-l': index !== 0 }"
            ><AnimateText :text="item.label"
          /></NuxtLink>
        </template>
      </TheNavigationMenu>
    </div>
  </header>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="postcss">
:where(.the-header) {
  @apply sticky left-0 top-0 z-10 -mb-[1px] w-full border-b border-t border-[currentColor] bg-brand-50 px-5;
  background-color: var(--color-bg, transparent);

  & .menu-item {
    @apply relative flex h-full items-center overflow-hidden border-[currentColor] px-7 py-2 uppercase;

    &::before {
      content: "";
      @apply absolute left-0 top-0 block size-full -translate-y-full bg-[currentColor] duration-300;
    }

    &:hover {
      & span {
        color: var(--color-bg);
      }

      &::before {
        @apply translate-y-0;
      }
    }
  }

  &.index {
    @apply fixed;

    & .menu-item {
      &:hover {
        & span {
          @apply text-brand-500;
        }
      }
    }
  }
}
</style>
