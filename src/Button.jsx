import { useState } from "react";
import Confetti from "react-dom-confetti";
export default function Button({elem, DoStuff, data}) {
    let [selected, setSelected] = useState(() => "none");
    return (
        <>
        <button style={{ background:selected}} onClick = {(() => {
            setSelected(elem === data.answer ? "green":"red")
            DoStuff(elem, data, setSelected)})}>{elem}</button>
            <Confetti active={selected === "green"} config = {config}/>
        </>
    )
}

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 500,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};