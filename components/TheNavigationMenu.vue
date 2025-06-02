<template>
  <div class="c-the-navigation-menu">
    <template
      v-for="(item, index) in menuItems"
      :key="`c-the-navigation-menu-item-id-${index}`"
    >
      <slot name="item" :item="item" :index="index" />
    </template>
  </div>
</template>

<script setup>
const menuItems = [
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Agents",
    path: "/agents",
  },
  {
    label: "Skins",
    path: "/skins",
  },
  {
    label: "Player",
    path: "/player",
  },
];
</script>

<style lang="postcss"></style>
