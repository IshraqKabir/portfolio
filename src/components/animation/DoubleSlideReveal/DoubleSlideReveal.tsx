import anime from "animejs";
import { ReactElement, useEffect, useState } from "react";
import { getRandomCssClass } from "../../../utilFunctions/getRandomCssClass";

interface IProps {
    start: boolean;
    colors?: [firstColor: string, secondColor: string];
    durations?: [firstDuration: number, secondDuration: number],
    children: ReactElement;
}

const DoubleSlideReveal = ({
    start,
    colors = ["#fff", "#ef463c"],
    durations = [500, 500],
    children,
}: IProps): ReactElement | null => {
    const [classNames] = useState([getRandomCssClass(), getRandomCssClass()]);

    useEffect(() => {
        if (start === true) {
            anime
                .timeline({ loop: false })
                .add({
                    targets: `.${classNames[0]}`,
                    width: 0,
                    easing: "easeInOutQuad",
                    duration: durations[0] as number,
                })
                .add({
                    targets: `.${classNames[1]}`,
                    width: 0,
                    easing: "easeInOutQuad",
                    duration: durations[1] as number,
                });
        }
    });

    return (
        <div
            style={{
                position: "relative",
            }}
        >
            {children}
            <div
                className={classNames[0]}
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: colors[0],
                    zIndex: 10,
                }}
            ></div>
            <div
                className={classNames[1]}
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: colors[1],
                    zIndex: 5,
                }}
            ></div>
        </div>
    );
};

export default DoubleSlideReveal;
