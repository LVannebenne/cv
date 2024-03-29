import React from "react";
import "./index.scss";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Skills from "./components/skills";
import Header from "./components/header";
import Experiences from "./components/experiences";
import About from "./components/about";
import Projects from "./components/projects";
import QRCode from "./img/QR.png";

function App() {
    return (
        <div className={"app-background"}>
            <img className={"qr-code"} src={QRCode} alt={"QR code"}/>
            <Router>
                <Header />
                <Switch>
                    <div className={"content"}>
                        <Route exact path={"/"}>
                            <Skills />
                            <Experiences />
                            <About />
                        </Route>
                        <Route exact path={"/skills"}>
                            <Skills />
                        </Route>
                        <Route path={"/experience"}>
                            <Experiences />
                        </Route>
                        <Route path={"/projects"}>
                            <Projects />
                        </Route>
                        <Route path={"/about"}>
                            <About />
                        </Route>
                    </div>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
