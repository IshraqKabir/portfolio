import {useEffect, useRef} from 'react';
import './doubleSlideOutReveal.css';

import anime from "animejs";

export default function DoubleSlideOutReveal({
  start,
  colors = ["#fff", "#f06449"],
  durations = [500, 500],
  children,
}) {
  const elRef = useRef(null);

  useEffect(() => {
    if (start) {
      console.log("started");
      elRef.current = anime
        .timeline({ loop: false })
        .add({
          targets: ".drawer",
          width: 0,
          easing: "easeInOutQuad",
          duration: durations[0],
        })
        .add({
          targets: ".second-drawer",
          width: 0,
          easing: "easeInOutQuad",
          duration: durations[1],
        });
    }
  }, [start, durations]);

  return (
    <div className="double-slide-out-reveal-container">
      {children}
      <div className="drawer" style={{ backgroundColor: colors[0] }}></div>
      <div
        className="second-drawer"
        style={{ backgroundColor: colors[1] }}
      ></div>
    </div>
  );
}
