import { RefObject, useEffect } from "react";

const useIntersectionObserver = (ref: RefObject<Element>, callback: IntersectionObserverCallback) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback);
    if (ref.current) {
      observer.observe(ref.current);
      console.log("observe");
    }
  }, []);
};

export default useIntersectionObserver;
