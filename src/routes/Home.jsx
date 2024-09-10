import { useDispatch } from "react-redux"
import { addToCart } from "../store/cartSlice";
import { useFetch } from '../hooks/useFetch'

const Home = () => {
    const dispatch = useDispatch();
    const { data } = useFetch("https://dummyjson.com/products")

    const handleAddToCart = (product) => {
        dispatch(addToCart({...product, quantity: 1}))
    }

  return (
    <div className="je">
        Home
<div className="hopiop">
    
{
                   data && data.map((product) => 

                    <div className='hopi' key={product.id}>
                        <img className='dhjs' src={product.thumbnail} alt="" />
                        <h1 className='hf'>{product.title}</h1>
                        <p className='dhj'>{product.description}</p>
                        <p className='djfm'>{product.price}</p>
                        <button className='que' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                   </div>
                )
                }
</div>
    </div>
  )
}

export default Home