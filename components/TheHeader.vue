<template>
  <header
    class="the-header"
    :class="{ index: route.fullPath === '/' }"
    ref="header"
  >
    <div
      class="-my-[1px] flex w-full flex-col items-center justify-between border border-[currentColor] sm:flex-row sm:items-stretch"
    >
      <NuxtLink class="border-[currentColor] p-4 sm:border-r" to="/">
        <BrandLogo />
      </NuxtLink>
      <TheNavigationMenu
        class="text-light flex w-full items-stretch border-t border-[currentColor] sm:w-auto sm:border-l sm:border-t-0"
      >
        <template #item="{ item, index }">
          <NuxtLink
            :to="item.path"
            class="menu-item group"
            :class="{ 'border-l': index > 0 }"
            ><AnimateText :text="item.label"
          /></NuxtLink>
        </template>
      </TheNavigationMenu>
    </div>
  </header>
</template>

<script setup>
const route = useRoute();

const header = ref();
let hideThreshold;
let ticking = false;
let lastScrollY = 0;

function handleHeader() {
  if (!hideThreshold) {
    hideThreshold = window.innerHeight / 3;
  }

  let scrollY = window.scrollY;

  if (scrollY > lastScrollY && scrollY > hideThreshold) {
    header.value.classList.add("hide-header");
  } else {
    if (header.value.classList.contains("hide-header")) {
      header.value.classList.remove("hide-header");
    }
  }

  lastScrollY = scrollY;
}

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleHeader();
        ticking = false;
      });

      ticking = true;
    }
  });

  window.addEventListener("resize", () => {
    if (hideThreshold) hideThreshold = undefined;
  });
});
</script>

<style lang="postcss">
:where(.the-header) {
  @apply sticky left-0 top-0 z-10 -mb-[1px] w-full border-b border-t border-[currentColor] bg-brand-50 px-5 duration-300;
  background-color: var(--color-bg, transparent);

  &.hide-header {
    @apply -translate-y-full;
  }

  & .menu-item {
    @apply relative flex h-full flex-grow items-center justify-center overflow-hidden border-[currentColor] p-2 text-xs uppercase sm:flex-grow-0 sm:px-7 sm:py-2 sm:text-base;

    &::before {
      content: "";
      @apply absolute left-0 top-0 block size-full -translate-y-full bg-[currentColor] duration-300;
    }

    &.router-link-active,
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
