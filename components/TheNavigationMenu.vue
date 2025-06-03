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
    label: "Player",
    path: "/player",
  },
  {
    label: "In-game",
    path: "/ingame",
  },
  {
    label: "Agents",
    path: "/agents",
  },
];
</script>

<style lang="postcss"></style>
