import React, { useState } from "react";
import { Link } from "react-router-dom";
import corazon from "../../asets/img/corazon.gif";
import menuhamburger from '../../asets/icons/menu.svg'
import "./styles/navHome.css";

export default function NavDetails() {

  
  const [control, setControl] =useState(true)

  const handleTogle = (e) => {
    if(control) setControl(false)
    if(!control) setControl(true)
  }

  return (
    <nav className="nav_home">
      <section className="nav_logo_container">
        <img src={corazon} alt="" className="nav_logo" />
        <ul className={control ? "links_container" : "links_container links_container_active"}>
          <li className="nav_list">
            <Link className="nav_link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav_list">
            <Link className="nav_link" to="/create_recipe">Create Recipe</Link>
          </li>          
        </ul>
        <div className="menu_hamburger" onClick={handleTogle}>
          <img className="hamburger_img" src={menuhamburger} alt="menu hamburger" />
        </div>           
      </section>
    </nav>
  );
}
