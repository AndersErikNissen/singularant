<template>
  <div class="p-agents">
    <div class="px-5 bg-brand-50 border-b border-brand-950">
      <div class="p-4 border-brand-950 border">
        <h1 class="text-4xl uppercase">Agents</h1>
      </div>
      <section class="flex gap-[1px] flex-wrap -mt-[1px] p-[1px] pb-0 bg-brand-950">
        <AgentCard
          v-for="(agent, index) in agents"
          :key="`agent-id-${index}`"
          :agent="agent"
          class="flex-[1_0_calc((100%_-_2px)_/_3)]"
        />
      </section>
    </div>
  </div>
</template>

<script setup>
const agents = await useAgents();
</script>

<style lang="postcss"></style>
