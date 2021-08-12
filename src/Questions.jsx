import { useEffect, useState } from "react";
import Button from "./Button";
import { useHistory } from "react-router-dom";

export default function Questions({ questions }) {
    let color = ["green", "yellow", "red"];
    let [current, setCurrent] = useState(0);
    let history = useHistory();
    function navigateToResult() {
        history.push("/Result", { score: tempScore, choices: answers });
    }
    let [width, setWidth] = useState(100);
    let [choices, setChoices] = useState([]);
    let [counter, setCounter] = useState(0);
    let [questionData, setQuestionData] = useState(questions[counter]);
    let [score, setScore] = useState(0);
    let tempScore = score, answers = choices;
    useEffect(() => {
        setInterval(() => {
            setWidth((width) => width - 0.1);
        }, 5);
        if (width < 33) {
            setCurrent(2);
        }
        else if (width < 66) setCurrent(1);
        // eslint-disable-next-line
    }, [])
    useEffect(() => {
        if (Math.floor(width) === 0) {
            DoStuff("", questions[counter]);
            return;
        }
        // eslint-disable-next-line
    }, [width, counter])
    return (
        <div className="container">
            <div className="box">
                <h1 className="score">Score: {score}</h1>
                <p className="question">{questionData.question}</p>
                <div className="options">
                    {
                        questionData.Options.map((elem, index) => {
                            console.log(questionData, "here");
                            return <Button elem={elem} DoStuff={DoStuff} data={questionData} />
                        })
                    }
                </div>
                <div className="loading"> <div className="details" style={{ background: color[current], width: `${width}%`, height: "100%" }}></div></div>
            </div>
        </div>
    )
    async function DoStuff(value, obj, setSelected) {
        if (counter === questions.length) {
            return;
        }
        await delay(300);
        answers = [...choices, value];
        setChoices(answers);
        if (value === obj["answer"]) {
            tempScore = score + 10;
            setScore(tempScore);
        }
        if (counter + 1 < questions.length)
            setQuestionData(questions[counter + 1]);
        setCounter(counter + 1);
        if (counter + 1 === questions.length) {
            navigateToResult();
        }
        setWidth(100);
        setCurrent(0);
        setSelected("none");
    }
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
