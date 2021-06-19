import Logo from "../Logo/Logo.jsx";
import "./hero.css";

import DoubleSlideOutReveal from "../animation/DoubleSlideOutReveal/DoubleSlideOutReveal.jsx";
import InteractiveBackground from "../animation/InteractiveBackground/InteractiveBackground.jsx";
import { useEffect } from "react";

const Hero = ({ showApp, setShowApp }) => {
  const title = "Ishraq Kabir";
  const sub_title = "Full Stack Developer";

  useEffect(() => {
    if (showApp) {
      console.log(
        "hero-sub_title-container",
        document
          .querySelector(".hero-sub_title-container")
          ?.getBoundingClientRect()
      );
      console.log(
        "hero-sub_title",
        document.querySelector(".hero-sub_title")?.getBoundingClientRect()
      );
    }
  }, [showApp]);

  return (
    <div className="hero-container">
      <Logo setShowApp={setShowApp} />
      {showApp && (
        <>
          <InteractiveBackground />
          <div className="content">
            <DoubleSlideOutReveal start={showApp}>
              <div className="hero-title">
                {[...title].map((letter, index) => (
                  <span key={index} className="hero-title-letter">
                    {letter}
                  </span>
                ))}
              </div>
            </DoubleSlideOutReveal>
            <DoubleSlideOutReveal start={showApp}>
              <div className="hero-sub_title">{sub_title}</div>
            </DoubleSlideOutReveal>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
