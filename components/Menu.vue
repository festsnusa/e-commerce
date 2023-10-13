<template>
  <div class="menu" v-click-outside="toggleMenu">
    <img class="menu__close" src="@/assets/images/icon-close.svg" alt="close" @click="toggleMenu">
    <ul>
      <li v-for="(item, i) in arrItems" :key="`navigation__${i}`">
        <NuxtLink :to="item.link">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { toggleMenu } = useMenu()
const { arrItems } = useNavigation()
</script>

<style scoped lang="scss">
.menu {
  position: fixed;
  background-color: #fff;
  width: 60%;
  height: 100vh;
  z-index: 100;

  padding: 2rem;

  &__close {
    cursor: pointer;
  }
}

ul {
  padding-top: 3rem;
  text-transform: capitalize;

}

a {
  color: #000;
  font-weight: 700;
  line-height: 3rem;
}
</style>