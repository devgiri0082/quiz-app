import "./Style.css";
import data from "./data";
import Table from "./Table";

export default function Result() {
    return (
        <div className="result">
            <div className="score">Total Score:</div>
            <table>
                {data.map(elem => <Table question ={elem.question} answer = {elem.answer}/>)}
            
            </table>
        </div>
    )
}