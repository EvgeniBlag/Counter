import React from "react";
import { Inc } from "../inc/Inc";
import { Reset } from "../reset/Reset";
import classes from "../input/Input.module.css"


type FullInput1PropsType = {
 count:number
 increment:()=> void
 reset:()=>void
 maxValue:number
}


export const FullInput1 = (props: FullInput1PropsType) => {
  return (
    <>
      <div>
      <div  className={classes.Input + (props.count === props.maxValue ? " " +  classes.numberAlert : '')}>
        {props.count}
        </div> 
        <div>
          <Inc increment={props.increment} count={props.count} maxValue={props.maxValue} />
          <Reset reset={props.reset} count={props.count} />
        </div>
      </div>
    </>
  )
}