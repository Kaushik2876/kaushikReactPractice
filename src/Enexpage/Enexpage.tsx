import {
  FaAlignJustify,
  FaEnvelopeSquare,
  FaEquals,
  FaRegBell,
} from "react-icons/fa";
import { FiSettings, FiSliders } from "react-icons/fi";

const EnexPage = () => {
  const image: any = require("Asset/img/fiverr-logo-1.png");
  let name = "Mark";
  return (
    <>
      <div className="container-fluid enexcontainer">
        <div className="row">
          <div className="col-sm-2">
            <img className="imgsize" src={image} alt="not found" />
            {/* style="height: 70px; width: 80px; margin-left: 85px;" */}
          </div>
          <div className="col-sm-7"> </div>
          <div className="col-sm-3">
            <ul className="nav nav-tabs">
              <li className="liSize">

                <FaRegBell className="icon" />
              </li>
              <li className="liSize">
                <div className="round"> </div>
              </li>
              <li className="liSize">
                <div className="font1">{name}</div>
              </li>
              <li className="liSize">
                <div  className="dropdown">
                < FaEnvelopeSquare className="icon" />
                </div>
              </li>
              <li className="liSize">
              <FaAlignJustify className="icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
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
          <div className="col-sm-6">
            <div className="fontSize">
              Bill Date: Mar 31,2021 to Apr 14,2022
            </div>
          </div>
          <div className="col-sm-1"></div>
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
            <FiSliders /> <FiSettings />
          </div>
          {/* <div className="col-sm-1 " ></div> */}
        </div>
      </div>
      {/* <div className="container-fluid table">
        <div className="row">
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Firstname</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kaushik</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Chintan</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Maulik</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default EnexPage;
