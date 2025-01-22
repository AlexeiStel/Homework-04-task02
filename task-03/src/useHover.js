import { useState, useRef, useCallback } from 'react';

export function useHover() {
  const [hovered, setHovered] = useState(false); 
  const ref = useRef(null);

  const onMouseEnter = useCallback(() => setHovered(true), []);

  const onMouseLeave = useCallback(() => setHovered(false), []);

  const setRef = useCallback(
    (elem) => {
      if (elem) {
        elem.addEventListener('mouseenter', onMouseEnter);
        elem.addEventListener('mouseleave', onMouseLeave);
      }
      ref.current = elem;
    },
    [onMouseEnter, onMouseLeave]
  );

  return { hovered, ref: setRef };  
}
