import { useEffect, useState } from "react";

//using clean up function
const UseEffect1 = () => {
    const [widthCount,setWidthCount] = useState(window.screen.width);
    const [heightCount,setHeightCount] = useState(window.screen.height);


    const actualWidth =()=>{
        console.log(window.innerWidth);
        setWidthCount(window.innerWidth);
        setHeightCount(window.innerHeight);
    }

    useEffect(()=>{
        window.addEventListener("resize",actualWidth)

        return () =>{
        window.removeEventListener("resize",actualWidth)

        }
    });
    return (
        <div>
            <p className="text-center"> The Actual size of Your screen.</p>
            <h1 className="text-center">{heightCount} X {widthCount}</h1>
        </div>
    )
}

export default UseEffect1;