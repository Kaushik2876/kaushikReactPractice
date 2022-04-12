import  { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useHistory} from "react-router-dom";
import imagedata from "./Data";


const Home = () => {
  const [items] = useState(imagedata);

  const history = useNavigate();
const handleClick = (id : number) => {
  history(`/product/${id}`);
 }

  const kd :{} ={         // type object
    color:"red",         //inline css
  }

  return (
    <>
      <h1>Home page.</h1>

      <div className="container">
        <div className="row">
          {
          items.map((elm) => {
            const { id,image, name, price } = elm;
            return (
              <div className="col-sm-4">
                <div className="card" onClick={()=>handleClick(id)}>
                  <div className="card-body">
                    <img id="img" src={image} alt="not found"/>
                    <h3 className="card-title" style={kd}>{name}</h3>
                    <h3 className="card-title">{price}</h3>
                    <button className="btn btn-primary">Buy</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

// ----------------------------------------------------------------
//-----------------  MaP Function----------------------------------
export const studentdata = [
  { id: 1, name: "kaushik", email: "kd@g.com" },
  { id: 2, name: "Gk", email: "gk@g.com" },
  { id: 3, name: "Gk", email: "kdp@g.com" },
  { id: 4, name: "cp", email: "cp@g.com" },
];

const modify = studentdata.map((value) => {
  return {
    name: `${value.name} ${value.id}`,
  };
});

console.log(modify, "home_modify");

export default Home;
