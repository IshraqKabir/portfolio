import { useState } from "react";
import "./app.css";

import Hero from "./components/Hero/Hero";
import Topbar from "./components/Topbar/Topbar.jsx";
import DoubleSlideReveal from "./components/animation/DoubleSlideReveal/DoubleSlideReveal";
import SocialIcons from "./components/SocialIcons/SocialIcons";
import Experience from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";

function App() {
    const [showApp, setShowApp] = useState(false);
    const [hasHeroAnimationCompleted, setHasHeroAnimationCompleted] = useState(false);

    return (
        <DoubleSlideReveal start={true}>
            <div className="container">
                <div className="inner-container">
                    <Hero showApp={showApp} setShowApp={setShowApp} completeAnimation={() => { setHasHeroAnimationCompleted(true); }} />
                    {showApp && (
                        <>
                            <Topbar />
                            <SocialIcons />
                            {hasHeroAnimationCompleted ?
                                <>
                                    <Experience />
                                    <Projects />
                                </>
                                : null}
                        </>
                    )}
                </div>
            </div>
        </DoubleSlideReveal>
    );
}

export default App;
