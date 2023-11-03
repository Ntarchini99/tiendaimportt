import logo from '../../assets/logo/logo-tienda.png';
import { CartWidget } from "../CartWidget/CartWidget.jsx";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../NavBar/NavBar.css'

export const NavBar = () => {
  const {category} = useParams();

  return(
    <header>
  <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm bg-secondary navbar-dark border-bottom border-dark" data-bs-theme="dark">
    <div className="container-fluid">
      <Link to="/">
        <div className="navbar-brand">
          <img src={logo} alt="Logo"/>
        </div>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
            <ul className="dropdown-menu">
              <li><Link to={`/Category/Celulares`} className="dropdown-item">Celulares</Link></li>
              <li><Link to={`/Category/Notebooks`} className="dropdown-item">Notebooks</Link></li>
              <li><Link to={`/Category/Tablets`} className="dropdown-item">Tablets</Link></li>
            </ul>
          </li>
        </ul>
        <CartWidget/>
      </div>
    </div>
  </nav>
</header>

);
};