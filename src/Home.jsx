import { useState } from "react";
import Button from "./Button";
import data from "./data";
import { useHistory } from "react-router-dom";



export default function Home() {
    let history = useHistory();
    function navigateToResult() {
    history.push({pathname:"/Result",
                  state: {score}});
  }
    let [choices, setChoices] = useState([]);
    let [counter, setCouner] = useState(0);
    let [qeustionData, setQuestionData] = useState(data[counter]); 
    let [score, setScore] = useState(0);
    return(
        <div className="container">
            <div className="box">
            <h1 className="score">Score: {score}</h1>
            <p className = "question">{qeustionData.question}</p>
            <div className="options">
            {
                qeustionData.Options.map(elem => {
                   return <Button elem = {elem} DoStuff ={DoStuff} data = {qeustionData} />
                })
            }
            </div>
            <div className="loading"></div>
            </div>
        </div>
    )
    function DoStuff(value, obj) {
        if(counter === data.length) {
            return;
        }
        let answers = [...choices, value];
        setChoices(answers);
        if(value === obj["answer"]) setScore(score + 10);
        if(counter + 1 < data.length) 
            setQuestionData(data[counter + 1]);
        setCouner(counter+1);
        if(counter + 1 === data.length){
            navigateToResult();
        }

    }
}
