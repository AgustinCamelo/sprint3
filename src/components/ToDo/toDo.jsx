import { useState } from 'react'
import './toDo.css'


const ToDo = (props) => {
    const [checked, setChecked] = useState(props.completed || false)

    const onChangeCheckbox = (e) => {
        setChecked(e.target.checked);
    }
    

    return(
        <>
            <li className={props.taskClass}>
            <input type="checkbox" checked={checked} onChange={onChangeCheckbox} className={'checkbox-round'} />
            <p className={checked ? 'completed' : ''}> {props.text} </p>
            </li> <hr /> 
        </>
    )
}

export default ToDo





