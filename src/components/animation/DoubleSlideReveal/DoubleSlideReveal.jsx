import anime from "animejs";
import { useEffect, useRef, useState } from "react";

const DoubleSlideReveal = ({
  start,
  colors = ["#fff", "#ef463c"],
  durations = [500, 500],
  children,
}) => {
  const [classNames] = useState([getRandomClass(), getRandomClass()]);

  useEffect(() => {
    if (start === true) {
      anime
        .timeline({
          loop: false,
          begin: () => {
            // console.log(`${children.props.className} began`, classNames);
            // console.log('began first-drawer', document.querySelector(`.${classNames[0]}`))
            // console.log('began second-drawer', document.querySelector(`.${classNames[1]}`))
          },
          complete: () => {
            // console.log(`${children.props.className} completed`, classNames);
            // console.log('ended first-drawer', document.querySelector(`.${classNames[0]}`))
            // console.log('ended second-drawer', document.querySelector(`.${classNames[1]}`))
          },
        })
        .add({
          targets: `.${classNames[0]}`,
          width: 0,
          easing: "easeInOutQuad",
          duration: durations[0],
        })
        .add({
          targets: `.${classNames[1]}`,
          width: 0,
          easing: "easeInOutQuad",
          duration: durations[1],
        });
    }
  });

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {children}
      <div
        className={classNames[0]}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          backgroundColor: colors[0],
          zIndex: 10,
        }}
      ></div>
      <div
        className={classNames[1]}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          backgroundColor: colors[1],
          zIndex: 5,
        }}
      ></div>
    </div>
  );
};

export default DoubleSlideReveal;

export function getRandomClass() {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < charactersLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
