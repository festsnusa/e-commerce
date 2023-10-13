<template>
  <header class="header">
    <div class="header__content">
      <div class="header__left">
        <img v-show="isMobile" class="header__burger" src="@/assets/images/icon-menu.svg" alt="menu" @click="toggleMenu">
        <img class="header__logo" src="@/assets/images/logo.svg" alt="logo">
        <Navigation v-if="!isMobile" />
      </div>
      <div class="header__right">
        <div class="header__cart" @click="toggleCart">
          <img src="@/assets/images/icon-cart.svg" alt="cart">
          <span :key="currentAmount">{{ currentAmount }}</span>
        </div>
        <img class="header__profile" src="@/assets/images/image-avatar.png" alt="avatar">
      </div>
    </div>
    <hr v-show="!isMobile" />
    <Cart v-show="isCartVisible" />
  </header>
</template>

<script setup lang="ts">
const { isMobile, handleScreenResize } = useResolution()
const { currentAmount, isCartVisible, toggleCart } = useCart()
const { toggleMenu } = useMenu()

const isMenuVisible = ref<boolean>(false)

onMounted(() => {
  handleScreenResize()
  window.addEventListener('resize', handleScreenResize)
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleScreenResize)
});
</script>

<style scoped lang="scss">
hr {
  border-bottom: 0.01px solid hsl(223, 64%, 98%);
  padding: 0 8px;
}

.header {
  padding: 0 8rem;
  position: relative;

  &__burger {
    cursor: pointer;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }


  &__left,
  &__right {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  &__profile {
    max-width: 2.5rem;
  }

  &__cart {

    position: relative;
    cursor: pointer;

    span {
      position: absolute;
      border-radius: 50%;
      padding: 0.25rem 0.5rem;
      background-color: hsl(219, 9%, 45%);
      color: #fff;
      font-size: 0.75rem;
      top: -1rem;
      right: -1rem;
    }
  }

  @media (max-width: 1000px) {
    padding: 0rem;
  }
}
</style>