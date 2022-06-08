import React from "react";
import classes from "./Reset.module.css"

type ResetPropsType = {
    // setCount:()=>void
    reset:()=>void;
}

export const Reset = (props:ResetPropsType) => {
    return(
        <button
         className={classes.Reset}
         onClick={props.reset}>RESET</button>
    )
}