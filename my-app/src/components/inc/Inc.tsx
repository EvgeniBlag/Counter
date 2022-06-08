import React from "react";
import classes from "./Inc.module.css"

type IncrementPropsType = {
    increment:()=>void;
}

export const Inc = (props:IncrementPropsType) => {
    return (
        <button
            onClick={props.increment}
            className={classes.Inc}
        >INC</button>
    )
}