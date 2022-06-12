
import { Dispatch, SetStateAction } from "react"
import classes from "./InputStartValue.module.css"

type InputStartValuePropsType = {
    
    startValue:number
}


export const InputStartValue = (props:InputStartValuePropsType) => {
    return(
        <div  className={classes.InputStartValue}>
            <h1>Start Value :</h1>

            <input
            className={classes.InputValue}
                value={props.startValue}
                
                type="number" />

        </div>
    
    )
}