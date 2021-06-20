import {useState} from "react";
import "./link.css";

import DoubleSlideReveal from "../animation/DoubleSlideReveal/DoubleSlideReveal.jsx";

const Link = ({ label, page_name }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li
      className="link-container"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="link-text">{label}</div>
      {isHovered ? (
        <div style={{ width: "100%" }}>
          <DoubleSlideReveal start={true}>
            <div
              className="link-underline"
            ></div>
          </DoubleSlideReveal>
        </div>
      ): (
        <div style={{ height: "2px", width: "100%", backgroundColor: "transparent"}} />
      )}
    </li>
  );
};

export default Link;
