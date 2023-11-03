import React from "react";
import { Link } from "react-router-dom";

function Item({ id, Image, Marca, Nombre, Precio }) {
    return (
        <div className="card mt-3 mb-3 ms-2 mx-2 border-dark text-center col-md-2 card-hover" key={id}>
            <Link to={`/item/${id}`}><img className="card-img-top" src={Image} alt={Nombre} /></Link>
            <div className="card-body">
                <Link to={`/item/${id}`}><h5 className="card-title">{Marca}</h5></Link>
                <span> <i className="fa-sharp fa-solid fa-circle-info"></i> {Nombre}</span>
                <p className="card-text"> <i className="fa-solid fa-wallet"></i> {Precio}</p>
            </div>
        </div>
    );
}

export default Item;
