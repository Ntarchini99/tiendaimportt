import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import logo from '../../assets/logo/logo-tienda.png';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/client';
import Swal from 'sweetalert2';
import '../CartOrders/CartOrders.css';

function CartOrders() {
  const [pedidoId, setPedidoId] = useState("");
  const { finalizarCompra, calcularTotalAPagar, cartItems } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    repeatEmail: "", 
    phone: ""
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const comprar = () => {
    if (!validar()) {
      return;
    }

    const pedido = {
      buyer: formData,
      items: cartItems,
      total: calcularTotalAPagar(),
      date: Date.now()
    };

    try {
      const pedidosRef = collection(db, "orders");
      addDoc(pedidosRef, pedido)
        .then((doc) => {
          setPedidoId(doc.id);
          finalizarCompra();
          mostrarMensajeConfirmacion(doc.id);
        })
        .catch((error) => {
          console.error("Error al enviar el pedido:", error);
        });
    } catch (error) {
      console.error("Error al enviar el pedido:", error);
    }
  };

  const validar = () => {
    const newErrors = {};

    if (formData.name.length < 8) {
      newErrors.name = "Nombre y Apellido válidos";
    }

    if (formData.email !== formData.repeatEmail) {
      newErrors.email = "Los correos electrónicos no coinciden";
      newErrors.repeatEmail = "Los correos electrónicos no coinciden";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const mostrarMensajeConfirmacion = (pedidoId) => {
    Swal.fire({
      icon: 'success',
      title: 'Gracias por confiar en TIENDAIMPORT ',
      text: `Tu ID de compra es: ${pedidoId}`,
      showCancelButton: false,
      confirmButtonText: 'Cerrar'
    });
  };

  return (
    <>
      <div className="bg-dark d-flex justify-content-center">
        {/* Puedes agregar contenido adicional aquí si es necesario */}
      </div>

      <div className="form-container d-flex flex-column align-items-center mb-3 container-fluid">
        <p className="mt-4 mb-2"><i className="fa-solid fa-arrow-down"></i> Por favor, completa los datos y nos contactaremos a la brevedad para finalizar la compra <i className="fa-solid fa-arrow-down"></i></p>
        <div className="d-inline-flex p-2 row form-container">
          <input
            className="mb-3 form-input"
            name="name"
            type="text"
            placeholder="Nombre y apellido"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            className="mb-3 form-input"
            name="email"
            type="email"
            placeholder="Ingresa tu email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            className="mb-3 form-input"
            name="repeatEmail"
            type="email"
            placeholder="Repetir email"
            value={formData.repeatEmail}
            onChange={handleInputChange}
          />
          <input
            className="mb-3 form-input"
            name="phone"
            type="text"
            placeholder="Ingresa tu telefono"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <button type="button" onClick={comprar} className="form-button">
            Finalizar Compra <i className="fa-regular fa-credit-card"></i>
          </button>
        </div>
        <div className="d-flex justify-content-center">
          {errors.name && <p className="error-form text-center">{errors.name}</p>}
          {errors.email && <p className="error-form text-center">{errors.email}</p>}
        </div>
      </div>
    </>
  );
}

export default CartOrders;
