/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
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
import EnexPage from "Enexpage/Enexpage";
import store from "redux/store";
import Redux from "redux/redux";
import { Provider } from 'react-redux'
import App1 from "UseQuery/App";
import { QueryClient, QueryClientProvider} from 'react-query'
import ContextExample from "Context";
import UseEffect1 from "Container/useEffect/useEffect1";
import SearchItems from "SearchItems/search";

const queryClient = new QueryClient()
const Root =()=> {
  
  // console.log("Root")
  return (
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/user" element={<User/>} exact/>
        <Route path="/myLocation" element={<Loc/>} exact/> 
        <Route path="/cdata" element={<App/>}/>
        <Route path="product/:productId" element={<View/>}/>
        <Route path="/toDoApp" element={<TodoApp/>} exact/>
        <Route path="/formValid" element={<FormValid/>} exact/>
        <Route path="/enexpage" element={<EnexPage/> } exact/>
        <Route path="/redux" element={<Redux/> } exact/>
        <Route path="/query" element={<App1/> } exact/>
        <Route path="/query2" element={<ContextExample />} exact/>
        <Route path="/useEffect1" element={<UseEffect1 />} exact/>
        <Route path="/context" element={<ContextExample />} exact/> 
        <Route path="/search" element={<SearchItems />} exact/> 

        </Routes>
      </Router>
      
      </Provider>
      </QueryClientProvider>
  );
}

export default Root;
