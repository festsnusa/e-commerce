const useResolution = () => {
  const isMobile = useState('isMobile', () => false);

  const handleScreenResize = (): void => {
    isMobile.value = (window.matchMedia('(min-width: 1000px)').matches) ? false : true
  }

  return {
    isMobile,
    handleScreenResize,
  };
};

export default useResolution;
