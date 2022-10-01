import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useItems } from "./CartContext";

function CartWidget() {

    const {items} = useItems();
    const [quantity,setQuantity] = useState(0);
    useEffect(() => {
        setQuantity(items.reduce( (acc, c) => acc + c.quantity, 0))
        });
    console.log(items.reduce( (acc, c) => acc + c.quantity, 0))
    return (
            <>
            <Link to={`/cart`}>
                <img src="/assets/baseline_shopping_cart_black_24dp.png" alt="shopping cart" />
            </Link>
            {items.reduce( (acc, c) => acc + c.quantity, 0)> 0 && (
            <sup><h6 className="m-1">{items.reduce( (acc, c) => acc + c.quantity, 0)}</h6></sup>
             )}
        </>
    )
}
export default CartWidget;

