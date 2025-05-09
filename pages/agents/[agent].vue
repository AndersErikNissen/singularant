<template>
  <div
    class="p-agent"
    :style="{
      color: `#${agent.backgroundGradientColors[0]}`,
    }"
  >
    <NuxtLayout name="default">
      <div class="bg-brand-50">
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
                    :style="{ backgroundColor: `#${agent.backgroundGradientColors[3]}` }"
                  >
                    <p class="">{{ agent.role.description }}</p>
                  </div>
                </Transition>
                <p class="">{{ agent.description }}</p>
              </div>
              <div class="flex bg-brand-950 pt-[1px] gap-[1px]">
                <AButton
                  @click="showRoleDescription = false"
                  :class="{
                    active: !showRoleDescription,
                  }"
                >
                  Description
                </AButton>
                <AButton
                  @click="showRoleDescription = true"
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
          <div class="py-5 border-r border-l border-t border-brand-950">
            <InfinityBanner><p class="text-4xl uppercase pr-16 italic">Abilities</p></InfinityBanner>
          </div>
          <div class="p-[1px] flex gap-[1px] bg-brand-950">
            <div class="bg-brand-50">
              <div class="flex flex-col items-stretch gap-[1px] bg-brand-950">
                <AButton
                  v-for="(ability, index) in agent.abilities"
                  :key="`ability-btn-id-${index}`"
                  @click="activeAbility = ability.displayName"
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
                <div v-if="activeAbility === ability.displayName" class="flex gap-4 size-full p-5 bg-brand-50">
                  <div class="p-2 size-14 flex items-center justify-center aspect-square bg-brand-500 mt-[6px]">
                    <NuxtImg v-if="!!ability.displayIcon" :src="ability.displayIcon" class="size-full" />
                    <span v-else class="text-[10px] font-bold uppercase text-brand-50">Passive</span>
                  </div>
                  <p class="text-lg">{{ ability.description }}</p>
                </div>
              </Transition>
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

const route = useRoute();
const agent = await useAgent(route.params.agent);

const showRoleDescription = ref(false);

const activeAbility = ref(agent.abilities[0].displayName);
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

.role-description-enter-to + p,
.role-description-leave-from + p {
  @apply translate-y-4;
}
</style>
