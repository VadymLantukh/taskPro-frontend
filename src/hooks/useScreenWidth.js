import { useMediaQuery } from 'react-responsive';

export const useScreenWidth = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const isMediumScreen = useMediaQuery({ query: '(max-width: 1279px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1280px)' });

  return { isSmallScreen, isMediumScreen, isLargeScreen };
};
