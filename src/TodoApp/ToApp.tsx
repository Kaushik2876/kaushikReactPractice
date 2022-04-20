import  { useState } from "react";
import Olcom from "./Olcom";
import { useFormik } from 'formik';
import { BiMessageSquareAdd } from "react-icons/bi";
import * as Yup from 'yup';
import Layout from "Container/GlobalLayout/GlobalLayout";


const TodoApp = () => {
  // const [inputList, setInputList] = useState("");
  const [items, setItems] = useState<any>([]);
  const formik = useFormik({
    enableReinitialize:true,
    initialValues: {
      inputList: '',
    },
    validationSchema:Yup.object().shape({
      inputList:  Yup.string().required('Please input value')
    }),
    onSubmit: (values,{resetForm}) => {
      resetForm({values})
      listData()      
    },
  });
  const { values, handleChange, errors } = formik
  console.log(values,"values");
  
  // const itemEvent = (event:any) => {
  //   setInputList(event.target.value);
  // };
    const listData = () => {
        setItems((oldItems:any) => [...oldItems,values.inputList]
        );
    };

    const deleteItems = (id: number) => {

      setItems((oldItems: any[]) =>{
        return oldItems.filter((_arrElm,index) =>{
          return index !== id;
        });
      });
    }
  // console.log(listData)
  return (
    <Layout>
    <form onSubmit={formik.handleSubmit}>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1 className="h1app">Todo App</h1>
          <br />
          <input
            className="inputapp"
            type="text" 
            placeholder="Add a items"
            value={values.inputList}
            name="inputList"
            onChange={handleChange}
          />
          {errors.inputList}
          <BiMessageSquareAdd className="icon_style" onClick={()=>formik.handleSubmit()} />
          <ol className="listapp">
            {/* <li className="liApp"> {} </li> */}
            {items?.map((itemval:any,index:number) => {
             return <Olcom key={index}
             id={index}
             text  = {itemval}
             onSelect={deleteItems}
             />
            })}
          </ol>
        </div>
      </div>
    </form>
    </Layout>
  );
};

export default TodoApp;
