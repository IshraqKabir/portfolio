import Logo from "../Logo/Logo.jsx";
import "./hero.css";

import InteractiveBackground from "../animation/InteractiveBackground/InteractiveBackground.jsx";
import { useEffect } from "react";

import DoubleSlideReveal from "../animation/DoubleSlideReveal/DoubleSlideReveal.jsx";

const Hero = ({ showApp, setShowApp }) => {
  const title = "Ishraq Kabir";
  const sub_title = "Full Stack Developer";

  useEffect(() => {
    if (showApp) {
      // console.log(
      //   "hero-sub_title-container",
      //   document
      //     .querySelector(".hero-sub_title-container")
      //     ?.getBoundingClientRect()
      // );
      // console.log(
      //   "hero-sub_title",
      //   document.querySelector(".hero-sub_title")?.getBoundingClientRect()
      // );
    }
  }, [showApp]);

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
                 {[...title].map((letter, index) => ( 
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
