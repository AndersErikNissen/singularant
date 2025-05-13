<template>
  <div class="relative">
    <section class="relative z-10 text-brand-50 min-h-screen grid grid-cols-1 align-middle justify-center">
      <div class="flex flex-col items-center justify-center gap-4">
        <h1 class="text-7xl">Welcome to Singularant</h1>
        <p class="text-lg">
          Aa small fun project build & designed by <NuxtLink to="https://aenders.dk">AENDERS</NuxtLink>, and using the
          <NuxtLink to="https://dash.valorant-api.com/">Valorant-API</NuxtLink> for the data
        </p>
      </div>
    </section>
    <div class="absolute top-0 left-0 size-full overflow-hidden">
      <NuxtImg class="object-cover size-full" src="/media/FFA_Deathmatch_Desktop.jpg" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "home",
});
</script>
