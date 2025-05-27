<template>
  <NuxtLink
    :to="'/agents/' + agent.uuid"
    class="c-card-agent group"
    :style="{
      backgroundImage: `linear-gradient(180deg, #${agent.backgroundGradientColors[0]}, #${agent.backgroundGradientColors[1]})`,
    }"
  >
    <NuxtImg
      class="absolute inset-0 block size-full scale-90 object-contain transition-all duration-300 group-hover:scale-110"
      :src="agent.background"
    />
    <NuxtImg
      class="absolute inset-0 block h-[120%] w-full object-cover transition-all duration-300 group-hover:scale-110"
      :src="agent.fullPortrait"
    />
    <div
      class="absolute z-10 size-full opacity-60 duration-300 group-hover:opacity-10"
      :style="{
        backgroundImage: `linear-gradient(180deg, transparent 20%, #${agent.backgroundGradientColors[3]})`,
      }"
    />
    <div class="absolute bottom-5 left-0 z-10 w-full overflow-hidden">
      <div
        class="flex translate-y-full items-center justify-between px-5 group-hover:translate-y-0 group-hover:duration-300"
      >
        <p class="text-3xl uppercase text-brand-50">
          {{ agent.displayName }}
        </p>
        <NuxtImg class="size-8" :src="agent.role.displayIcon" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  agent: Object,
});
</script>

<style lang="postcss">
:where(.c-card-agent) {
  @apply relative aspect-[0.7/1] overflow-hidden transition-all hover:duration-300;
}
</style>
