import Logo from "../Logo/Logo";
import "./hero.css";

import InteractiveBackground from "../animation/InteractiveBackground/InteractiveBackground";
import { ReactElement } from "react";

import DoubleSlideReveal from "../animation/DoubleSlideReveal/DoubleSlideReveal";
import Button from "../Button/Button";

interface IProps {
    showApp: boolean;
    setShowApp: Function;
}

const Hero = ({ showApp, setShowApp }: IProps): ReactElement | null => {
    const title = "Ishraq Kabir";
    const sub_title = "Full Stack Developer";

    return (
        <div
            className="hero-container"
            style={{ backgroundColor: `${showApp ? "transparent" : `#1c1d25`}` }}
        >
            <Logo setShowApp={setShowApp} />
            {showApp && (
                <>
                    <InteractiveBackground />
                    <div className="content">
                        <DoubleSlideReveal start={true}>
                            <div className="hero-title">
                                {[title.split("")].map((letter, index) => (
                                    <span key={index} className="hero-title-letter">
                                        {letter}
                                    </span>
                                ))}
                            </div>
                        </DoubleSlideReveal>
                        <div className="hero-sub_title-container">
                            <DoubleSlideReveal start={true}>
                                <div className="hero-sub_title">{sub_title}</div>
                            </DoubleSlideReveal>
                        </div>

                        <Button label="About Me" />
                    </div>
                </>
            )}
        </div>
    );
};

export default Hero;
