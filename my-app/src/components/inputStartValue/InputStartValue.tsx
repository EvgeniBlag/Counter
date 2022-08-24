
import { Dispatch, SetStateAction } from "react"
import classes from "./InputStartValue.module.css"

type InputStartValuePropsType = {
    setStartValue: Dispatch<SetStateAction<number>>
    startValue:number
}


export const InputStartValue = (props: InputStartValuePropsType) => {
    return (
        <div className={classes.InputStartValue}>
            <h1>Start Value :</h1>

            <input
                className={classes.InputValue}
                value={props.startValue}
                onChange={(e) => props.setStartValue(+e.currentTarget.value)}
                type="number" />
        </div>

    )
}