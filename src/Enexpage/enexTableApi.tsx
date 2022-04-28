import axios from "axios";
import { useEffect, useState } from "react";

const TableApi = () => {

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);

      setData(res.data);
    };
    getData();
  },[]);
  return (
    <>
      {/* <h2 className="text-center" style={{color: 'darkcyan'}}>Api Table</h2> */}
      <div className="container">
        <div className="main-heding">
          <h2 className="text-center">
            <span className="font-weight-bold ">ApI</span> Table
          </h2>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curEl:any,index:number) => {
                return (
                  <tr key={index}>
                    <td>{curEl.id}</td>
                    <td>{curEl.name}</td>
                    <td>{curEl.username}</td>
                    <td>{curEl.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default TableApi;
