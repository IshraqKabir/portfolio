import Logo from "./components/Logo/Logo.jsx";
import Hero from "./components/Hero/Hero.jsx";

import "./app.css";
import { useEffect, useState } from "react";

function App() {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    console.log("showApp:" + showApp);
  }, [showApp]);

  return (
    <>
      <div className="container">
        <Hero setShowApp={setShowApp} />
      </div>
    </>
  );
}

export default App;
