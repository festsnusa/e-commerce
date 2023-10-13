<template>
  <div>
    <Menu v-if="isMenuVisible" />
    <Overlay v-if="isMenuVisible" />

    <Header />
    <Content />
  </div>
</template>

<script setup lang="ts">
const { isMenuVisible } = useMenu()
</script>

<style scoped lang="scss"></style>