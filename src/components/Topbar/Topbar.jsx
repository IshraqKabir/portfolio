import "./topbar.css";
import Link from "../Link/Link.jsx";

import BurgerIcon from "../BurgerIcon/BurgerIcon.jsx";

const Topbar = () => {
  return (
    <ul className="topbar-container">
      <Link label="Home" />
      <Link label="Experience" />
      <Link label="Projects" />
      <Link label="About Me" />
      <BurgerIcon />
    </ul>
  );
};

export default Topbar;
