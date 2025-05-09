<template>
  <header class="the-header w-full border-t border-b px-5 border-[currentColor]">
    <div class="w-full flex justify-between items-stretch border -my-[1px] border-[currentColor]">
      <NuxtLink class="p-5 border-r border-[currentColor]" to="/">
        <BrandLogo />
      </NuxtLink>
      <TheNavigationMenu class="flex text-lg text-light items-stretch border-l border-[currentColor]" />
    </div>
  </header>
</template>

<script setup></script>

<style lang="postcss">
:where(.the-header .c-the-navigation-menu) {
  & li {
    @apply p-5 flex items-center;
  }

  & > li:not(:first-child) {
    @apply border-l border-[currentColor];
  }
}
</style>
