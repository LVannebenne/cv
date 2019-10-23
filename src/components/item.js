import React from "react";

function item(props) {
    return (
        <div className={props.className}>
            <p>{props.data}</p>
        </div>
    );
}

export default item;
