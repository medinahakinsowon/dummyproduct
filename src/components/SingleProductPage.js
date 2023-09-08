
import { useLoaderData, useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const SingleProductPage = ()=>{
  const {id} = useParams()
  const productid = id;
  const SinglePro = useLoaderData()
  const newPro = [];
  newPro.push(SinglePro)
  console.log(newPro)
  return(
    <div>
      <h1 className="text-center">This is a single product</h1>
      <h5 className="text-center">You are viewing product: {productid}</h5>
      <SingleProduct single={newPro}/>
    </div>
  )
}
export async function loadersingleproducts({ params }){
    const id = params.id
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    if (!response.ok){

    }
    const data = await response.json()
    console.log(data)
    return data
}

export default SingleProductPage;