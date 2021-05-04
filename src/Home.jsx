import { useEffect, useState } from "react";
import Button from "./Button";
import data from "./data";
import { useHistory } from "react-router-dom";

export default function Home() {
    let color = ["green", "yellow", "red"];
    let [current, setCurrent] = useState(0);
    let history = useHistory();
    function navigateToResult() {
    history.push("/Result",{score:tempScore, choices: answers});
  }
    let [width, setWidth] = useState(100);
    let [choices, setChoices] = useState([]);
    let [counter, setCounter] = useState(0);
    let [qeustionData, setQuestionData] = useState(data[counter]); 
    let [score, setScore] = useState(0);
    let tempScore = score, answers = choices;
    useEffect(() => {
        if(Math.floor(width) === 0){
            DoStuff("", data[counter]);
             return;
            }
       setInterval(() => {
          setWidth((width) => width - 0.1);
          console.log(width);
      }, 5);
      if (width < 33){
          setCurrent(2);}
      else if(width < 66) setCurrent(1);
    // eslint-disable-next-line
  },[])
  useEffect(() => {
    console.log(width);
  },[width, counter])
    return(
        <div className="container">
            <div className="box">
            <h1 className="score">Score: {score}</h1>
            <p className = "question">{qeustionData.question}</p>
            <div className="options">
            {
                qeustionData.Options.map((elem, index )=> {
                   return <Button elem = {elem} DoStuff ={DoStuff} data = {qeustionData} />
                })
            }
            </div>
            <div className="loading"> <div className="details" style ={{background:color[current] , width: `${width}%`, height:"100%"}}></div></div>
            </div>
        </div>
    )
    function DoStuff(value, obj) {
        if(counter === data.length) {
            return;
        }
        answers = [...choices, value];
        setChoices(answers);
        if(value === obj["answer"]){
            tempScore = score + 10;
            setScore(tempScore);
            }
        if(counter + 1 < data.length) 
            setQuestionData(data[counter + 1]);
        setCounter(counter+1);
        console.log(counter);
        if(counter + 1 === data.length){
            navigateToResult();
        }
        setWidth(100);
        setCurrent(0);
    }
}
