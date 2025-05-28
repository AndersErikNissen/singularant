<template>
  <header
    class="the-header"
    :class="{ fixed: route.fullPath === '/' }"
    :style="{
      backgroundColor: colors.header.bg,
    }"
  >
    <div
      class="-my-[1px] flex w-full items-stretch justify-between border border-[currentColor]"
    >
      <NuxtLink class="border-r border-[currentColor] p-5" to="/">
        <BrandLogo />
      </NuxtLink>
      <TheNavigationMenu
        class="text-light flex items-stretch border-l border-[currentColor] text-lg"
      />
    </div>
  </header>
</template>

<script setup>
const route = useRoute();
const colors = useColors();
</script>

<style lang="postcss">
:where(.the-header) {
  @apply sticky left-0 top-0 z-10 -mb-[1px] w-full border-b border-t border-[currentColor] bg-brand-50 px-5;

  & .c-the-navigation-menu {
    & li {
      @apply flex items-center p-5;
    }

    & > li:not(:first-child) {
      @apply border-l border-[currentColor];
    }
  }
}
</style>
