<template>
  <ul class="navigation">
    <li v-for="(item, i) in arrItems" :key="`navigation__${i}`">
      <NuxtLink class="navigation__link" :to="`/${item.link}/`">
        {{ item.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
const arrItems = [
  { "title": "collections", "link": "collections" },
  { "title": "men", "link": "men" },
  { "title": "women", "link": "women" },
  { "title": "about", "link": "about" },
  { "title": "contact", "link": "contact" },
]
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: space-around;
  gap: 2rem;

  &__link {
    text-transform: capitalize;
    color: hsl(219, 9%, 45%);
  }
}
</style>