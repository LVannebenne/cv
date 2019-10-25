import React from "react";
import Project from "./project";
import {data} from "../data.json";

function projects() {
    return (
        <div id={"projects"} className={"wrapper"}>
            <div className={"flex-row"}>
                <h2>{"Projects"}</h2>
            </div>
            <div className={"flex-row"}>
                <div className={"project"}>
                    {
                        "@ BeCode, projects and technologies follow one another but are not necessarily the same... The pace is very fast, but we are learning so much. Projects are an opportunity to test/discover and are not necessarily completed. Some pure integration projects are based on existing projects and are therefore not made public on GitHub."
                    }
                </div>
            </div>
            {data.projects.map(project => (
                <Project key={project.name} data={project} />
            ))}
        </div>
    );
}

export default projects;
