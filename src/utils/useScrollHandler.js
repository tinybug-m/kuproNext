import { useEffect, useRef } from 'react';

const useScrollHandler = (changeComponent) => {
  // one wrong movement going to break this code be carefull and be kind with my lover
  const isThrottling = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    // checkIsThisClean -- condination
    const handleScroll = (event) => {
      if (isThrottling.current) return;

      // checkIsThisClean -- name name name
      const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2;
      const isAtTop = window.scrollY === 0;
      const direction = event.deltaY > 0 ? 'next' : 'previous';

      if ((direction === 'next' && isAtBottom) || (direction === 'previous' && isAtTop)) {
        changeComponent(direction);
        isThrottling.current = true;

        setTimeout(() => {
          isThrottling.current = false;
        }, 1000);
      }
    };

    const handleTouchStart = (event) => {
      touchStartY.current = event.touches[0].clientY;
    };

    // checkIsThisClean -- condination
    const handleTouchEnd = (event) => {
      if (isThrottling.current) return;

      const touchEndY = event.changedTouches[0].clientY;
      const direction = touchStartY.current - touchEndY > 50
        ? 'next'
        : (touchEndY - touchStartY.current > 50 ? 'previous' : null);

      if (direction) {
        const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2;
        const isAtTop = window.scrollY === 0;

        if ((direction === 'next' && isAtBottom) || (direction === 'previous' && isAtTop)) {
          changeComponent(direction);
          isThrottling.current = true;

          setTimeout(() => {
            isThrottling.current = false;
          }, 1000);
        }
      }
    };
    // checkIsThisClean - this should be one line
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      // checkIsThisClean - this should be one line
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [changeComponent]);

  return null;
};

export default useScrollHandler;
