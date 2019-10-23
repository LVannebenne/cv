import React from "react";

function item(props) {
    return <span className={props.className}>{props.item}</span>;
}

export default item;
