import { createContext } from "react";
import ComA from "./ComA";


const FirstName = createContext('');
const LastName = createContext('');

const ContextExample = () =>{
    return(
        <>
        <FirstName.Provider value={"KAUSHIK"}>
            <LastName.Provider value={"Prajapati"}>
                <ComA/>
            </LastName.Provider>
        </FirstName.Provider>
        </>
    )
} 


export default ContextExample;
export {FirstName , LastName};