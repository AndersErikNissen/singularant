<template>
  <div class="p-bundles">
    <PageHeader :crumbs="['skins']"> Bundles </PageHeader>
    <section class="-mt-[1px] border-y border-brand-950 px-5">
      <div class="grid grid-cols-2 pl-[1px] pt-[1px] 2xl:grid-cols-3">
        <CardBundle
          v-for="(bundle, index) in bundles"
          :key="`p-bundles-bundle-${bundle.displayName}-${index}`"
          :bundle="bundle"
          class="-ml-[1px] -mt-[1px] bg-brand-950 p-[1px]"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
const { data: skins } = await useFetch("/api/skins");
const { bundles } = skins.value;
</script>

<style lang="postcss"></style>
