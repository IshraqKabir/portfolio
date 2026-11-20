import { ReactElement, useEffect, useRef } from "react";
import Logo from "../Logo/Logo";
import "./hero.css";

import InteractiveBackground from "../animation/InteractiveBackground/InteractiveBackground";

import Button from "../Button/Button";
import anime, { AnimeTimelineInstance } from "animejs";

interface IProps {
    showApp: boolean;
    setShowApp: Function;
    completeAnimation: Function;
}

const Hero = ({ showApp, setShowApp, completeAnimation }: IProps): ReactElement | null => {
    const animeRef = useRef<AnimeTimelineInstance | null>(null);

    useEffect(() => {
        if (showApp) {
            animeRef.current = anime.timeline({
                loop: false,
                complete: () => completeAnimation()

            })
                .add({
                    targets: '.letter',
                    opacity: [0, 1],
                    duration: 100,
                    delay: (_, i) => i * 50,
                })
                .add({
                    targets: '.hero-content-container',
                    opacity: [0, 1],
                    translateY: '-20px',
                    easing: 'easeInOutQuad',
                })
                .add({
                    targets: '.social-icons-container',
                    scaleY: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 250,
                });
        }
    }, [showApp]);

    const hi_text = "Hi, my name is";
    const title = "Ishraq Kabir.";
    const another_title = "I build things for the web.";

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
                        <div className="hi-text">
                            {[...hi_text.split("")].map((letter, index) => {
                                return (
                                    <span key={index} className="letter">{letter}</span>
                                );
                            })}
                        </div>
                        <div className="hero-title">
                            {[...title.split("")].map((letter, index) => {
                                return (
                                    <span key={index} className="letter">{letter}</span>
                                );
                            })}
                        </div>
                        <div className="hero-title another-title">
                            {[...another_title.split("")].map((letter, index) => (
                                <span key={index} className="letter">
                                    {letter}
                                </span>
                            ))}
                        </div>
                        <div className="hero-content-container">
                            <div className="hero-about-text">
                                I'm a senior frontend engineer with 6+ years of building React, Next.js and TypeScript products end to end.
                                I helped scale a consumer platform from 700K to 8M+ monthly active users, and I'm now an Associate Tech Lead leading a team of 5 engineers.
                            </div>
                            <Button label="Get In Touch" onClick={() => {
                                window.location.href = "mailto:ishraqkabirdev@gmail.com";
                            }} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Hero;
