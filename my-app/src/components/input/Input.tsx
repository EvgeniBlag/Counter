import React, { useState } from "react";
import classes from "./Input.module.css"

type InputPropsType = {
    count:number
}

export const Input = (props:InputPropsType) => {

 

    return(
        <div>
            <input
                className={classes.Input}
                type="number"
                value={props.count}
                
            />
                   
        </div>
    )
}