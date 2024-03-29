import React, { Dispatch, SetStateAction } from "react";
import { ButtonSet } from "../buttonSet/ButtonSet";
import { InputMaxValue } from "../inputMaxValue/InputMaxValue";
import { InputStartValue } from "../inputStartValue/InputStartValue";


type FullInputPropsType = {
    maxValue: number
    setMaxValue: Dispatch<SetStateAction<number>>
    addClick: () => void
    startValue: number
    count: number
    setStartValue: Dispatch<SetStateAction<number>>
}


export const FullInput2 = (props:FullInputPropsType) => {
    return(
        
        <div style={{textAlign:"center"}}>

        <InputMaxValue maxValue={props.maxValue}  setMaxValue={props.setMaxValue} /> 
   
        <InputStartValue  startValue={props.startValue}  setStartValue={props.setStartValue}/> 
      
        <ButtonSet addClick={props.addClick}  /> 
        </div>
    )
}