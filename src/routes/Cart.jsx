import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../store/cartSlice";

const Cart = () => {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.products);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product))
    }
    const calculateTotals = () => {
        const subtotal = cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
        const vat = subtotal * 0.12;
        const total = subtotal + vat;
        return { subtotal, vat, total };
      };
      const { subtotal, vat, total } = calculateTotals();
  return (
    <div className="hopiokjp">
        Cart
           
       <div className="hopdsop">
       {
                   cartProducts.map((product) => 

                    <div className="rtrt" key={product.id}>
                        <img className="ehe" style={{width: "100px"}} src={product.thumbnail} alt="" />
                        <h1 className="jqeu5678">{product.title}</h1>
                        <p className="jqaewqu">{product.description}</p>
                        <p className="jqdau">{product.price}</p>
                        <button onClick={() => handleRemoveFromCart(product)}>-</button>
                        <p>{product.quantity}</p>
                        <button onClick={() => handleAddToCart(product)}>+</button>
                   </div>
                )
        }
        <div className="totals">
        <p className="subtotal">Subtotal: ${subtotal.toFixed(2)}</p>
        <p className="vat">VAT (12%): ${vat.toFixed(2)}</p>
        <p className="total">Total: ${total.toFixed(2)}</p>
      </div>
       </div>
    </div>
  )
}

export default Cart