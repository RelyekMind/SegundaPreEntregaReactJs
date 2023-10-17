import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.img} alt="{item.nombre}" />
        <div className="producto-descripcion">
          <h3 className="nombre">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="precio">${item.precio}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
