import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import { NavBar } from './components/NavBar/NavBar.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import CartProvider, { CartContext } from './components/Context/CartContext.jsx'
import Cart from './components/routes/Cart.jsx'
import './components/routes/Cart.css'
import CartOrders from './components/CartOrders/CartOrders.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    {/* <CartContext.Provider value={[]}> */}
      <CartProvider>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<App />} />
          <Route path="/category/:category" element={<>
            <NavBar />
            <ItemListContainer />
          </>
          }
          />
          <Route path="/item/:id" element={<>
            <NavBar />
            <ItemDetailContainer />
          </>} />

          <Route path="/cart" element={<>
          <NavBar />
          <Cart/>
          </>}
          />

          <Route path="/checkout" element={<>
          <NavBar />
          <CartOrders/>
          </>}

          
          />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
)