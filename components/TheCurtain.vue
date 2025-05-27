<template>
  <div class="c-the-curtain">
    <BrandLogo />
    <div
      class="absolute left-0 top-0 flex size-full items-center justify-center bg-brand-600 text-brand-50"
    >
      <BrandLogo />
    </div>
  </div>
</template>

<style lang="postcss">
:where(.c-the-curtain) {
  @apply fixed left-0 top-0 z-50 hidden size-full items-center justify-center overflow-hidden bg-brand-200 p-5 text-brand-800;
}

/* Simple solution: */
body:has(.page-leave-from) #app > *:not(.c-the-curtain),
body:has(.page-leave-to) #app > *:not(.c-the-curtain) {
  @apply hidden;
}

body:has(.page-enter-from) .c-the-curtain,
body:has(.page-enter-to) .c-the-curtain,
body:has(.page-leave-from) .c-the-curtain,
body:has(.page-leave-to) .c-the-curtain,
body:has(.page-enter-active) .c-the-curtain,
body:has(.page-leave-active) .c-the-curtain {
  @apply flex;
}

body:has(.page-enter-active) .c-the-curtain,
body:has(.page-leave-active) .c-the-curtain {
  @apply transition-all duration-500;
}

body:has(.page-enter-active) .c-the-curtain > div,
body:has(.page-leave-active) .c-the-curtain > div {
  @apply transition-all duration-1000;
}

body:has(.page-leave-from) .c-the-curtain {
  @apply translate-y-full;
}

body:has(.page-leave-from) .c-the-curtain > div {
  @apply translate-y-full;
}

body:has(.page-enter-to) .c-the-curtain {
  @apply -translate-y-full;
}
</style>
