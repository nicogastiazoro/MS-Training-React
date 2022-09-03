import Item from "./Item";

function ItemList({items}) {
    //Estructura item: {id, title, price, pictureUrl}
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {items.map( item => <Item item={item}/>)}
        </div>
    )
    }
    
export default ItemList;