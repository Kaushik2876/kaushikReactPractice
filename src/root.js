/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router,Routes,Link, Route} from "react-router-dom";
import About from "Container/About";
import Home from "Container/Home";
import User from "Container/User/index";
import Loc from "myloaction";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from "./App"
import View from "Container/Home/View";

const Root =()=> {
  // console.log("Root")
  return (
      <Router>
        <Link to="/">Home page  </Link>
        <Link to="/about">About page  </Link>
        <Link to="/User">User page  </Link>
        <Link to="/cdata">Company page  </Link>
        <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/user" element={<User/>} exact/>
        <Route path="/myLocation" element={<Loc/>} exact/> 
        <Route path="/cdata" element={<App/>}/>
        <Route path="product/:productId" element={<View/>}/>
        </Routes>
      </Router>
  
  );
}

export default Root;
