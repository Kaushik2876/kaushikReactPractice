import { FaEquals} from "react-icons/fa";
import { FiSettings, FiSliders } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import EnexTable from "./EnexTable";
import Layout from "Container/GlobalLayout/GlobalLayout";
import TableApi from "./enexTableApi";
// import { useState } from "react";


const EnexPage = () => {

  return (
    <Layout>
      <div className="container-fluid container2">
        <div className="row">
          <div className="col-sm-3">
            <div className="finDiv">Finance</div>
          </div>
          <div className="col-sm-7"></div>
          <div className="col-sm-2">
            <div>
              <button className="btn btn-primary">
                <b> Add To Data</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid container2">
        <div className="row  nav1">
          {/* <div className="col-sm-12"> */}
          <ul className="nav nav-tabs">
            <li className="col-sm-1"></li>
            <li className="li1 col-sm-1">Savings</li>
            <li className="li2 col-sm-2">Bill Completeness</li>
            <li className="li1 col-sm-2">Account Payable</li>
            <li className="li1 col-sm-2">Bills & Accounts</li>
            <li className="li1 col-sm-2"></li>
            <li className="li2 col-sm-1">
              <FaEquals />
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
      <div className="container-fluid container3">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-5">
            <div className="fontSize">
              Bill Date: Mar 31,2021 to Apr 14,2022
            </div>
          </div>
          <div className="col-sm-3"></div>
          <div className="col-sm-2">
            <div>
              <input
                className="inputStyle"
                type="text"
                placeholder=" Search"
              ></input>
            </div>
          </div>
          <div className="col-sm-1" id="space">
            <FiSliders /> 
            <FiSettings />
          </div>
        </div>
      </div>
      <div className="container-fluid table">
        <EnexTable/>
      </div>
      
      <TableApi/>
     
    </Layout>
  );
};

export default EnexPage;
