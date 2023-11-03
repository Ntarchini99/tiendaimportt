import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export function useCartContext() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [carro, setCarro] = useState([]);
    const [order, setOrder] = useState({})

    const addItemToCart = (item) => {
        const isInCart = carro.findIndex((cartItem) => cartItem.id === item.id);

        if (isInCart !== -1) {
            
            const actualizarItemsCarro = carro.map((cartItem, index) =>
                index === isInCart
                    ? { ...cartItem, cantidad: cartItem.cantidad + item.cantidad }
                    : cartItem
            );
            setCarro(actualizarItemsCarro);
        } else {
            
            setCarro([...carro, item]);
        }
    };

    const calcularTotalAPagar = () => {
        const total = carro.reduce((total, item) => total + item.precio * item.cantidad, 0);
        return total;
    };

    const removeItem = (itemId) => {
        const actualizarCarro = carro.filter((item) => item.id !== itemId);
        setCarro(actualizarCarro);
    };

    const finalizarCompra = () => {
       
        setCarro([]);
    };

    
    return (
        <CartContext.Provider
            value={{
                cartItems: carro,
                addItemToCart,
                calcularTotalAPagar,
                removeItem,
                finalizarCompra,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;