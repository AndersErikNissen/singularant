<template>
  <header
    class="the-header w-full border-b border-t border-[currentColor] px-5"
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

<script setup></script>

<style lang="postcss">
:where(.the-header .c-the-navigation-menu) {
  & li {
    @apply flex items-center p-5;
  }

  & > li:not(:first-child) {
    @apply border-l border-[currentColor];
  }
}
</style>
