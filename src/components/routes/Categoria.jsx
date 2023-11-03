import React, { useEffect, useState } from 'react';
import NavBar from './NavBar'; // Asegúrate de importar tu componente NavBar
import ItemCount from './ItemCount'; // Asegúrate de importar tu componente ItemCount
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/client';

const Categoria = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const productosRef = collection(db, 'productos');
    const consultaCategoria = query(productosRef, where('Categoria', '==', category));

    getDocs(consultaCategoria)
      .then((resp) => {
        const productosFiltrados = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProductos(productosFiltrados);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <>
      <NavBar />
      {isLoading && <h3> Espere por favor.. </h3>}
      {!isLoading && (
        <section className='row justify-content-center'>
          {productos.map((producto) => (
            <div className="card mt-3 mb-3 ms-2 mx-2 border-dark text-center col-md-2 my-card card-hover" key={producto.id}>
              <img className="card-img-top" src={producto.Image} alt={producto.Marca} />
              <div className="card-body">
                <Link to={`/productos/${producto.id}`}>
                  <h5 className="card-title no-underline">{producto.Nombre}</h5>
                </Link>
                <ItemCount />
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default Categoria;
