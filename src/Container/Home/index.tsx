import  { useState } from "react";
import imagedata from "./Data";

const Home = () => {
  const [items] = useState(imagedata);

  return (
    <>
      <h1>Home page.</h1>

      <div className="container">
        <div className="row">
          {
          items.map((elm) => {
            const { image, name, price } = elm;
            return (
              <div className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <img src={image} alt="not found"></img>
                    <h3 className="card-title">{name}</h3>
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
