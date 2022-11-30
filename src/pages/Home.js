import { useDispatch, useSelector } from "react-redux";
import { useProductsListener } from "../config/firebase";
import {addProduct, deleteProduct} from "../redux/productsSlice"
export default function Home() {
  useProductsListener();
  const products = useSelector((state)=> state.products.products)

  const dispatch = useDispatch();

  console.log(products)
  return (
    <div>
      <button onClick={()=> {
        dispatch(addProduct());
      }}>+</button>
      {
        products.map((product)=>(
          <div>
        <h2>{product.name}</h2>
        <button onClick={()=> {
         dispatch(deleteProduct(product.id))
        }}>delete</button>
          </div>
        ))
      }
    </div>
  );
}