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

<script setup></script>

<style lang="postcss">
:where(.c-the-curtain) {
  @apply fixed left-0 top-0 z-50 hidden size-full items-center justify-center overflow-hidden bg-brand-200 p-5 text-brand-800;
}

.layout-enter-from .c-the-curtain,
.layout-enter-to .c-the-curtain,
.layout-leave-from .c-the-curtain,
.layout-leave-to .c-the-curtain,
.layout-enter-active .c-the-curtain,
.layout-leave-active .c-the-curtain,
.page-enter-from .c-the-curtain,
.page-enter-to .c-the-curtain,
.page-leave-from .c-the-curtain,
.page-leave-to .c-the-curtain,
.page-enter-active .c-the-curtain,
.page-leave-active .c-the-curtain {
  @apply flex;
}

.layout-enter-active .c-the-curtain,
.layout-leave-active .c-the-curtain,
.page-enter-active .c-the-curtain,
.page-leave-active .c-the-curtain {
  @apply transition-all duration-500;
}

body:has(.page-enter-active) .c-the-curtain {
}

.layout-enter-active .c-the-curtain > div,
.layout-leave-active .c-the-curtain > div,
.page-enter-active .c-the-curtain > div,
.page-leave-active .c-the-curtain > div {
  @apply transition-all duration-1000;
}

.layout-leave-from .c-the-curtain,
.page-leave-from .c-the-curtain {
  @apply translate-y-full;
}

.layout-leave-from .c-the-curtain > div,
.page-leave-from .c-the-curtain > div {
  @apply translate-y-full;
}

.layout-enter-to .c-the-curtain,
.page-enter-to .c-the-curtain {
  @apply -translate-y-full;
}
</style>
