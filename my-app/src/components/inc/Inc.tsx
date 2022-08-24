import React from "react";
import classes from "./Inc.module.css"

type IncrementPropsType = {
    increment:()=>void;
    count:number
    maxValue:number
}

export const Inc = (props:IncrementPropsType) => {
    return (
        <button
            disabled={props.count === props.maxValue}
            onClick={props.increment}
            className={classes.Inc}
        >INC</button>
    )
}