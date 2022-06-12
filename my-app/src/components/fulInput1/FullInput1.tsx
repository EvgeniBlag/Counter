import React from "react";
import { Inc } from "../inc/Inc";
import { Input } from "../input/Input";
import { Reset } from "../reset/Reset";


type FullInput1PropsType = {
 count:number
 increment:()=> void
 reset:()=>void
 
}


export const FullInput1 = (props:FullInput1PropsType) => {
    return(
        <>
        <div>
        <Input count={props.count}/>
      <div>
         <Inc increment={props.increment} count={props.count} /> 
        <Reset reset={props.reset} count={props.count} />
      </div>
     </div>
     </>
    )
}