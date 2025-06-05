<template>
  <div class="p-bundles">
    <PageHeader :crumbs="['in-game']"> Bundles </PageHeader>
    <div class="-mt-[1px] px-5">
      <SearchField @change:query="query = $event" />
    </div>
    <section class="-mt-[1px] border-b border-brand-950 px-5">
      <div
        class="grid grid-cols-1 pl-[1px] pt-[1px] sm:grid-cols-2 2xl:grid-cols-3"
      >
        <CardBundle
          v-for="(bundle, index) in computedBundles"
          :key="`p-bundles-bundle-${bundle.displayName}-${index}`"
          :bundle="bundle"
          class="-ml-[1px] -mt-[1px] bg-brand-950 p-[1px]"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
useColors();

const { data: ingame } = await useFetch("/api/ingame");
const { bundles } = ingame.value;

const query = ref("");

const computedBundles = computed(() => {
  return bundles.filter((bundle) =>
    bundle.displayName.toLowerCase().includes(query.value),
  );
});
</script>

<style lang="postcss"></style>
