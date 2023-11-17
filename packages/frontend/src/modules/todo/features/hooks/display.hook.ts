import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { DISPLAY } from '../../../theme';
import { DisplayName } from '../../../common/types/media/display.type';

export const useDisplay = (): DisplayName => {
  const isTablet: boolean = useMediaQuery({ query: `(max-width: ${DISPLAY.TABLET}px)` });
  const isMobile: boolean = useMediaQuery({ query: `(max-width: ${DISPLAY.MOBILE}px)` });

  const determineDisplay = (): DisplayName => {
    if (isMobile) {
      return DisplayName.MOBILE;
    }
    return isTablet ? DisplayName.TABLET : DisplayName.DESKTOP;
  };

  const [display, setDisplay] = useState<DisplayName>(determineDisplay());

  useEffect(() => {
    setDisplay(determineDisplay());
  }, [isMobile, isTablet]);

  return display;
};
