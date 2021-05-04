import Confetti from "react-dom-confetti";
export default function Button({elem, DoStuff, data}) {
    return (
        <>
        <button onClick = {(() => DoStuff(elem, data))}>{elem}</button>
        <Confetti/>
        </>
    )

}