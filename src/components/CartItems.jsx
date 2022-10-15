import {Button,Image} from "react-bootstrap";
import { useItems } from "./CartContext";

const CartItems = () => {
//Estructura item: {id, title, price, pictureUrl}
console.log("ENTROOO")
const deleteImg = 'https://cdn-icons-png.flaticon.com/512/2741/2741743.png'
const {items,removeItem} = useItems();

return(
    <tbody>
      {items.map((item)=>
      <tr key={item.id} >
        
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>$ {item.price}</td>
        <td>{item.quantity}</td>
        <td>$ {item.price * item.quantity}</td>
        <td><Button variant="outline-light" onClick={() => removeItem(item)}>
          <Image src={deleteImg} width={25}/>
          </Button></td>
          
      </tr>
      )}
    </tbody>
)}

export default CartItems;