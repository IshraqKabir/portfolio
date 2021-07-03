import { ReactElement, useState } from "react";
import "./link.css";

import DoubleSlideReveal from "../animation/DoubleSlideReveal/DoubleSlideReveal";

interface IProps {
    label: string;
    color?: string;
    page_name?: string;
    show_underline?: boolean;
}

const Link = ({ label, color = "rgb(176, 178, 195)", page_name, show_underline = true }: IProps): ReactElement | null => {
    const [isHovered, setIsHovered] = useState(false);

    console.log(page_name);

    return (
        <li
            className="link-container"
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="link-text" style={{ color: !isHovered ? color : "#fff" }}>
                {label}
            </div>
            {isHovered && show_underline ? (
                <div style={{ width: "100%" }}>
                    <DoubleSlideReveal start={true}>
                        <div className="link-underline"></div>
                    </DoubleSlideReveal>
                </div>
            ) : (
                <div
                    style={{
                        height: "0px",
                        width: "100%",
                        backgroundColor: "transparent",
                        marginTop: "2px",
                    }}
                />
            )}
        </li>
    );
};

export default Link;
