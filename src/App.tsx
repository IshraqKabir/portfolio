import Hero from "./components/Hero/Hero";

import "./app.css";
import { useState } from "react";

import Topbar from "./components/Topbar/Topbar.jsx";
import DoubleSlideReveal from "./components/animation/DoubleSlideReveal/DoubleSlideReveal";
import SocialIcons from "./components/SocialIcons/SocialIcons";
import Experience from "./components/Experience/Experience";

function App() {
    const [showApp, setShowApp] = useState(false);
    const [hasHeroAnimationCompleted, setHasHeroAnimationCompleted] = useState(false)

    return (
        <DoubleSlideReveal start={true}>
            <div className="container">
                <Hero showApp={showApp} setShowApp={setShowApp} completeAnimation={() => { setHasHeroAnimationCompleted(true) }} />
                {showApp && (
                    <>
                        <Topbar />
                        <SocialIcons />
                        {hasHeroAnimationCompleted ?
                            <Experience />
                        :null}
                    </>
                )}
            </div>
        </DoubleSlideReveal>
    );
}

export default App;
