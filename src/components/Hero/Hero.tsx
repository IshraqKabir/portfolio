import Logo from "../Logo/Logo";
import "./hero.css";

import InteractiveBackground from "../animation/InteractiveBackground/InteractiveBackground";
import { ReactElement } from "react";

import DoubleSlideReveal from "../animation/DoubleSlideReveal/DoubleSlideReveal";

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
                        <DoubleSlideReveal start={true}>
                            <div className="hero-sub_title">{sub_title}</div>
                        </DoubleSlideReveal>
                    </div>
                </>
            )}
        </div>
    );
};

export default Hero;
