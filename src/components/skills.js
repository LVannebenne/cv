import React from "react";
import PostIt from "./post-it";
import {data} from "../data.json";

export default function skills() {
    return (
        <div className={"wrapper"}>
            <div className={"flex-row"}>
                <h2>{"Skills"}</h2>
            </div>
            <div className={"flex-row"}>
                <PostIt
                    className={"post-it"}
                    title={"Acquired Skills"}
                    items={data.skillsAcquired}
                />
                <PostIt
                    className={"post-it-pink"}
                    title={"Some Experience with"}
                    items={data.skillsExperience}
                />
                <PostIt
                    className={"post-it-blue"}
                    title={"Wanna learn.."}
                    items={data.skillsLearn}
                />
            </div>
        </div>
    );
}
