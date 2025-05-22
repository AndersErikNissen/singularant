<template>
  <div class="p-agent">
    <section
      class="relative flex aspect-[16/9] max-h-[80vh] w-full items-center justify-center overflow-hidden border-b border-[currentColor]"
      :style="{
        background: `linear-gradient(180deg, transparent, #${agent.backgroundGradientColors[0]} 20%, #${agent.backgroundGradientColors[1]} 60%)`,
      }"
    >
      <div
        class="absolute left-0 top-0 size-full bg-contain bg-center bg-repeat"
        :style="{
          'background-image': `url('${agent.background}')`,
        }"
      />
      <NuxtImg
        :src="agent.fullPortrait"
        class="absolute left-[50%] top-[15%] h-full w-auto -translate-x-[50%]"
      />
      <div
        class="absolute bottom-0 h-[50%] w-full opacity-90"
        :style="{
          background: `linear-gradient(180deg, transparent, #${agent.backgroundGradientColors[3]})`,
        }"
      />
      <div
        class="absolute left-5 right-5 top-0 z-10 h-full border-l border-r border-[currentColor]"
      />
    </section>
    <section class="px-5">
      <div
        class="grid grid-cols-2 gap-[1px] border-l border-r border-[currentColor] bg-[currentColor]"
      >
        <div class="flex items-start gap-3 bg-brand-50 p-5">
          <NuxtImg
            :src="agent.displayIcon"
            class="p-agent__profile-img"
            :style="{
              backgroundColor: `#${agent.backgroundGradientColors[0]}`,
            }"
          />
          <div class="flex-auto">
            <p class="mb-1 text-lg">{{ agent.role.displayName }}</p>
            <h1 class="text-5xl font-medium">{{ agent.displayName }}</h1>
          </div>
        </div>
        <div class="bg-brand-50">
          <div class="relative overflow-hidden p-5">
            <Transition name="role-description">
              <div
                v-if="showRoleDescription"
                class="absolute left-0 top-0 z-[1] flex size-full items-center p-5 text-brand-50"
                :style="{
                  backgroundColor: `#${agent.backgroundGradientColors[1]}`,
                }"
              >
                <p class="">{{ agent.role.description }}</p>
              </div>
            </Transition>
            <p class="">{{ agent.description }}</p>
          </div>
          <div class="flex gap-[1px] bg-[currentColor] pt-[1px]">
            <AButton
              @click="showRoleDescription = false"
              class="c-a-button--inherit"
              :class="{
                active: !showRoleDescription,
              }"
            >
              Description
            </AButton>
            <AButton
              @click="showRoleDescription = true"
              class="c-a-button--inherit"
              :class="{
                active: showRoleDescription,
              }"
            >
              What is
              {{ agent.role.displayName.match("^[aieouAIEOU].*") ? "an" : "a" }}
              {{ agent.role.displayName }}?
            </AButton>
            <div class="flex-auto bg-brand-50" />
          </div>
        </div>
      </div>
    </section>
    <section class="">
      <div class="-mb-[1px] border-y border-[currentColor] py-5">
        <InfinityBanner
          ><p class="pr-16 text-4xl uppercase italic">
            Abilities
          </p></InfinityBanner
        >
      </div>
      <div class="px-5">
        <ContentSwapper :items="agent.abilities">
          <template #item="{ item, swap }">
            <div
              class="flex size-full gap-4 bg-[currentColor] p-5"
              :class="{
                'bg-brand-50': !swap,
              }"
            >
              <div
                class="mt-[6px] flex aspect-square size-14 items-center justify-center p-2"
                :style="{
                  backgroundColor: `#${agent.backgroundGradientColors[2]}`,
                }"
              >
                <NuxtImg
                  v-if="!!item.displayIcon"
                  :src="item.displayIcon"
                  class="size-full"
                />
                <span
                  v-else
                  class="text-[10px] font-bold uppercase text-brand-50"
                  >Passive</span
                >
              </div>
              <p
                class="text-lg"
                :class="{
                  'text-brand-50': swap,
                }"
              >
                {{ item.description }}
              </p>
            </div>
          </template>
        </ContentSwapper>
      </div>
    </section>
    <section class="px-5">
      <div class="border-l border-r border-[currentColor]">
        <div class="p-5">
          <h3 class="text-4xl uppercase">Other agents</h3>
        </div>
        <div class="grid grid-cols-3 gap-[1px] bg-[currentColor] py-[1px]">
          <AgentCard
            v-for="(agent, index) in adjacentAgents"
            :key="index"
            :agent="agent"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const showRoleDescription = ref(false);

const route = useRoute();
const { data: agents } = await useFetch("/api/agents/");
const agentIndex = agents.value.findIndex(
  (agent) => agent.uuid === route.params.agent,
);
const agent = agents.value[agentIndex];

const adjacentAgents = computed(() => {
  let adjacentAgents = [];
  for (let i = 1; i < 4; i++) {
    let adjacentIndex = agentIndex + i;

    if (adjacentIndex >= agents.value.length) {
      adjacentIndex = adjacentIndex - agents.value.length;
    }

    adjacentAgents.push(agents.value[adjacentIndex]);
  }

  return adjacentAgents;
});

useColors({
  body: "#" + agent.backgroundGradientColors[1],
  bg: "#" + agent.backgroundGradientColors[0],
  cta: "#" + agent.backgroundGradientColors[3],
});

const activeAbility = ref(agent.abilities[0].displayName);
const abilityInheritBackground = ref(false);

watch(activeAbility, () => {
  abilityInheritBackground.value = !abilityInheritBackground.value;
});

onBeforeRouteLeave((to, from, next) => {
  useColors();
  next();
});
</script>

<style lang="postcss">
:where(.p-agent) {
  @apply bg-brand-50;
}

.p-agent__profile-img {
  height: calc((1.125rem * 1.75) + 3rem * 0.75);
  @apply mt-[6px] aspect-square w-auto;
}

/**
 * ANIMATIONS
 */

.role-description-enter-active,
.role-description-leave-active,
.role-description-enter-active + p,
.role-description-leave-active + p {
  @apply transition-transform duration-500;
}

.role-description-enter-from,
.role-description-leave-to {
  @apply -translate-y-full;
}

.role-description-enter-to + p,
.role-description-leave-from + p {
  @apply translate-y-4;
}

.ability-description-enter-active,
.ability-description-leave-active {
  @apply absolute transition-all duration-700;
}

.ability-description-enter-from {
  @apply -translate-y-full;
}

.ability-description-enter-from,
.ability-description-enter-to {
  @apply z-10;
}

.ability-description-leave-from,
.ability-description-leave-to {
  @apply z-0;
}

.ability-description-leave-to {
  @apply absolute left-0 top-0 translate-y-4;
}
</style>
