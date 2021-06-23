import anime from "animejs";
import { ReactElement, useEffect } from "react";
import "./burgerIcon.css";

interface IProps {
    openNavModal: (willShow: boolean) => void;
}

const BurgerIcon = ({ openNavModal }: IProps): ReactElement | null => {

    useEffect(() => {
        anime.timeline({ loop: false })
        .add({
            targets: ".burger-icon",
            opacity: 1,
            duration: 0
        })
        .add({
            targets: ".burger-icon-line",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInOutQuad",
            duration: 300,
            delay: (_, i) => i * 250,
        })
    }, [])

    return (
        <svg
            width="25"
            height="30"
            className="burger-icon"
            onClick={() => { openNavModal(true); }}
        >
            <line
                className="burger-icon-first-line burger-icon-line"
                x1="0"
                y1="7.5"
                x2="25"
                y2="7.5"
            />
            <line
                x1="7.5"
                y1="15"
                x2="17.5"
                y2="15"
                className="burger-icon-mid-line burger-icon-line"
            />
            <line
                x1="0"
                y1="22.5"
                x2="25"
                className="burger-icon-mid-line burger-icon-line"
                y2="22.5"
            />
        </svg>
    );
};

export default BurgerIcon;
