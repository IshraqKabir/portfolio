import anime from "animejs";
import { ReactElement, useEffect } from "react";
import "./closeIcon.css";
interface IProps { handleClick: Function; }

const CloseIcon = ({ handleClick }: IProps): ReactElement | null => {

    useEffect(() => {
        onOpen();
    }, []);

    const onOpen = () => {
        anime.timeline({ loop: false })
            .add({
                targets: '.close-icon-first-line, .close-icon-second-line',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutQuad',
                opacity: [0, 1],
                duration: 250,
                delay: (_, i) => i * 250,
            })
    }

    const onClose = () => {
        anime.timeline({ loop: false, complete: () => { handleClick(); } })
            .add({
                targets: '.close-icon-line',
                opacity: [1, 0],
                duration: 250,
            });
    }

    return (
        <svg
            width="25"
            height="25"
            className="close-icon-container"
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
