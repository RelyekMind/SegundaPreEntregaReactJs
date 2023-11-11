import React, { useContext } from "react";
import "./CartWidget.css";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className="menu-link" to="/carrito">
        <img className="icono-carrito" src="../img/iconos/carrito.png" alt="" />
        <span className="cart-item-count">{cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
