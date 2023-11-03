import './App.css'
import './components/NavBar/NavBar'
import './components/NavBar/NavBar.css'
import './components/CartWidget/CartWidget.css'
import './components/CartWidget/CartWidget'

import { NavBar } from './components/NavBar/NavBar'
import  ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
    <NavBar/>
      <main>
      <ItemListContainer/>
      </main>
    </>
  )
}

export default App
