import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="../img/rcicon.png " alt="" className="img-logo"></img>
        <h1>Redcats Store</h1>
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos">
            Productos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Mouse">
            Mouse
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Teclados">
            Teclados
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Mousepads">
            Mousepads
          </Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
