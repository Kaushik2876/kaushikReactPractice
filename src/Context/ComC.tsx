// Consumer us kari ne 

import { FirstName, LastName } from "Context";

const ComC = ()=> {
    return (
        <>
        <FirstName.Consumer>
            {(fname) => { 
                return(
                    <LastName.Consumer>
                        {(lname) => {
                            return(
                                <h1>My name is {fname} {lname}</h1>
                            )
                        }}
                    </LastName.Consumer>
                )
            }}
        </FirstName.Consumer>
        </>
    )
}

export default ComC;