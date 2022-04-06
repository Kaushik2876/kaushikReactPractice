
// import React ,{useState} from "react";       //option 1
import {useState} from "react";                 //option 2


 const State=()=>{
    const [data,setData]=useState(0);
    function updateData(){
        setData(data+1);
    }

    return (
        <div>
            <h1>{data}</h1>
            <button onClick={updateData}>UpdateData</button>
        </div>
    )
}

export default State;