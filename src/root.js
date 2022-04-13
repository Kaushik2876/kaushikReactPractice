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
import TodoApp from "TodoApp/ToApp";
import FormValid from "Container/Formvalidate/FormValid";

const Root =()=> {
  // console.log("Root")
  return (
      <Router>
        <button><Link to="/">Home page  </Link></button>
        <button><Link to="/about">About page  </Link></button>
        <button><Link to="/User">User page  </Link></button>
        <button><Link to="/cdata">Calculate page  </Link></button>
        <button><Link to="/toDoApp">ToDoApp </Link></button>
        <button><Link to="/formValid">Form </Link></button>


        <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/user" element={<User/>} exact/>
        <Route path="/myLocation" element={<Loc/>} exact/> 
        <Route path="/cdata" element={<App/>}/>
        <Route path="product/:productId" element={<View/>}/>
        <Route path="/toDoApp" element={<TodoApp/>} exact/>
        <Route path="/formValid" element={<FormValid/>} exact/>
        

        </Routes>
      </Router>
  
  );
}

export default Root;
