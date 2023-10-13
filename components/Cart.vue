<template>
  <div class="cart">
    <p class="cart__title">Cart</p>
    <hr>
    <div v-if="currentAmount > 0" class="cart__content">
      <img class="cart__thumbnail" src="@/assets/images/thumbnails/image-product-1-thumbnail.jpg" alt="thumbnail">
      <div class="cart__description">
        <p>Fall Limited Edition Sneakers</p>
        <p>
          <span> $125.00 x {{ currentAmount }}</span>
          <span class="cart__total">{{ (currentAmount * 125).toFixed(2) }}</span>
        </p>
      </div>
      <img class="cart__delete" src="@/assets/images/icon-delete.svg" alt="delete" @click="clearCart">
    </div>
    <p v-else class="cart__empty">Your cart is empty.</p>
    <NuxtLink to="/checkout/" v-if="currentAmount > 0">
      <button class="cart__checkout">Checkout</button>
    </NuxtLink>

  </div>
</template>

<script setup lang="ts">
const { currentAmount, clearCart } = useCart()
</script>

<style scoped lang="scss">
.cart {
  position: absolute;
  top: 6rem;
  right: 0;
  box-shadow: -3px 7px 8px 0px rgba(34, 60, 80, 0.2);
  padding: 1rem;
  margin: 1rem;
  background-color: #fff;
  border-radius: 20px;
  z-index: 1;
  width: 80%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__title {
    font-weight: 700;
    font-size: 1.25rem;
  }

  &__thumbnail {
    max-width: 4rem;
    border-radius: 10px;
    flex: 0 0 20%;
  }

  &__description {
    flex: 0 0 60%;
  }

  &__delete {
    cursor: pointer;
    padding: 1rem;
    flex: 0 0 20%;
    max-width: 3rem;
  }

  &__content {
    display: flex;
    // width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }


  &__checkout {
    background-color: hsl(26, 100%, 55%);
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 1rem;
    width: 100%;
  }

  &__total {
    font-weight: 700;
    margin-left: 0.5rem;
  }

  &__empty {
    color: hsl(219, 9%, 45%);
    font-weight: 700;
  }
}
</style>