import  { useState } from "react";
import Olcom from "./Olcom";
import { BiMessageSquareAdd } from "react-icons/bi";



const TodoApp = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState<any>([]);

  const itemEvent = (event: any) => {
    setInputList(event.target.value);
  };
    const listData = () => {
        setItems((oldItems:any) => [...oldItems,inputList]
        );
      setInputList('');
    };

    const deleteItems = (id: number) => {

      setItems((oldItems:any) =>{
        return oldItems.filter((_arrElm:any,index:any) =>{
          return index !== id;
        });
      });
    }
  // console.log(listData)
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1 className="h1app">Todo App</h1>
          <br />
          <input
            className="inputapp"
            type="text" value={inputList}
            placeholder="Add a items"
            onChange={itemEvent}
          />
          <BiMessageSquareAdd className="icon_style" onClick={listData} />
          <ol className="listapp">
            {/* <li className="liApp"> {} </li> */}
            {items?.map((itemval:any,index:number) => {
             return <Olcom  key={index}
             id={index}
             text  = {itemval}
             onSelect={deleteItems}
             />
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
