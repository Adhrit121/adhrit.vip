import React from "react";
import { NavLink } from "react-router-dom";
import './navigation.css';

function Navigation() {
  
  return (
    <div className="navigation" >
      <nav className="navbar navbar-expand navbar-dark py-3 bg-info">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <h2 class="grow" className="text-white"><b class="grow">Adhrit.ᵥᵢₚ</b></h2>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <b  className="text-white" class='grows'>Home</b>
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/about">
                  <b className="text-white" class='grows'>About</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  <b className="text-white" class='grows'>Contact</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/warning">
                  <b class="dont_click">Do Not Click</b>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;