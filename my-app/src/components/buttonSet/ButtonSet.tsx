import React from "react"
import classes from "./ButtonSet.module.css"

type ButtonPropsType = {
    addClick:()=>void
}

export const ButtonSet = (props: ButtonPropsType) => {
    return (
        <button
            className={classes.ButtonSet}
            onClick={props.addClick}
        >Set
        </button>
    )
}