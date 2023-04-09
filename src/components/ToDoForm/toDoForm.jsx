import "./toDoForm.css";
import { useState } from "react";



const ToDoForm = (props) => {
    const [input, setInput] = useState("")
    
    const onChangeInput = (e) => {
        setInput(e.target.value);
    }
    const onClick = () => {
        props.onClick(input)
        setInput("")
    }
    return (
    <div className="taskBar">
        <div className='emptyCheck'></div>
        <input
        onChange={onChangeInput}
        value={input}
        className={props.inputClass}
        type="text"
        placeholder="Create a new todo..."/>
        <button  className={props.addBtn} onClick={onClick} >Add ToDo</button>
    </div>
    );
};

export default ToDoForm;
