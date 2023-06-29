import React from "react";
import { AiOutlineSetting, AiOutlineHome } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { RiArrowGoBackFill } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import usa from "../../img/uns.svg";
import lo from "../../img/Lo.svg";
import en from "../";
// import Inbo from "../../";
import { NavLink } from "react-router-dom";

function Inbox() {
  return (
    <div id="inbox">
      <div className="container">
        <div className="inbox">
          <div className="inbox--sidbar">
            <img src={lo} alt="img" />
            <div className="inbox--sidbar__prof">
              <img src={usa} alt="img" />
              <div className="inbox--sidbar__prof--name">
                <h3></h3>
                <p></p>
              </div>
            </div>
            <div className="inbox--sidbar__agaents">
              <NavLink to={"/"}>
                {" "}
                <h2>
                  <BiMessage />
                  Inbox
                </h2>
              </NavLink>
              <NavLink to={"/"}>
                {" "}
                <h2>
                  <FiUser /> Agents
                </h2>
              </NavLink>
              <NavLink to={"/"}>
                {" "}
                <h2>
                  <AiOutlineHome />
                  Realty
                </h2>
              </NavLink>
              <NavLink to={"/"}>
                {" "}
                <h2>
                  <BsCurrencyDollar /> Payment
                </h2>
              </NavLink>
              <div className="inbox--sidbar__agaents--settin">
                <h3>
                  <AiOutlineSetting />
                  settings
                </h3>
                <h4>
                  <RiArrowGoBackFill />
                  logout
                </h4>
              </div>
            </div>
          </div>
          <div className="inbox--search">
            <div className="inbox--search__in">
              <input type="text" placeholder="поиск" />
              <div className="inbox--search__in--btn">
                <img src={en} alt="img" />
                <select>
                  <option value="">English</option>
                  <option value="">Rus</option>
                  <option value="">hlj;kl;k</option>
                </select>
                <div className="inbox--search__in--btn--dot">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            {/* < /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Inbox;
