import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import '../ItemCount/ItemCount.css'
import Swal from 'sweetalert2';


export function ItemCount({ item }) {
    const cartContext = useContext(CartContext);
    const [count, setCount] = useState(1);
  
    function handleClickSuma() {
      setCount(count + 1);
    }
  
    function handleClickResta() {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  
    function onAdd() {
      const newItem = {
        id: item.id,
        nombre: item.Nombre,
        detalles: item.Detalles,
        precio: item.Precio,
        cantidad: count,
      };
      cartContext.addItemToCart(newItem);
      setCount(1);
  
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        position: 'top-end',
        timer: 1000, 
      });
    }
  
    return (
      <>
        <div className="d-flex justify-content-center">
          <button className="btn" onClick={handleClickResta}>
            -
          </button>
          <p className="mt-3">{count}</p>
          <button className="btn" onClick={handleClickSuma}>
            +
          </button>
        </div>
  
        <div>
          <button className="btn btn-dark compra mb-3" onClick={onAdd}>
            Agregar al carrito
          </button>
        </div>
      </>
    );
  }