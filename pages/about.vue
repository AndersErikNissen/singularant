<template>
  <div class="p-about">
    <section class="w-full border-y border-brand-50 px-5">
      <div class="grid w-full grid-cols-3 gap-[1px] bg-brand-50 px-[1px]">
        <div class="flex flex-col bg-brand-500 pt-5">
          <h1 class="px-5 text-4xl uppercase">About SINGULARANT</h1>
          <div class="mt-5 grid grid-cols-1 gap-5 border-t border-brand-50 p-5">
            <p class="text-lg">
              The project started with finding the Valorant-API, and wanting to
              do some brand design. After working on the logo, the whole project
              got put on the back burner. After a year, I found a new spark for
              starting to develop the site, which also came because I needed a
              project to learn Nuxt.js.
            </p>
            <p class="text-lg">
              I hope you will enjoy your journey on the website, together with
              all the great visuals from Valorant.
            </p>
            <p class="text-lg italic">
              If it has any interest to learn more about the project, or the
              person behind SINGULARANT, then checkout the links below.
            </p>
          </div>
          <div class="grid border-t border-brand-50 text-brand-500">
            <AButton
              tag="a"
              class="w-full text-center"
              href="https://aenders.dk"
              target="_blank"
            >
              <span class="flex items-center justify-center gap-2">
                <svg
                  class="h-5 w-auto"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0ZM20.3877 13.3496C20.2593 13.081 19.8774 13.081 19.749 13.3496L18.4873 15.9893C17.9639 17.0841 17.0814 17.9674 15.9873 18.4912L13.3486 19.7539C13.0806 19.8825 13.0805 20.265 13.3486 20.3936L15.9873 21.6562C17.0814 22.18 17.9639 23.0633 18.4873 24.1582L19.749 26.7979C19.8774 27.0664 20.2593 27.0664 20.3877 26.7979L21.6504 24.1582C22.1738 23.0634 23.0554 22.18 24.1494 21.6562L26.7881 20.3936C27.0565 20.2651 27.0565 19.8824 26.7881 19.7539L24.1494 18.4912C23.0554 17.9674 22.1738 17.0841 21.6504 15.9893L20.3877 13.3496Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Aenders</span>
              </span>
            </AButton>
            <AButton
              tag="a"
              class="w-full"
              href="https://github.com/AndersErikNissen/singularant"
              target="_blank"
            >
              <span class="flex items-center justify-center gap-2">
                <svg
                  class="h-auto w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="98"
                  height="96"
                  viewBox="0 0 98 96"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    fill="currentColor"
                  />
                </svg>
                <span>GitHub</span>
              </span>
            </AButton>
          </div>
        </div>
        <div class="relative col-span-2 bg-brand-500">
          <NuxtImg
            class="absolute left-0 top-0 size-full object-cover"
            src="/media/Valorant_EP8_Teaser_Cypher_Reborn.jpg"
          />
        </div>
      </div>
    </section>
    <section class="py-5">
      <InfinityBanner
        ><p class="pr-16 text-4xl uppercase italic">
          A bunch of images
        </p></InfinityBanner
      >
    </section>
    <section class="border-y border-brand-50 px-5">
      <div class="grid grid-cols-2 gap-[1px] bg-brand-50 px-[1px]">
        <img src="/media/E8a1_Cineposter_4x5_IG.jpg" class="row-span-2" />
        <img
          src="/media/LNY_Sage-3_NightMarket.jpg"
          class="size-full object-cover"
        />
        <img
          src="/media/Valorant_CloseBeta_Final_design.jpg"
          class="size-full object-cover"
        />
        <img
          src="/media/Valorant_EP-8-Teaser_The-arrival.jpg"
          class="size-full object-cover"
        />
        <img
          src="/media/Valorant_Launch_KV_424_designpass_F.jpg"
          class="size-full object-cover"
        />
        <img
          src="/media/LNY_Sage-5_CallBack.jpg"
          class="size-full object-cover"
        />
        <img
          src="/media/Valorant_EP8_Teaser_Sova.png"
          class="size-full object-cover"
        />
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="postcss">
:where(.p-about) {
  @apply bg-brand-500 py-5 text-brand-50;
}
</style>
