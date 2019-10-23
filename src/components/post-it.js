import React from "react";

export default function postIt(props) {
    return (
        <div className={props.className}>
            <h4 className={"title"}>{props.title}</h4>
            <div className={"items"}>
                {props.items.map(item => (
                    <span className={"item"} key={item}>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
