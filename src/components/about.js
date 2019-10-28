import React from "react";
import {data} from "../data.json";
import Identity from "./identity";

export default function about() {
    return (
        <div id={"about"} className={"wrapper"}>
            <div className={"flex-row"}>
                <h2>{"About me"}</h2>
            </div>
            <div className={"flex-row"}>
                <div className={"col-50"}>
                    <div className={"goals"}>
                        <h4 className={"title"}>{"Goals"}</h4>
                        {data.goals.map(elem => (
                            <div className={"blockquote"} key={elem}>
                                {elem}
                            </div>
                        ))}
                    </div>
                    <div className={"qualities"}>
                        <h4 className={"title"}>{"Qualities"}</h4>
                        {data.qualities.map(elem => (
                            <div className={"element"} key={elem}>
                                {elem}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={"col-50"}>
                    <div className={"other-skills"}>
                        <h4 className={"title"}>{"Other Skills"}</h4>
                        {data.otherSkills.map(elem => (
                            <div className={"element"} key={elem}>
                                {elem}
                            </div>
                        ))}
                    </div>
                    <div className={"languages"}>
                        <h4 className={"title"}>{"Languages"}</h4>
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
