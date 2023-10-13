<template>
  <div class="price">
    <div class="price__top">
      <span class="price__current">$125.00</span>
      <span class="price__discount">50%</span>
    </div>
    <div class="price__bottom">
      <span class="price__old">$250.00</span>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.price {

  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__top {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  &__current {
    font-size: 1.75rem;
    color: hsl(220, 13%, 13%);
  }

  &__discount {
    color: hsl(26, 100%, 55%);
    background-color: hsl(25, 100%, 94%);
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
  }

  &__old {
    text-decoration: line-through;
    color: hsl(220, 14%, 75%);
  }

  @media (max-width: 1000px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>