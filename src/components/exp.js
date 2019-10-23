/* eslint-disable no-extra-parens */
import React from "react";

const descExist = props => {
    let value;
    if (typeof props.exp.description == "undefined") {
        value = "hide";
    } else {
        value = "";
    }
    return value;
};

export default function exp(props) {
    return (
        <div
            className={`${descExist(props)} ${props.className}`}
            key={props.exp.year}>
            <p className={"year-bubble"}>{props.exp.year}</p>
            <p>
                <span className={"bold"}>{props.exp.description}</span>
                <br />
                {props.exp.location}
            </p>
            {typeof props.exp.details != "undefined" ? (
                <div className={"details"}>
                    {Array.isArray(props.exp.details) ? (
                        props.exp.details.map(elem => (
                            <p className={"details-item"} key={"elem"}>
                                {elem}
                            </p>
                        ))
                    ) : (
                        <p>{props.exp.details}</p>
                    )}
                    {typeof props.exp.link != "undefined" && (
                        <a href={props.exp.link}>{props.exp.link}</a>
                    )}
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
