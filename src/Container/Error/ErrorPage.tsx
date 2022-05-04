import Layout from "Container/GlobalLayout/GlobalLayout"
import { NavLink } from "react-router-dom";


const Error = () => {
    return(
        <Layout>
            <div className="searchBar li-style">
                <h1> 404 Error  Page</h1>
                <p>Sorry, This page doesn't exist </p>
                <NavLink to="/"> Back To Home </NavLink>
            </div>
        </Layout>
    )
}
export default Error;