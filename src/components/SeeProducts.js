
import { useLoaderData, useParams } from "react-router-dom";
import ProductSameCategory from "./ProductSameCategory";
import { Link } from 'react-router-dom';
const SeeProducts = ()=>{
  const {list} = useParams()
  const productid = list;
  const categoryPro = useLoaderData()
  const product = categoryPro[0]
  console.log(categoryPro)
  return(
    <div>
      <h4 className="text-center">You are viewing products from: {productid}</h4>
      <ProductSameCategory data={product}/>
      <div className="col">
      <Link className="btn btn-danger" style={{marginLeft: '100px', marginTop: '200px'}} to="/GetAllCategory">Categories</Link>
      </div>
    </div>
  )
}
export async function loadercategoryproducts({params}){
    const list = params.list
    const response = await fetch(`https://dummyjson.com/products/category/${list}`)
    if (!response.ok){

    }
    const data = await response.json()
    console.log(data.products)
    const mydata = []
    mydata.push(data.products)
    return mydata
}

export default SeeProducts;