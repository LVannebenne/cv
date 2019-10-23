import React from "react";
import {Link} from "react-router-dom";

export default function navbar() {
    return (
        <div className={"navbar"}>
            <div>
                <Link to={`/skills`}>{"Skills"}</Link>
            </div>
            <div>
                <Link to={`/experience`}>{"Experience & Training"}</Link>
            </div>
            <div>
                <Link to={`/projects`}>{"Projects"}</Link>
            </div>
            <div>
                <Link to={`/about`}>{"About me & contact"}</Link>
            </div>
        </div>
    );
}
