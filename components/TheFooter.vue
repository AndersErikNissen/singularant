<template>
  <footer class="c-the-footer">
    <div
      class="z-10 flex items-start justify-between gap-5 border-l border-r border-[currentColor] px-5 py-10"
    >
      <div class="max-w-[400px]">
        <p class="text-sm leading-5">
          A fun and personal project made and designed by
          <NuxtLink class="underline underline-offset-2" to="https://aenders.dk"
            >AENDERS</NuxtLink
          >
          using the non-official Valorant-API, and is not endorsed by Riot Games
          in any way.
        </p>
      </div>
    </div>
    <div class="border border-b-0 border-[currentColor]">
      <TheNavigationMenu class="flex">
        <template #item="{ item, index }">
          <div
            class="flex-auto border-[currentColor] text-center uppercase"
            :class="{
              'border-l': index !== 0,
            }"
          >
            <NuxtLink :to="item.path" class="menu-item group">
              <AnimateText class="relative" :text="item.label" />
            </NuxtLink>
          </div>
        </template>
      </TheNavigationMenu>
    </div>
    <div
      class="border-l border-r border-t border-[currentColor] p-5"
      ref="icon"
    >
      <svg
        :style="{
          color: 'var(--color-cta)',
        }"
        class="c-the-footer__icon block h-auto w-full"
        width="92"
        height="15"
        viewBox="0 0 92 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.14062 0C5.52083 0 6.52018 0.253906 7.13867 0.761719C7.75716 1.26953 8.08919 2.10612 8.13477 3.27148C8.1543 3.5319 8.15755 3.85417 8.14453 4.23828C8.13802 4.61589 8.125 4.97721 8.10547 5.32227H5.89844C5.95703 4.4694 5.96354 3.63932 5.91797 2.83203C5.86589 2.22005 5.27018 1.91406 4.13086 1.91406C3.51237 1.91406 3.06641 1.99219 2.79297 2.14844C2.51953 2.30469 2.36328 2.53255 2.32422 2.83203C2.27865 3.15755 2.25586 3.48633 2.25586 3.81836C2.26237 4.14388 2.28516 4.4694 2.32422 4.79492C2.35677 5.08138 2.46094 5.32878 2.63672 5.53711C2.8125 5.73893 3.17708 5.87565 3.73047 5.94727L5.22461 6.23047C6.01888 6.3737 6.6276 6.5918 7.05078 6.88477C7.47396 7.17773 7.77018 7.54232 7.93945 7.97852C8.11523 8.4082 8.21615 8.91602 8.24219 9.50195C8.26172 9.76237 8.26823 10.013 8.26172 10.2539C8.25521 10.4948 8.24219 10.7389 8.22266 10.9863C8.17057 12.1647 7.83203 13.0078 7.20703 13.5156C6.58854 14.0169 5.56966 14.2676 4.15039 14.2676C2.7181 14.2676 1.69271 14.0169 1.07422 13.5156C0.455729 13.0078 0.120443 12.1647 0.0683594 10.9863C0.016276 10.3092 0.0325521 9.61589 0.117188 8.90625H2.30469C2.26562 9.35547 2.24284 9.79492 2.23633 10.2246C2.23633 10.6543 2.25911 11.0547 2.30469 11.4258C2.33724 11.7253 2.49349 11.9564 2.77344 12.1191C3.0599 12.2754 3.51562 12.3535 4.14062 12.3535C4.75911 12.3535 5.20182 12.2754 5.46875 12.1191C5.74219 11.9564 5.89844 11.7253 5.9375 11.4258C5.98307 11.0872 6.0026 10.7682 5.99609 10.4688C5.98958 10.1628 5.97005 9.84049 5.9375 9.50195C5.90495 9.22201 5.80078 8.97461 5.625 8.75977C5.44922 8.54492 5.10091 8.40169 4.58008 8.33008L2.95898 7.98828C2.19076 7.83854 1.59831 7.6237 1.18164 7.34375C0.771484 7.0638 0.481771 6.71224 0.3125 6.28906C0.143229 5.86589 0.0455729 5.36784 0.0195312 4.79492C0.00651042 4.52148 0 4.26107 0 4.01367C0.00651042 3.76628 0.016276 3.51888 0.0292969 3.27148C0.0683594 2.10612 0.397135 1.26953 1.01562 0.761719C1.63411 0.253906 2.67578 0 4.14062 0Z"
          fill="currentColor"
          style="--custom-delay: 50ms"
        />

        <path
          d="M11.9434 14.1113H9.6582V0.166016H11.9434V14.1113Z"
          fill="currentColor"
          style="--custom-delay: 100ms"
        />

        <path
          d="M18.252 4.60938L19.6191 12.041H20.1562L19.7363 5.95703L19.5703 0.166016H21.7871V14.1113H18.1152L16.9141 9.46289L15.8008 2.22656H15.2441L15.625 8.7793L15.8105 14.1113H13.5938V0.166016H17.1191L18.252 4.60938Z"
          fill="currentColor"
          style="--custom-delay: 150ms"
        />
        <path
          d="M27.207 0C28.5547 0 29.5378 0.253906 30.1562 0.761719C30.7747 1.26953 31.1165 2.10612 31.1816 3.27148C31.2142 3.57096 31.2272 3.91276 31.2207 4.29688C31.2207 4.67448 31.2077 5.01628 31.1816 5.32227H28.8965C28.9225 4.9707 28.9355 4.55729 28.9355 4.08203C28.9421 3.60026 28.929 3.18359 28.8965 2.83203C28.8444 2.22005 28.2812 1.91406 27.207 1.91406C26.0807 1.91406 25.5013 2.22005 25.4688 2.83203C25.4232 3.70443 25.3939 4.63867 25.3809 5.63477C25.3678 6.63086 25.3678 7.62695 25.3809 8.62305C25.4004 9.61914 25.4297 10.5534 25.4688 11.4258C25.4818 11.7253 25.6283 11.9564 25.9082 12.1191C26.1882 12.2754 26.6243 12.3535 27.2168 12.3535C28.3691 12.3535 28.9811 12.0443 29.0527 11.4258C29.0658 11.1719 29.0723 10.8529 29.0723 10.4688C29.0723 10.0781 29.0658 9.75911 29.0527 9.51172H27.3047V7.4707H31.2891C31.3151 7.98503 31.3281 8.55469 31.3281 9.17969C31.3281 9.80469 31.3086 10.4069 31.2695 10.9863C31.224 12.1647 30.8854 13.0078 30.2539 13.5156C29.6224 14.0169 28.61 14.2676 27.2168 14.2676C25.7845 14.2676 24.7624 14.0169 24.1504 13.5156C23.5449 13.0078 23.2227 12.1647 23.1836 10.9863C23.151 10.2637 23.1283 9.44661 23.1152 8.53516C23.1087 7.6237 23.1087 6.71875 23.1152 5.82031C23.1283 4.91536 23.151 4.11133 23.1836 3.4082C23.2227 2.17122 23.5482 1.29557 24.1602 0.78125C24.7786 0.260417 25.7943 0 27.207 0Z"
          fill="currentColor"
          style="--custom-delay: 200ms"
        />
        <path
          d="M34.7754 0.166016C34.7298 1.94987 34.707 3.82812 34.707 5.80078C34.707 7.76693 34.7201 9.64518 34.7461 11.4355C34.7461 12.0475 35.3776 12.3535 36.6406 12.3535C37.8711 12.3535 38.4863 12.0475 38.4863 11.4355C38.5189 9.64518 38.5352 7.76693 38.5352 5.80078C38.5417 3.82812 38.5254 1.94987 38.4863 0.166016H40.7715C40.8496 3.77279 40.8496 7.38281 40.7715 10.9961C40.765 12.168 40.4395 13.0078 39.7949 13.5156C39.1504 14.0169 38.099 14.2676 36.6406 14.2676C35.1693 14.2676 34.1113 14.0169 33.4668 13.5156C32.8288 13.0078 32.5033 12.168 32.4902 10.9961C32.4121 7.38281 32.4121 3.77279 32.4902 0.166016H34.7754Z"
          fill="currentColor"
          style="--custom-delay: 250ms"
        />

        <path
          d="M44.3555 12.041H48.4863V14.1113H42.0703V0.166016H44.3555V12.041Z"
          fill="currentColor"
          style="--custom-delay: 300ms"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M57.5977 14.1113H55.2539L54.7559 10.9863H51.7676L51.2598 14.1113H48.9062L51.2695 0.166016H55.2344L57.5977 14.1113ZM52.4023 5.83984L51.9727 8.91602H54.541L54.1211 5.83984L53.6133 2.23633H52.9102L52.4023 5.83984Z"
          fill="currentColor"
          style="--custom-delay: 350ms"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M62.1973 0.166016C63.597 0.166016 64.6094 0.413411 65.2344 0.908203C65.8659 1.40299 66.2077 2.22005 66.2598 3.35938C66.3053 3.89974 66.3249 4.36198 66.3184 4.74609C66.3184 5.13021 66.2988 5.58268 66.2598 6.10352C66.2272 6.82617 66.0612 7.41536 65.7617 7.87109C65.4622 8.32031 65.0033 8.66211 64.3848 8.89648L66.6602 14.1113H64.2188L62.207 9.28711H60.7422V14.1113H58.457V0.166016H62.1973ZM60.7422 7.2168H62.168C62.7865 7.2168 63.2357 7.13216 63.5156 6.96289C63.7956 6.79362 63.9486 6.54948 63.9746 6.23047C64.0592 5.22786 64.0592 4.22852 63.9746 3.23242C63.9486 2.9069 63.7956 2.65951 63.5156 2.49023C63.2357 2.32096 62.7962 2.23633 62.1973 2.23633H60.7422V7.2168Z"
          fill="currentColor"
          style="--custom-delay: 400ms"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M75.1777 14.1113H73.791L73.1855 10.2441H69.9434L69.3379 14.1113H67.9512L70.1582 0.166016H72.9512L75.1777 14.1113ZM70.5098 5.95703L70.0703 8.99414H73.0586L72.6387 5.94727L71.9551 1.41602H71.1836L70.5098 5.95703Z"
          fill="currentColor"
          style="--custom-delay: 450ms"
        />
        <path
          d="M80.0312 4.58984L81.8379 12.8613H82.3848L82.1602 5.26367L82.0918 0.166016H83.4297V14.1113H80.8711L79.6406 9.17969L78.0879 1.40625H77.502L77.707 8.87695L77.7852 14.1113H76.457V0.166016H78.9473L80.0312 4.58984Z"
          fill="currentColor"
          style="--custom-delay: 500ms"
        />
        <path
          d="M91.0957 1.41602H88.4199V14.1113H87.0625V1.41602H84.3965V0.166016H91.0957V1.41602Z"
          fill="currentColor"
          style="--custom-delay: 550ms"
        />
      </svg>
    </div>
    <p class="border-l border-r border-t border-[currentColor] p-5 text-xs">
      Riot Games, Valorant, and all associated properties are trademarks or
      registered trademarks of Riot Games, Inc.
    </p>
  </footer>
</template>

<style lang="postcss">
:where(.c-the-footer) {
  @apply sticky bottom-0 -mt-[1px] grid grid-cols-1 border-t px-5;
  background-color: var(--color-bg, currentColor);

  & .menu-item {
    @apply relative flex size-full flex-auto items-center justify-center overflow-hidden p-2 text-xs sm:p-3 sm:text-base;

    &::before {
      content: "";
      @apply absolute left-0 top-0 block size-full -translate-y-full bg-[currentColor] duration-300;
    }

    &:hover {
      & span {
        color: var(--color-bg);
      }

      &::before {
        @apply translate-y-0;
      }
    }
  }
}

:where(.c-the-footer:not(.visible) .c-the-footer__icon > path) {
  @apply block -translate-y-full;
}

.visible .c-the-footer__icon > path {
  transition-delay: var(--custom-delay, 0ms);
  @apply transition-transform duration-1000;
}
</style>
