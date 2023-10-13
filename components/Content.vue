<template>
  <main class="content">
    <div class="content__left">
      <CarouselMobile v-if="isMobile" />
      <CarouselDesktop v-else />
    </div>
    <div class="content__right">
      <p class="content__tag">Sneaker company</p>
      <h1 class="content__title">Fall Limited Edition Sneakers</h1>
      <p class="content__subtitle">These low-profile sneakers are your perfect casual wear companion. Featuring a
        durable rubber outer sole, they’ll withstand everything the weather can offer. </p>
      <Price />
      <div class="content__action">
        <Counter :count="count" @changeNum="changeNum" />
        <button class="content__cart" @click="changeAmount(count)">
          <img src="@/assets/images/icon-cart.svg" alt="cart">
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { filename } from 'pathe/utils'

const { changeAmount } = useCart()
const { isMobile, handleScreenResize } = useResolution()

onMounted(() => {
  handleScreenResize()
  window.addEventListener('resize', handleScreenResize)
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleScreenResize)
});

const count = ref(0)

const changeNum = (operation) => {
  if (operation === '-') {
    count.value--
  } else {
    count.value++
  }

  if (count.value < 0) {
    count.value = 0
  }
}

const arrImages = [
  'image-product-1',
  'image-product-2',
  'image-product-3',
  'image-product-4',
]

const globProduct = import.meta.glob('~/assets/images/product/*.jpg', { eager: true })
const globThumbnails = import.meta.glob('~/assets/images/thumbnails/*.jpg', { eager: true })

const imagesProduct = Object.fromEntries(
  Object.entries(globProduct).map(([key, value]) => [filename(key), value.default])
)

const imagesThumbnails = Object.fromEntries(
  Object.entries(globThumbnails).map(([key, value]) => [filename(key), value.default])
)

const getImage = (i) => {
  return imagesProduct[arrImages[i]];
}

const getThumbnail = (i) => {
  return imagesThumbnails[`${arrImages[i]}-thumbnail`];
}

onMounted(() => {
  handleScreenResize()
  window.addEventListener('resize', handleScreenResize)
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleScreenResize)
});
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  padding: 5rem 10rem 5rem 4rem;

  &__left {
    width: 50%;
  }

  &__tag {
    text-transform: uppercase;
    font-weight: 700;
    color: hsl(26, 100%, 55%);
  }

  &__title {
    font-weight: 700;
    font-size: 2.5rem;
  }

  &__subtitle {
    color: hsl(219, 9%, 45%);
    line-height: 1.75rem;
  }

  &__action {
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
  }

  &__cart {
    flex: 60%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: hsl(26, 100%, 55%);
    color: #fff;
    box-shadow: 3px 13px 11px -5px rgba(34, 60, 80, 0.2);
    border: none;
    border-radius: 10px;
    padding: 1rem;

    &:hover {
      transform: scale(1.05);
      transition: all 0.2s ease-in-out;
    }
  }

  @media (max-width: 1000px) {
    padding: 0;
    flex-direction: column;

    &__left {
      width: 100%;
    }

    &__right {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    &__title {
      line-height: 2.5rem;
    }

    &__action {
      flex-direction: column;
    }

    &__cart {
      width: 100%;
    }
  }

}
</style>