import { ItemCount } from "../ItemCount/ItemCount";
import '../ItemDetail/ItemDetail.css'


function ItemDetail (props) {
    const { id, Image, Marca, Nombre, Precio, Detalles } = props; 
    return (
        <>
      <div className="card mt-5 mb-5 ms-3 text-center col-md-2" key={id}>
              <img className="card-img-top mt-2" src={Image} alt={Nombre} />
        

        <h5 className=""> {Marca}</h5>
        <h6><i className="fa-sharp fa-solid fa-circle-info"></i> {Nombre}</h6>
        <h6><i className="fa-solid fa-asterisk"></i> {Detalles}</h6>
        <p className=""> <i className="fa-solid fa-wallet"></i> ${Precio}</p>
        <ItemCount item={{ id, Marca, Nombre, Precio, Detalles }} />
        </div>
        </>
    );
}

export default ItemDetail;