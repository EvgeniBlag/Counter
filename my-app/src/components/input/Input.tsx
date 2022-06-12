
import classes from "./Input.module.css"

type InputPropsType = {
    count:number
}

export const Input = (props:InputPropsType) => {

    return(
        <div >
            <input
                className={classes.Input + (props.count === 5 ? " " +  classes.numberAlert : '')}
                value={props.count}       
            />         
        </div>
    )
}