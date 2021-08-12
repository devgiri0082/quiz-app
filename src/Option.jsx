import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Option({ setQuestions }) {
    let history = useHistory();
    let createQuestion = (option) => {
        let tempQuestions = [];
        for (let i = 0; i < 10; i++) {
            let x = Math.ceil(Math.random() * (10 + i));
            let y = Math.ceil(Math.random() * (10 + i));
            let question = "";
            let answer = "";
            let options = [];
            switch (option) {
                case "+":
                    question = `${x} ${option} ${y}`;
                    options.push(x + y);
                    for (let i = 0; i < 3; i++) {
                        let option = Math.floor(Math.random() * ((x + y) - Math.abs(x - y)) + Math.abs(x - y));
                        while (options.includes(option)) option += + 5;
                        options.push(option);
                    }
                    options.sort((a, b) => Math.floor(Math.random() * 3) - 1);
                    answer = x + y;
                    break;
                case "-":
                    question = `${x} ${option} ${y}`;
                    options.push(x - y);
                    for (let i = 0; i < 3; i++) {
                        let option = Math.floor(Math.random() * ((x + y) - (x - y)) + (x - y));
                        while (options.includes(option)) option += + 5;
                        options.push(option);
                    }
                    options.sort((a, b) => Math.floor(Math.random() * 3) - 1);
                    answer = x - y;
                    break;
                case "x":
                    question = `${x} ${option} ${y}`;
                    options.push(x * y);
                    for (let i = 0; i < 3; i++) {
                        let option = Math.floor(Math.random() * ((x * y) - Math.floor(x / y)) + Math.floor(x / y));
                        while (options.includes(option)) option += + 5;
                        options.push(option);
                    }
                    options.sort((a, b) => Math.floor(Math.random() * 3) - 1);
                    answer = x * y;
                    break;
                case "÷":
                    question = `${x * y} ${option} ${y}`;
                    options.push(x);
                    for (let i = 0; i < 3; i++) {
                        let option = Math.floor(Math.random() * ((x * y) - Math.ceil(x / y)) + Math.ceil(x / y));
                        while (options.includes(option)) option += + 5;
                        options.push(option);
                    }
                    options.sort((a, b) => Math.floor(Math.random() * 3) - 1);
                    answer = x;
                    break;
                default:

            }
            tempQuestions.push({
                "question": question,
                "Options": options,
                "answer": answer
            })
        }
        console.log(tempQuestions);
        setQuestions(tempQuestions);
        history.push("/questions");
    }
    return (
        <div className="categoryPage">
            <div className="category-title">Choose an Category: </div>
            <div className="categories">
                <button onClick={() => createQuestion("+")} className="each-category">Addition</button>
                <button onClick={() => createQuestion("-")} className="each-category">Subtraction</button>
                <button onClick={() => createQuestion("x")} className="each-category">Multiplication</button>
                <button onClick={() => createQuestion("÷")} className="each-category">division</button>
            </div>
        </div>
    )
}
