<template>
  <div class="p-agents">
    <div class="border-b border-brand-950 bg-brand-50 px-5">
      <div class="border border-brand-950 p-4">
        <h1 class="text-4xl uppercase">Agents</h1>
      </div>
      <section
        class="-mt-[1px] flex flex-wrap gap-[1px] bg-brand-950 p-[1px] pb-0"
      >
        <CardAgent
          v-for="(agent, index) in agents"
          :key="`agent-id-${index}`"
          :agent="agent"
          class="flex-[1_0_calc((100%_-_1px)_/_2)] sm:flex-[1_0_calc((100%_-_2px)_/_3)] 2xl:flex-[1_0_calc((100%_-_3px)_/_4)]"
        />
      </section>
    </div>
  </div>
</template>

<script setup>
useColors();
const { data: agents } = await useFetch("/api/agents");
</script>

<style lang="postcss"></style>
