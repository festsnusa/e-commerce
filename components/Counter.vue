<template>
  <div class="counter">
    <button @click="setNum('-')">-</button>
    <span>{{ count }}</span>
    <button @click="setNum('+')">+</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(["changeNum"])

const setNum = (operation: string): void => {
  emit("changeNum", operation)
}
</script>

<style scoped lang="scss">
.counter {
  background-color: hsl(223, 64%, 98%);
  flex: 30%;
  font-weight: 700;
  font-size: 1.5rem;
  border-radius: 10px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;

  @media (max-width: 1000px) {
    width: 100%;
  }
}

button {
  color: hsl(26, 100%, 55%);
  background-color: transparent;
  height: 100%;
  flex: 1;
}
</style>