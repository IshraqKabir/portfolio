import { useRef, useEffect } from "react";

export const useIntersection = (callBackFunction: Function) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;

        const callBack: IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (!entry.isIntersecting) return;

                callBackFunction();

                if (element) {
                    observer.unobserve(element);
                }
            });
        };

        const options: IntersectionObserverInit = {};

        const observer: IntersectionObserver = new IntersectionObserver(callBack, options);

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };

    }, []);

    return { ref };
};
