import React from "react";
import Face from "../img/Lin-nb.jpg";
import Navbar from "./navbar";
import {Link} from "react-router-dom";
import {data} from "../data.json";

export default function header() {
    return (
        <div className={"nav"}>
            <div>
                <img
                    className={"profilePic"}
                    src={Face}
                    alt={"Profile portrait"}
                />
            </div>
            <div>
                <h1 className={"title"}>
                    <Link to={"/"}>{"Junior Web Developper"}</Link>
                </h1>
                <h5>
                    {data.sentences.map(sentence => (
                        <span key={sentence}>{sentence}</span>
                    ))}
                </h5>
                <Navbar />
            </div>
        </div>
    );
}
