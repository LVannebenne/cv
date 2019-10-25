import React from "react";
import {data} from "../data.json";
import Exp from "./exp";

export default function experience() {
    return (
        <div id={"experiences"} className={"wrapper"}>
            <div className={"flex-row"}>
                <h2>{"Experiences && Trainings timelines"}</h2>
            </div>
            <div className={"flex-row"}>
                <div className={"col-50"}>
                    {data.workExperience.map(exp => (
                        <Exp exp={exp} key={exp} className={"exp"} />
                    ))}
                </div>
                <div className={"col-50"}>
                    {data.training.map(train => (
                        <Exp
                            exp={train}
                            key={train}
                            className={"exp align-end"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
