/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router,Routes,Link, Route} from "react-router-dom";
import About from "Container/About";
import Home from "Container/Home";
import User from "Container/User/index";
import Loc from "myloaction";
import companies from "Container/Map_Filter/index";
import 'bootstrap/dist/css/bootstrap.min.css';

const Root =()=> {
  // console.log("Root")
  return (
      <Router>
        <Link to="/">Home page.</Link>

        <Link to="/about">About page.</Link>
        <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/user" element={<User/>} exact/>
        <Route path="/myLocation" element={<Loc/>} exact/> 
        <Route path="/cdata" element={<companies/>} exact/>
        </Routes>
      </Router>
  
  );
}

export default Root;
