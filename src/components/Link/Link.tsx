import { ReactElement, useState } from "react";
import "./link.css";

import DoubleSlideReveal from "../animation/DoubleSlideReveal/DoubleSlideReveal";

interface IProps {
    label: string;
    page_name?: string;
}

const Link = ({ label, page_name }: IProps): ReactElement | null => {
  const [isHovered, setIsHovered] = useState(false);

  console.log(page_name);

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
            <div className="link-underline"></div>
          </DoubleSlideReveal>
        </div>
      ) : (
        <div
          style={{
            height: "2px",
            width: "100%",
            backgroundColor: "transparent",
            marginTop: "2px",
          }}
        />
      )}
    </li>
  );
};

export default Link;
