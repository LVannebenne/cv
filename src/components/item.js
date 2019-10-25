import React from "react";

function item(props) {
    return (
        <a
            target={"_blank"}
            href={`https://www.google.com/search?q=${props.item}`}>
            <span className={props.className}>{props.item}</span>
        </a>
    );
}

export default item;
