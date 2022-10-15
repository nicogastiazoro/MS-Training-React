import Item from "./Item";

function ItemList({ items }) {
  //Estructura item: {id, title, price, pictureUrl}
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {items.length ? (
        items.map((item) => 
            <Item key={item.id} item={item}/>
      )) : (
        <h2>Cargando items...</h2>
      )}
    </div>
  );
}

export default ItemList;
