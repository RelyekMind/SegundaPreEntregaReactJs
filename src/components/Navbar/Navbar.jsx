import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="../img/iconos/rcicon.png " alt="" className="img-logo"></img>
        <h1>RedCats Store</h1>
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
          <Link className="menu-link" to="/productos/mouse">
            Mouse
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/mousepads">
            Mousepads
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/teclados">
            Teclados
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/monitores">
            Monitores
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/auriculares">
            Auriculares
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/contacto">
            Contacto
          </Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
