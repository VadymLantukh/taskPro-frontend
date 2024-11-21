import { useMediaQuery } from 'react-responsive';

export const useScreenWidth = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const isMediumScreen = useMediaQuery({ query: '(max-width: 1439px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1440px)' });

  return { isSmallScreen, isMediumScreen, isLargeScreen };
};
