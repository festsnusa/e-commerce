import { useStorage } from '@vueuse/core'

const useCart = () => {
  const currentAmount = useStorage('currentAmount', 0);

  const changeAmount = (num: number): void => {
    currentAmount.value += num
    console.log(currentAmount.value)
  };

  return {
    currentAmount,
    changeAmount,
  };
};

export default useCart;
