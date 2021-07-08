import Hero from "./components/Hero/Hero";

import "./app.css";
import { useState } from "react";

import Topbar from "./components/Topbar/Topbar.jsx";
import DoubleSlideReveal from "./components/animation/DoubleSlideReveal/DoubleSlideReveal";
import SocialIcons from "./components/SocialIcons/SocialIcons";

function App() {
    const [showApp, setShowApp] = useState(false);

    return (
        <DoubleSlideReveal start={true}>
            <div className="container" style={{}}>
                <Hero showApp={showApp} setShowApp={setShowApp} />
                {showApp && (
                    <>
                        <Topbar />
                        <SocialIcons />
                    </>
                )}
            </div>
        </DoubleSlideReveal>
    );
}

export default App;
