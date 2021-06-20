import "./burgerIcon.css";

const BurgerIcon = ({}) => {
  return (
    <svg
      width="25"
      height="30"
      className="burger-icon"
    >
      <line
        className="burger-icon-first-line burger-icon-line"
        x1="0"
        y1="7.5"
        x2="25"
        y2="7.5"
      />
      <line
        x1="7.5"
        y1="15"
        x2="17.5"
        y2="15"
        className="burger-icon-mid-line burger-icon-line"
      />
      <line
        x1="0"
        y1="22.5"
        x2="25"
        className="burger-icon-mid-line burger-icon-line"
        y2="22.5"
      />
    </svg>
  );
};

export default BurgerIcon;
