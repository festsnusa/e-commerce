<template>
  <a-carousel arrows>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <div v-for="item in 4" :key="item">
      <img :src="getImage(item - 1)" />
    </div>
  </a-carousel>
</template>

<script setup>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';

import { filename } from 'pathe/utils'

const arrImages = [
  'image-product-1',
  'image-product-2',
  'image-product-3',
  'image-product-4',
]

const globProduct = import.meta.glob('~/assets/images/product/*.jpg', { eager: true })

const imagesProduct = Object.fromEntries(
  Object.entries(globProduct).map(([key, value]) => [filename(key), value.default])
)

const getImage = (i) => {
  return imagesProduct[arrImages[i]];
}
</script>

<style scoped lang="scss">
:deep(.slick-slide) {
  text-align: center;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}

:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}

:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}

:where(.css-dev-only-do-not-override-kqecok).ant-carousel .slick-slide img {
  display: block;
  width: 100%;
}
</style>