import anime, { AnimeTimelineInstance } from "animejs";
import { useEffect, useRef } from "react";
import DoubleSlideReveal from "../animation/DoubleSlideReveal/DoubleSlideReveal";
import "./button.css";

interface IProps {
    label: string;
    onClick: Function;
}

export default function Button({ label, onClick }: IProps) {
    const elRef = useRef<null | AnimeTimelineInstance>(null);

    useEffect(() => {
        elRef.current = anime
            .timeline({
                loop: true,
                direction: 'alternate'
            })
            .add({
                targets: '.button-arrow-icon',
                translateX: 20,
                duration: 1000,
                easing: 'easeInOutQuad',
            })
    }, []);

    return <div className="button-outer-container" onClick={() => { onClick() }}>
        <DoubleSlideReveal start={true}>
            <div className="button-container">
                <div className="button-text">{label}</div>
                <div className="button-image-container">
                    <svg className="button-arrow-icon" width="15px" height="15px" viewBox="0 0 635 784" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 11.5L314 310.5L11.5 613" stroke="white" strokeWidth="100" strokeLinecap="square" />
                    </svg>
                </div>
            </div>
        </DoubleSlideReveal>
        <div className="button-backlay"></div>
    </div>
}


