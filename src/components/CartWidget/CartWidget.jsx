
import { useContext } from "react";
import  Logo  from "../../assets/icons/carrito.png";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import '../CartWidget/CartWidget.css';

export const CartWidget = () => {
    const cartContext = useContext(CartContext);

    const totalItemCount = cartContext.cartItems.reduce((total, item) => total + item.cantidad, 0);

    
    return(
        <>
        <Link to="/cart"><button className="btn btn-outline-secondary btncarro" id="verCarro">
                <img src={Logo} alt="" /> {totalItemCount}
            </button>
        </Link>
        </>
    )
}