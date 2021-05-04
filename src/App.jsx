import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./Home"
import NotFound from "./NotFound";
import Result from "./Result";
import "./Style.css";

export default function App(props) {return (
    <Router>
        <Switch>
            <Route exact path = "/">
            <Home />
                </Route>
            <Route exact path = "/Result">
                <Result/>
            </Route>
            <Route exact path = "/404">
            <NotFound/>
            </Route>
            <Redirect to = "404">
        
            </Redirect>
            </Switch>
    </Router>)
}
