import React from "react";
import {data} from "../data.json";
import Identity from "./identity";

export default function about() {
    return (
        <div className={"wrapper"}>
            <div className={"flex-row"}>
                <div className={"col-50"}>
                    <div className={"goals"}>
                        <h2>{"Goals"}</h2>
                        {data.goals.map(elem => (
                            <div className={"blockquote"} key={elem}>
                                {elem}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={"col-50"}>
                    <div className={"other-skills"}>
                        <h2>{"Other Skills"}</h2>
                        {data.otherSkills.map(elem => (
                            <div className={"element"} key={elem}>
                                {elem}
                            </div>
                        ))}
                    </div>
                    <div className={"languages"}>
                        <h2>{"Languages"}</h2>
                        {data.languages.map(elem => (
                            <div className={"element"} key={elem}>
                                {elem}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Identity data={data.contact} />
        </div>
    );
}
