<template>
  <ul class="c-the-navigation-menu">
    <li v-for="(item, index) in menuItems" :key="`c-the-navigation-menu-item-id-${index}`">
      <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const menuItems = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Agents",
    path: "/agents",
  },
];
</script>

<style lang="postcss"></style>
