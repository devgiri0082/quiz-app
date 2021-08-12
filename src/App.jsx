import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Questions from "./Questions"
import NotFound from "./NotFound";
import Result from "./Result";
import "./Style.css";
import Option from "./Option";

export default function App(props) {
    let [questions, setQuestions] = useState([]);
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Option setQuestions={setQuestions} />
                </Route>
                <Route path="/questions">
                    <Questions questions={questions} />
                </Route>
                <Route exact path="/Result">
                    <Result questions={questions} />
                </Route>
                <Route exact path="/404">
                    <NotFound />
                </Route>
                <Redirect to="404">

                </Redirect>
            </Switch>
        </Router>)
}
