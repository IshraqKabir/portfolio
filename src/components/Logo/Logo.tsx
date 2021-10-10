import anime, { AnimeTimelineInstance } from "animejs";
import { useEffect, useMemo, useRef } from "react";

import "./logo.css";

interface IProps {
    setShowApp: Function;
}

const Logo = ({ setShowApp }: IProps) => {
    const elRef = useRef<null | AnimeTimelineInstance>(null);

    useEffect(() => {
        elRef.current = anime
            .timeline({
                loop: false,
                complete: () => {
                    setShowApp(true);
                },
            })
            .add({
                targets: ".logo",
                left: document.body.getBoundingClientRect().width / 2 - 60,
                duration: 0
            })
            .add({
                targets: ".logo_icon",
                opacity: 1,
                easing: "easeInOutSine",
                duration: 100,
            })
            .add(
                {
                    targets: ".logo_text",
                    strokeDashoffset: [anime.setDashoffset, 0],
                    opacity: 1,
                    easing: "easeInOutSine",
                    duration: 1000,
                    delay: (_, i) => i * 500,
                },
            )
            .add({
                targets: ".logo",
                top: "-15px",
                left: "5px",
                scale: [1, 0.3],
                easing: "easeInOutQuad",
                duration: 750,
            });
    }, [setShowApp]);

    return (
        <svg viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="logo"
        >
            <path className="logo_text" d="M403.5 878.5V129" stroke="url(#paint1_linear)" strokeWidth="100" />
            <path className="logo_text" d="M713.5 878.5V129" stroke="url(#paint2_linear)" strokeWidth="100" />
            <path className="logo_text" d="M1195.5 854.5L864 496.5L1195.5 172" stroke="url(#paint0_linear)" strokeWidth="100" />
            <defs>
                <linearGradient id="paint0_linear" x1="1029.75" y1="172" x2="1029.75" y2="854.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00B4DB" />
                    <stop offset="1" stopColor="#00B4DB" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="404" y1="129" x2="404" y2="878.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00B4DB" />
                    <stop offset="1" stopColor="#00B4DB" />
                </linearGradient>
                <linearGradient id="paint2_linear" x1="714" y1="129" x2="714" y2="878.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00B4DB" />
                    <stop offset="1" stopColor="#00B4DB" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Logo;

