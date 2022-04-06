import { Fragment } from "react";
import { useLocation } from "react-router-dom";

const Loc = ()=>{
    const location = useLocation();
    console.log(location);

    return (
        <Fragment>
            <p> My location : {location.pathname}</p>
        </Fragment>
    )
}

export default Loc;