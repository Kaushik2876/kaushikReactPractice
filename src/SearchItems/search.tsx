import Layout from "Container/GlobalLayout/GlobalLayout"
import { useState } from "react";
import Sresult from "./searchResult";

const SearchItems = ()=> {
    const [img,setImg] = useState(" ");
    const inputEvnet = (event:any) =>{
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }
    return(
        <Layout>
            <div className="searchBar">
                <input type="text" placeholder="Search Anything" 
                value={img}
                onChange={inputEvnet}
                />
                <br/><br/>
                <Sresult name={img}/>
            </div>
        </Layout>
    )
}

export default SearchItems;