import { useState, useEffect, useCallback } from "react";

export function useWindowScroll() {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  const handleScroll = useCallback(() => {
    setScroll({ x: window.scrollX, y: window.scrollY });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollTo = useCallback(({ x = 0, y = 0 }) => {
    window.scrollTo({ top: y, left: x, behavior: "smooth" });
  }, []);

  return [scroll, scrollTo];
}     