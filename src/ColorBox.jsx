import "./ColorBox.css";
import { useState } from "react";

function RandomChoice(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
export default function ColorBox({ colors }) {
  const [color, SetColor] = useState(RandomChoice(colors));
  const handleEventListener = () => {
    SetColor(RandomChoice(colors));
  };

  return (
    <div
      onClick={handleEventListener}
      className="ColorBox"
      style={{ background: color }}
    ></div>
  );
}
