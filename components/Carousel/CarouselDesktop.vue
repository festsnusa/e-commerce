<template>
  <a-carousel arrows dots-class="slick-dots slick-thumb">
    <template #customPaging="props">
      <a>
        <img :src="getThumbnail(props.i)" />
      </a>
    </template>
    <div v-for="item in 4" :key="item">
      <img :src="getImage(item - 1)" />
    </div>
  </a-carousel>
</template>

<script setup>
import { filename } from 'pathe/utils'

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
</script>

<style scoped lang="scss">
:deep(.slick-dots) {
  position: relative;
  height: auto;
}

:deep(.slick-slide img) {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}

:deep(.slick-arrow) {
  display: none !important;
}

:deep(.slick-thumb) {
  bottom: 0px;
}

:deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
}

:deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  display: block;
}

:deep .slick-thumb li.slick-active img {
  border: 5px solid hsl(26, 100%, 55%);
  opacity: 0.5;
}

.slick-slide img {
  border-radius: 20px;
}

.slick-thumb li img {
  border-radius: 10px;
}
</style>