import Item from "../Item/Item";



function ItemList({ itemArray = [] }){

  return (
    <>
    {itemArray.map((items) => {

      return(
      
        
        <Item key={items.id}
          id={items.id}
          Image={items.Image}
          Marca={items.Marca}
          Nombre={items.Nombre}
          Precio={items.Precio}
        />
        
      );
    }
    )}
    </>
  )
}

export default ItemList;