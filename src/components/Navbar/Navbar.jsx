import React from "react";
import logo from "../../assets/logo.png";
import dollarLogo from "../../assets/coin_dollar_finance_icon_125510.png";
const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar max-w-[1320px] mx-auto">
      <div className="navbar-start flex justify-between lg:justify-normal">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <a>
          <img className="w-14 h-14 hidden lg:flex" src={logo} alt="" />
          <button className="btn btn-soft lg:hidden btn-warning">
            <span>{availableBalance}</span> Coin{" "}
            <img className="w-4" src={dollarLogo} alt="" />
          </button>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
        </ul>
        <button className="btn btn-soft btn-warning">
          <span>{availableBalance}</span> Coin{" "}
          <img className="w-4" src={dollarLogo} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
