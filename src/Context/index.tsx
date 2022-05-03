import Layout from "Container/GlobalLayout/GlobalLayout";
import { createContext } from "react";
import ComA from "./ComA";


const FirstName = createContext('');
const LastName = createContext('');

const ContextExample = () =>{
    return(
        <Layout>
        <FirstName.Provider value={"KAUSHIK"}>
            <LastName.Provider value={"Prajapati"}>
                <ComA/>
            </LastName.Provider>
        </FirstName.Provider>
        </Layout>
    )
} 


export default ContextExample;
export {FirstName , LastName};