import React from "react";
import { Link } from "react-router-dom";
import corazon from "../../asets/img/corazon.gif";
import "./styles/navHome.css";

export default function NavDetails() {

  return (
    <nav className="nav_home">
      <section className="nav_logo_container">
        <img src={corazon} alt="" className="nav_logo" />
        <ul className="links_container">
          <li className="nav_list">
            <Link className="nav_link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav_list">
            <Link className="nav_link" to="/create_recipe">Create Recipe</Link>
          </li>          
        </ul>              
      </section>
    </nav>
  );
}
