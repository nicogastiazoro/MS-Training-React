import Item from "./Item";
import { Link } from "react-router-dom";

function ItemList({ items }) {
  //Estructura item: {id, title, price, pictureUrl}
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {items.length ? (
        items.map((item) => 
          <Link to={`/item/${item.id}`} key={item.id}>
            <Item item={item}/>
          </Link>)
      ) : (
        <h2>Cargando items...</h2>
      )}
    </div>
  );
}

export default ItemList;
