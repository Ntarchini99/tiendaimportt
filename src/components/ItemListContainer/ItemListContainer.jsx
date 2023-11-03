import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/client';

function ItemListContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const productosRef = collection(db, 'productos');

    const consultaCategoria = category
      ? query(productosRef, where('Categorias', '==', category))
      : productosRef;

    getDocs(consultaCategoria)
      .then((resp) => {
        setItems(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [category]);

  if (isLoading) return <Loader />;

  return (
    <section className="row justify-content-center  mx-0">
      <ItemList itemArray={items} />
    </section>
  );
}

export default ItemListContainer;
