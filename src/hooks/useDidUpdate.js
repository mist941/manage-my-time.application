import {useEffect, useRef} from "react";

export const useDidUpdate = (effect, deps) => {
  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      effect();
    }
  }, [...deps]);
};