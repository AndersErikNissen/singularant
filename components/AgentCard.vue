<template>
  <NuxtLink
    :to="'/agents/' + agent.uuid"
    class="c-agent-card group"
    :style="{
      backgroundImage: `linear-gradient(180deg, #${agent.backgroundGradientColors[0]}, #${agent.backgroundGradientColors[1]})`,
    }"
  >
    <NuxtImg
      class="group-hover:scale-110 scale-90 transition-all duration-300 block absolute inset-0 size-full object-contain"
      :src="agent.background"
    />
    <NuxtImg
      class="group-hover:scale-110 transition-all duration-300 block absolute inset-0 w-full h-[120%] object-cover"
      :src="agent.fullPortrait"
    />
    <div
      class="absolute size-full z-10 opacity-60 group-hover:opacity-10 duration-300"
      :style="{
        backgroundImage: `linear-gradient(180deg, transparent 20%, #${agent.backgroundGradientColors[3]})`,
      }"
    />
    <div class="overflow-hidden absolute bottom-5 left-0 w-full z-10">
      <div
        class="flex justify-between items-center translate-y-full group-hover:translate-y-0 group-hover:duration-300 px-5"
      >
        <p class="text-brand-50 text-3xl uppercase">
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
:where(.c-agent-card) {
  @apply aspect-[0.7/1] relative overflow-hidden transition-all hover:duration-300;
}
</style>
