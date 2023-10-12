<template>
  <header class="header">
    <div class="header__left">
      <img class="header__burger" src="@/assets/images/icon-menu.svg" alt="menu">
      <img class="header__logo" src="@/assets/images/logo.svg" alt="logo">
    </div>
    <div class="header__right">
      <img class="header__cart" src="@/assets/images/icon-cart.svg" alt="cart">
      <img class="header__profile" src="@/assets/images/image-avatar.png" alt="avatar">
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.header {
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__left,
  &__right {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  &__profile {
    max-width: 2.5rem;
  }
}
</style>