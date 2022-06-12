import React, { useState } from "react";
import classes from "./InputMaxValue.module.css"

 type InputMaxValuePropsType = {
      maxValue:number
      setMaxValue: (maxValue: number) => void
 }


export const InputMaxValue:React.FC<InputMaxValuePropsType> = ({maxValue, setMaxValue}) => {
    return (
        
        <div className={classes.InputMaxValueAll}>
        <h1>Max Value :</h1>
        
        <input
            className={classes.InputMaxValue}
            type="number"
            value={maxValue}
            onChange={(e) => setMaxValue(+e.currentTarget.value)}
        />
        </div>
    )
}