import "./Style.css";
import Table from "./Table";
import { useHistory } from "react-router";

export default function Result({ questions }) {
    let history = useHistory();
    return (
        <div className="result">
            <div className="score">Total Score:{history.location.state.score ? history.location.state.score : 0}</div>
            <table>
                {questions.map((elem, index) => <Table question={elem.question} answer={elem.answer} choice={history.location.state.choices[index]} />)}

            </table>
        </div>
    )
}