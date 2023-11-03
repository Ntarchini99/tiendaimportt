import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/client";


function ItemDetailContainer(){
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState([]);
    const Params = useParams();
const itemId = Params.id; 

useEffect(() => {

    const docRef = doc(db, "productos", itemId);
    getDoc(docRef).then((resp) => {
        setItem(
            {...resp.data(), id: resp.id}
        );
    })
    
        
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
}, []);

    if (isLoading) return <Loader/>

    return(
        <>
        <section className='row justify-content-center' >
        <ItemDetail
        id={item.id}
        Image={item.Image}
        Marca={item.Marca}
        Nombre={item.Nombre}
        Precio={item.Precio}
        Detalles={item.Detalles}
        />
        </section>
        </>
    )

}

export default ItemDetailContainer