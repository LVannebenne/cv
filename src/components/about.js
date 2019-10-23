import React from "react";
import {data} from "../data.json";
import Identity from "./identity";
import Item from "./item";

export default function about() {
    return (
        <div>
            <Identity data={data.contact} />
            <div className={"flex-row"}>
                <div className={"col-50"}>
                    <h2>{"Goals"}</h2>
                    {data.goals.map(elem => (
                        <Item className={"blockquote"} key={elem} data={elem} />
                    ))}
                </div>
                <div className={"col-50"}>
                    <div className={"other-skills"}>
                        <h2>{"Other Skills"}</h2>
                        {data.otherSkills.map(elem => (
                            <Item className={"skill"} key={elem} data={elem} />
                        ))}
                    </div>
                    <div className={"languages"}>
                        <h2>{"Languages"}</h2>
                        {data.languages.map(elem => (
                            <p className={"item"} key={elem}>
                                {elem}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
