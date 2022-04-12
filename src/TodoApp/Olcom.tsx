import { FaTrash } from "react-icons/fa";


const Olcom = (props:any) =>{
    return (
    <>
    <div className="todo_style"> <FaTrash onClick={() =>{
        props.onSelect(props.id);
    }}/>
    <li className="liApp">{props.text} </li>
    </div>
    </>
    );
}

export default Olcom;