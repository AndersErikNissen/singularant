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
      <svg
        class="absolute -top-1/4 -left-1/4 size-[150%] animate-home-hero"
        width="1440"
        height="1024"
        viewBox="0 0 1440 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <rect width="1440" height="1024" fill="#1B0103" />
        <rect width="1440" height="1024" fill="url(#paint0_radial_113_3)" />
        <rect width="1440" height="1024" fill="url(#paint1_radial_113_3)" fill-opacity="0.8" />
        <rect width="1440" height="1024" fill="url(#paint2_radial_113_3)" />
        <rect width="1440" height="1024" fill="url(#paint3_radial_113_3)" />
        <defs>
          <radialGradient
            id="paint0_radial_113_3"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(763.5 909) rotate(96.138) scale(406.832 572.108)"
          >
            <stop stop-color="#4B040A" />
            <stop offset="1" stop-color="#4B040A" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_113_3"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(56.5 1076.5) rotate(-24.404) scale(533.682 750.49)"
          >
            <stop stop-color="#FF4655" />
            <stop offset="1" stop-color="#FF4655" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint2_radial_113_3"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1638 1343) rotate(170.277) scale(1139.87 884.872)"
          >
            <stop stop-color="#FFC5CA" stop-opacity="0.8" />
            <stop offset="1" stop-color="#FFC5CA" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint3_radial_113_3"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1306 886.5) rotate(163.992) scale(948.269 533.927)"
          >
            <stop stop-color="#FF6471" />
            <stop offset="1" stop-color="#FF6471" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "home",
});
</script>
