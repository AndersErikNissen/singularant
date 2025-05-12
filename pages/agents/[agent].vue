<template>
  <div
    class="p-agent"
    :style="{
      color: `#${agent.backgroundGradientColors[1]}`,
    }"
  >
    <NuxtLayout
      name="default"
      :colors="[
        '#' + agent.backgroundGradientColors[3],
        '#' + agent.backgroundGradientColors[0],
        '#' + agent.backgroundGradientColors[1],
      ]"
    >
      <div class="bg-brand-50" :style="{ color: '#' + agent.backgroundGradientColors[1] }">
        <section
          class="relative flex items-center justify-center aspect-[16/9] max-h-[80vh] w-full overflow-hidden border-b border-[currentColor]"
          :style="{
            background: `linear-gradient(180deg, transparent, #${agent.backgroundGradientColors[0]} 20%, #${agent.backgroundGradientColors[1]} 60%)`,
          }"
        >
          <div
            class="bg-repeat bg-contain bg-center absolute size-full top-0 left-0"
            :style="{
              'background-image': `url('${agent.background}')`,
            }"
          />
          <NuxtImg :src="agent.fullPortrait" class="h-full w-auto absolute top-[15%] left-[50%] -translate-x-[50%]" />
          <div
            class="absolute h-[50%] w-full bottom-0 opacity-90"
            :style="{
              background: `linear-gradient(180deg, transparent, #${agent.backgroundGradientColors[3]})`,
            }"
          />
          <div class="absolute top-0 left-5 right-5 h-full border-l border-r border-[currentColor] z-10" />
        </section>
        <section class="px-5">
          <div class="grid grid-cols-2 gap-[1px] bg-[currentColor] border-r border-l border-[currentColor]">
            <div class="bg-brand-50 p-5 flex items-start gap-3">
              <NuxtImg
                :src="agent.displayIcon"
                class="p-agent__profile-img"
                :style="{
                  backgroundColor: `#${agent.backgroundGradientColors[0]}`,
                }"
              />
              <div class="flex-auto">
                <p class="text-lg mb-1">{{ agent.role.displayName }}</p>
                <h1 class="text-5xl font-medium">{{ agent.displayName }}</h1>
              </div>
            </div>
            <div class="bg-brand-50">
              <div class="overflow-hidden relative p-5">
                <Transition name="role-description">
                  <div
                    v-if="showRoleDescription"
                    class="absolute top-0 left-0 size-full p-5 flex items-center text-brand-50 z-[1]"
                    :style="{ backgroundColor: `#${agent.backgroundGradientColors[1]}` }"
                  >
                    <p class="">{{ agent.role.description }}</p>
                  </div>
                </Transition>
                <p class="">{{ agent.description }}</p>
              </div>
              <div class="flex bg-[currentColor] pt-[1px] gap-[1px]">
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
                  What is {{ agent.role.displayName.match("^[aieouAIEOU].*") ? "an" : "a" }}
                  {{ agent.role.displayName }}?
                </AButton>
                <div class="flex-auto bg-brand-50" />
              </div>
            </div>
          </div>
        </section>
        <section class="px-5">
          <div class="py-5 border-r border-l border-t border-[currentColor]">
            <InfinityBanner><p class="text-4xl uppercase pr-16 italic">Abilities</p></InfinityBanner>
          </div>
          <div class="p-[1px] flex gap-[1px] bg-[currentColor]">
            <div class="bg-brand-50">
              <div class="flex flex-col items-stretch gap-[1px] bg-[currentColor]">
                <AButton
                  v-for="(ability, index) in agent.abilities"
                  :key="`ability-btn-id-${index}`"
                  @click="activeAbility = ability.displayName"
                  class="c-a-button--inherit"
                  :class="{
                    active: activeAbility === ability.displayName,
                  }"
                >
                  {{ ability.displayName }}
                </AButton>
              </div>
            </div>
            <div class="flex-auto relative overflow-hidden w-full">
              <Transition
                v-for="(ability, index) in agent.abilities"
                :key="`ability-description-id-${index}`"
                name="ability-description"
              >
                <div
                  v-if="activeAbility === ability.displayName"
                  class="flex gap-4 size-full p-5 bg-[currentColor]"
                  :class="{
                    'bg-brand-50': !abilityInheritBackground,
                  }"
                >
                  <div
                    class="p-2 size-14 flex items-center justify-center aspect-square mt-[6px]"
                    :style="{
                      backgroundColor: `#${agent.backgroundGradientColors[2]}`,
                    }"
                  >
                    <NuxtImg v-if="!!ability.displayIcon" :src="ability.displayIcon" class="size-full" />
                    <span v-else class="text-[10px] font-bold uppercase text-brand-50">Passive</span>
                  </div>
                  <p
                    class="text-lg"
                    :class="{
                      'text-brand-50': abilityInheritBackground,
                    }"
                  >
                    {{ ability.description }}
                  </p>
                </div>
              </Transition>
            </div>
          </div>
        </section>
        <section class="px-5">
          <div class="border-r border-l border-[currentColor]">
            <div class="p-5">
              <h3 class="text-4xl uppercase">Other agents</h3>
            </div>
            <div class="grid grid-cols-3 gap-[1px] bg-[currentColor]">
              <AgentCard v-for="(agent, index) in otherAgents" :key="index" :agent="agent" />
            </div>
          </div>
        </section>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});

const showRoleDescription = ref(false);

const route = useRoute();
const agents = await useAgents();
const agent = agents.value.find((agent) => agent.uuid === route.params.agent);

// MANGEL - otherAgents skal opdateres på hver load
// MANGEL - otherAgents skal opdateres på hver load
// MANGEL - otherAgents skal opdateres på hver load
// MANGEL - otherAgents skal opdateres på hver load
// MANGEL - otherAgents skal opdateres på hver load
// MANGEL - otherAgents skal opdateres på hver load
// MANGEL - otherAgents skal opdateres på hver load

const otherAgents = useState("otherAgents", () => {
  let pickedAgents = [];
  let usedIndexes = [agents.value.findIndex((obj) => obj.uuid === agent.uuid)];

  while (pickedAgents.length < 3) {
    const randomIndex = Math.floor(Math.random() * (agents.value.length - 1));

    if (!usedIndexes.includes(randomIndex)) {
      pickedAgents.push(agents.value[randomIndex]);
      usedIndexes.push(randomIndex);
    }
  }

  return pickedAgents;
});

const activeAbility = ref(agent.abilities[0].displayName);
const abilityInheritBackground = ref(false);
watch(activeAbility, () => {
  abilityInheritBackground.value = !abilityInheritBackground.value;
});
</script>

<style lang="postcss">
.p-agent__profile-img {
  height: calc((1.125rem * 1.75) + 3rem * 0.75);
  @apply aspect-square mt-[6px] w-auto;
}

/**
 * ANIMATIONS
 */

.role-description-enter-active,
.role-description-leave-active,
.role-description-enter-active + p,
.role-description-leave-active + p {
  @apply duration-500 transition-transform;
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
  @apply duration-700 transition-all absolute;
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
  @apply translate-y-4 absolute top-0 left-0;
}
</style>
