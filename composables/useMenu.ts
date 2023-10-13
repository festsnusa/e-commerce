const useMenu = () => {
  const isMenuVisible = useState('isMenuVisible', () => false);

  const toggleMenu = (): void => {
    isMenuVisible.value = !isMenuVisible.value
  }

  return {
    isMenuVisible,
    toggleMenu,
  };
};

export default useMenu;
