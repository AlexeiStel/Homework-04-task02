import { useState, useRef, useEffect } from 'react';

export function useHover() {
  const [hovered, setHovered] = useState(false); 
  const ref = useRef(null);

  useEffect(() => {
    const onMouseEnter = () => setHovered(true);
    const onMouseLeave = () => setHovered(false);

    const elem = ref.current;
    if (elem) {
      elem.addEventListener('mouseenter', onMouseEnter);
      elem.addEventListener('mouseleave', onMouseLeave);
    }
    
    return () => {
      if (elem) {
        elem.removeEventListener('mouseenter', onMouseEnter);
        elem.removeEventListener('mouseleave', onMouseLeave);
    s  }
    }
  }, [])
}
