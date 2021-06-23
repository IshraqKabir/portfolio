import anime, { AnimeTimelineInstance } from "animejs";
import { ReactElement, useEffect, useRef } from "react";

import "./closeIcon.css";

interface IProps { handleClick: Function; }

const CloseIcon = ({ handleClick }: IProps): ReactElement | null => {
    const elRef = useRef<AnimeTimelineInstance | null>(null);

    useEffect(() => {
        onOpen();
    }, []);

    const onOpen = () => {
        elRef.current = anime.timeline({ loop: false })
            .add({
                targets: '.close-icon-container',
                opacity: 1,
                duration: 0,
            })
            .add({
                targets: '.close-icon-first-line, .close-icon-second-line',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutQuad',
                opacity: [0, 1],
                duration: 250,
                delay: (_, i) => i * 250,
            });
    }

    const onClose = () => {
        elRef.current = anime.timeline({ loop: false, complete: () => { handleClick(); } })
            .add({
                targets: '.close-icon-line',
                duration: 250,
            });
    }

    return (
        <svg
            width="25"
            height="25"
            onClick={onClose}
        >
            <line
                x1="0"
                y1="0"
                x2="100%"
                y2="100%"
                className="close-icon-line close-icon-first-line"
            />
            <line
                x2="0"
                y2="100%"
                x1="100%"
                y1="0"
                className="close-icon-line close-icon-second-line"
            />
        </svg>
    );
}

export default CloseIcon;
