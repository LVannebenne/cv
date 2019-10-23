/* eslint-disable no-extra-parens */
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Item from "./item";

function project(props) {
    return (
        <div className={"project"}>
            <h3>{props.data.title}</h3>
            <div className={"flex-row"}>
                <div className={"col-50"}>
                    <a href={`http://${props.data.url}`} target={"_blank"}>
                        <img
                            src={`https://api.miniature.io/?token=c0l7n175eYyLkn9d&width=300&height=200&url=${props.data.url}`}
                        />
                    </a>
                </div>
                <div className={"col-50"}>
                    <p>{props.data.description}</p>
                    {typeof props.data.team != "undefined" ? (
                        <p>{`Project in collab with ${props.data.team}`}</p>
                    ) : (
                        ""
                    )}

                    <p>{`Started @ ${props.data.dateStart}`}</p>
                    <a className={"github"} href={props.data.repository}>
                        <FontAwesomeIcon icon={faGithub} />
                        {" Github Repository"}
                    </a>
                </div>
            </div>
            <div>
                <h4>{"Technological stack"}</h4>
                <div className={"tags"}>
                    {props.data.technologies.map(techno => (
                        <Item
                            className={"item"}
                            key={`${props.data.title}-${techno}`}
                            item={techno}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default project;
