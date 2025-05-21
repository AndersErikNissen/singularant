<template>
  <div class="relative">
    <section
      class="relative z-10 grid min-h-screen grid-cols-1 justify-center align-middle text-brand-50"
    >
      <div class="flex flex-col items-center justify-center gap-4">
        <h1 class="text-7xl">Welcome to Singularant</h1>
        <p class="text-lg">
          Aa small fun project build & designed by
          <NuxtLink to="https://aenders.dk">AENDERS</NuxtLink>, and using the
          <NuxtLink to="https://dash.valorant-api.com/">Valorant-API</NuxtLink>
          for the data
        </p>
      </div>
    </section>
    <div class="absolute left-0 top-0 size-full overflow-hidden bg-brand-500">
      <img
        class="size-full object-cover"
        src="/media/FFA_Deathmatch_Desktop.jpg"
      />
    </div>
  </div>
</template>
