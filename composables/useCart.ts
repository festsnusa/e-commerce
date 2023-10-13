import { useStorage } from '@vueuse/core'

const useCart = () => {
  const currentAmount = useStorage<number>('currentAmount', 0);
  const isCartVisible = useState<boolean>('isCartVisible', () => false)

  const changeAmount = (num: number): void => {
    currentAmount.value += num
    console.log(currentAmount.value)
  };

  const clearCart = (): void => {
    currentAmount.value = 0
  }

  const toggleCart = (): void => {
    isCartVisible.value = !isCartVisible.value
  }

  const closeCart = (): void => {
    isCartVisible.value = false
  }

  return {
    currentAmount,
    changeAmount,
    clearCart,
    isCartVisible,
    closeCart,
    toggleCart,
  };
};

export default useCart;
