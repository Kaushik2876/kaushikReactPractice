import { FaAlignJustify, FaEnvelopeSquare, FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  const image: any = require("Asset/img/logo1.png");
  let name = "Mark";

  const toggleMenu=()=>{
    setIsOpen(!isOpen)
  }
  return(
      <>
      <div className="container-fluid enexcontainer">
        <div className="row">
          <div className="col-sm-2">
            <img className="imgsize" src={image} alt="not found" />
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
                <div>
                  <FaEnvelopeSquare className="icon" />
                </div>
              </li>
      <div className="side-bar-menu--wrapper">
      <FaAlignJustify id="icon"  onClick={toggleMenu}/>
        {isOpen && <ul className="side-bar-menu">
          {/* <li>This is Toggle Menu</li> */}
        <li className="li-style"><Link to="/">Home page  </Link></li>
        <li className="li-style"><Link to="/about">About page  </Link></li>
        <li className="li-style"><Link to="/User">User page  </Link></li>
        <li className="li-style"><Link to="/cdata">Calculate page  </Link></li>
        <li className="li-style"><Link to="/toDoApp">ToDoApp </Link></li>
        <li className="li-style"><Link to="/formValid">Form </Link></li>
        <li className="li-style"><Link to="/enexpage">EnexPage</Link></li>
        <li className="li-style"><Link to="/redux">Redux Counter</Link></li>
        <li className="li-style"><Link to="/query">Query API</Link></li>
        </ul>}
      </div>
            </ul>
          </div>
        </div>
      </div>
      </>
  )
}

export default Header;