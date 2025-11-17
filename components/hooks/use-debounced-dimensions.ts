import { useState, useEffect, RefObject } from "react";

type Dim = { width: number; height: number };

export function useDimensions(ref: RefObject<HTMLElement | SVGElement>): Dim {
  const [d, setD] = useState<Dim>({ width: 0, height: 0 });

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;

    const update = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        setD({ width, height });
      }
    };

    const onResize = () => {
      clearTimeout(t);
      t = setTimeout(update, 250);
    };

    update();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, [ref]);

  return d;
}

