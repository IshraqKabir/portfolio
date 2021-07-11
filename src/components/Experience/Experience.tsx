import anime from "animejs";
import { ReactElement, useEffect, useRef } from "react";
import { getRandomCssClass } from "../../utilFunctions/getRandomCssClass";

export default function Experience(): ReactElement | null {
    const ref = useRef<HTMLDivElement>(null);
    const className = getRandomCssClass();

    useEffect(() => {
        const element = ref.current;

        const callBack: IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (!entry.isIntersecting) return;

                console.log(entry.target);

                anime.timeline({ loop: false })
                    .add({
                        targets: `.${entry.target.className}`,
                        opacity: [0, 1],
                        translateY: '-30px',
                        easing: "easeInOutQuad",
                        duration: 500,
                    })

                if (element) {
                    observer.unobserve(element);
                }
            });
        }

        const options: IntersectionObserverInit = {};

        const observer: IntersectionObserver = new IntersectionObserver(callBack, options);

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        }

    }, [])

    return <div style={OuterContainerStyle} ref={ref} className={className}>
        <div style={InnerContainerStyle}></div>
    </div>;
}

const OuterContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: "2rem",
} as const;

const InnerContainerStyle = {
    padding: "0.5rem 0rem",
    color: "white",
    maxWidth: "40ch"
} as const;

