import Logo from "../Logo/Logo.jsx";
import'./hero.css';

const Hero = ({ setShowApp }) => {
  return <div className="hero-container">
      <Logo setShowApp={setShowApp} />
    </div>
}

export default Hero
