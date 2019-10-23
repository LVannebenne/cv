import React from "react";
import Item from "./item";

export default function postIt(props) {
    return (
        <div className={props.className}>
            <h4 className={"title"}>{props.title}</h4>
            <div className={"items"}>
                {props.items.map(item => (
                    <Item className={"item"} key={item} item={item} />
                ))}
            </div>
        </div>
    );
}
