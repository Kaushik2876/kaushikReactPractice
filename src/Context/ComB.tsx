// import ComC from "./ComC";
// useContext use kari n context karyu

import { FirstName, LastName } from "Context";
import { useContext } from "react";


const ComB = ()=> {

    const fname= useContext(FirstName);
    const lname= useContext(LastName)

    return(
        <h2>My name is {fname} {lname}</h2>
    ) 
}

export default ComB;