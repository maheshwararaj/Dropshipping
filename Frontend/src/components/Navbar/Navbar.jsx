import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { Storecontext } from "../../context/Storecontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBagShopping,
  faClose,
  faFireFlameCurved,
  faHandshake,
  faList,
  faSearch,
  faUser,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export const Navbar = ({ setShowLogin }) => {
  const { userdata, getUser, logout } = useContext(Storecontext);
  const [menu, setMenu] = useState("home");
  const [sideMenu, showSideMenu] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    showSideMenu(false);
    document.body.classList.remove("disable-scroll");
  };

  useEffect(() => {
    getUser();
    console.log(userdata)
  }, []);

  const getTotalItemsIntheCart = () => {
    return 0;
  };
  return (
    <div className="navbar-container">
      {/* side Menu bar */}
      {sideMenu && userdata ? (
        <div className="side-menu">
          <div className="profile-name">
            <img src={`/${userdata.image}.jpg`} alt="image" />
            <h3>{userdata.name}</h3>
          </div>
          <Link to={"/profile"} onClick={handleClick}>
            <li>
              <FontAwesomeIcon icon={faUserEdit} /> Edit Profile
            </li>
          </Link >
          <li onClick={handleClick}>
            <FontAwesomeIcon icon={faBagShopping} /> Orders
          </li>
          <li onClick={handleClick}>
            <FontAwesomeIcon icon={faCartShopping} /> &nbsp;Cart
          </li >
          <li onClick={handleClick}>
            <FontAwesomeIcon icon={faHandshake} /> Help
          </li>
          <li onClick={() => {handleclick(); logout()}}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
          </li>
          <FontAwesomeIcon
            className="close"
            onClick={() => {
              showSideMenu(false);
              document.body.classList.remove("disable-scroll");
            }}
            icon={faClose}
          />
        </div>
      ) : (
        ""
      )}

      <div className="top-info">Enjoy Free Delivery for almost all Order !!</div>
      <div className="navbar section">
        <Link to={"/"} className="logo-container">
       
          <img src={assets.urbanfinds} className="logo-img" alt="" />
          <h1 className="logo">
            Urban<span>Finds</span>.
          </h1>
        </Link>
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <Link
            to="/offers"
            onClick={() => setMenu("offers")}
            className={menu === "offers" ? "active" : ""}
          >
            Offers
          </Link>
          <Link
            to="/offers"
            onClick={() => setMenu("orders")}
            className={menu === "orders" ? "active" : ""}
          >
            Orders
          </Link>
          <li
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            <a href="#footer">Contact</a>
          </li>
        </ul>

        <div className="navbar-right">
          <div className="navbar-search-icon">
            <Link to={"/Cart"}>
              <FontAwesomeIcon className="fa-icon" icon={faSearch} />
            </Link>
          </div>
          <div className="navbar-trend-icon">
            <Link to={"/Cart"}>
              <FontAwesomeIcon className="fa-icon" icon={faFireFlameCurved} />
            </Link>
          </div>

          <div className="navbar-cart-icon">
            <Link to={"/Cart"}>
              <FontAwesomeIcon
                className="cart-icon fa-icon"
                icon={faCartShopping}
              />
            </Link>
            <div className={getTotalItemsIntheCart() > 0 ? "dot" : "dot"}></div>
          </div>

          {userdata == null ? (
            <button className="fa-icon" onClick={() => setShowLogin(true)}>
              {" "}
              <FontAwesomeIcon icon={faUser} /> <p>sign in</p>{" "}
            </button>
          ) : (
            <div
              className="nav-profile"
              onClick={() => {
                showSideMenu(true);
                document.body.classList.add("disable-scroll");
              }}
            >
              <img src={`/${userdata.image}.jpg`} alt="profile" />
              <div className="nav-profile-dropdown">

                <Link to={"/profile"} className="link"> 
                    Profile
                </Link>

                <hr />
                <li onClick={logout}>
                 
                  <p>Logout</p>
                </li>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
