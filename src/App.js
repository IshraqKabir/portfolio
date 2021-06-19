import Hero from "./components/Hero/Hero.jsx";
import DoubleSlideOutReveal from "./components/animation/DoubleSlideOutReveal/DoubleSlideOutReveal.jsx";

import "./app.css";
import { useState } from "react";

function App() {
  const [showApp, setShowApp] = useState(false);

  return (
    <DoubleSlideOutReveal start={true}>
      <div className="container" style={{}}>
        <Hero showApp={showApp} setShowApp={setShowApp} />
        {showApp && (
          <div>
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
            Lorem100
          </div>
        )}
      </div>
    </DoubleSlideOutReveal>
  );
}

export default App;
