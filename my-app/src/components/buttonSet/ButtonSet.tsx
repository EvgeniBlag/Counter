import React from "react"
import classes from "./ButtonSet.module.css"

type ButtonPropsType = {
    addClick:()=>void
    setStartValue:(count:number)=>void
    count:number
}

 export const ButtonSet = (props:ButtonPropsType) => {


    return (
        <button
             className={classes.ButtonSet}
             onClick={props.addClick}
            //  setStartValue={props.setStartValue}
            //  count={props.count}

        >Set</button>
    )
}