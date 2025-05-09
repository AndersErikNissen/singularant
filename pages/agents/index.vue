<template>
  <div class="p-agents">
    <div class="p-4 border-brand-950 border">
      <h1 class="text-4xl uppercase">Agents</h1>
    </div>
    <section class="grid grid-cols-3 gap-[1px] -mt-[1px] p-[1px] bg-brand-950">
      <NuxtLink
        :to="'agents/' + agent.uuid"
        v-for="(agent, index) in agents"
        :key="`agent-id-${index}`"
        class="aspect-[0.7/1] relative group overflow-hidden bg-gradient-to-b from-brand-500 to-brand-700 hover:rounded-3xl transition-all hover:duration-300"
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
          class="absolute size-full bg-gradient-to-b z-10 opacity-80 group-hover:opacity-10 duration-300 from-[transparent] to-brand-900"
        ></div>
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
    </section>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("agents", () => $fetch("https://valorant-api.com/v1/agents"));
const agents = data.value.data.filter((agent) => agent.isPlayableCharacter); // Fix: double Sova issue
</script>

<style lang="postcss">
:where(.p-agents) {
  @apply px-5;
}
</style>
