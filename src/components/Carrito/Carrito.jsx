import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Carrito.css";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="checkout-container">
      <h1 className="main-title"> Carrito</h1>

      {carrito.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.titulo}</h3>
          <p>Cantidad: {prod.cantidad}</p>
          <p>Precio unitario: ${prod.precio}</p>
          <p>Total: ${prod.precio * prod.cantidad}</p>
        </div>
      ))}

      {carrito.length > 0 ? (
        <>
          <h2> Precio Total: ${precioTotal()}</h2>
          <button className="vaciar" onClick={handleVaciar}>
            Vaciar
          </button>
          <Link className="finalizar" to="/checkout">
            Finalizar compra
          </Link>
        </>
      ) : (
        <h2>El carrito está vacío.</h2>
      )}
    </div>
  );
};

export default Carrito;
