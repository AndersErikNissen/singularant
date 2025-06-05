<template>
  <div class="relative">
    <section
      class="relative z-10 grid min-h-screen grid-cols-1 justify-center align-middle text-brand-50"
    >
      <div class="flex flex-col items-center justify-center gap-4">
        <h1 class="text-2xl sm:text-7xl">Welcome to Singularant</h1>
        <p class="text-center sm:text-xl">
          A small fun project build & designed by
          <NuxtLink class="underline underline-offset-2" to="https://aenders.dk"
            >AENDERS</NuxtLink
          >, and using the
          <NuxtLink
            class="underline underline-offset-2"
            to="https://dash.valorant-api.com/"
            >Valorant-API</NuxtLink
          >
          for all the data
        </p>
      </div>
    </section>
    <div class="absolute left-0 top-0 size-full overflow-hidden bg-brand-500">
      <img
        class="size-full object-cover"
        src="/media/Valorant_EP-8-Teaser_The-arrival.jpg"
      />
    </div>
  </div>
</template>

<script setup>
useColors({ header: { color: 50, bg: "transparent" } });
</script>
