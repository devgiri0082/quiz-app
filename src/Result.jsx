import "./Style.css";
import data from "./data";
import Table from "./Table";
import { useHistory } from "react-router-dom";

export default function Result() {
    let history = useHistory();
    return (
        <div className="result">
            <div className="score">Total Score:</div>
            <table>
                {data.map(elem => <Table question ={elem.question} answer = {elem.answer}/>)}
            
            </table>
        </div>
    )
}