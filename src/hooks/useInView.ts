import { useEffect, useRef, useState } from "react";

type Options = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export function useInView<T extends HTMLElement>({
  root = null,
  rootMargin = "0px",
  threshold = 0.1,
  once = true,
}: Options = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.unobserve(entry.target);
        } else if (!once) {
          setInView(false);
        }
      },
      { root, rootMargin, threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [root, rootMargin, threshold, once]);

  return { ref, inView };
}
