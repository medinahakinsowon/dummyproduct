import { useEffect, useState } from "react";



const producturl = 'https://dummyjson.com/products';

const Product = () => {
  const [product, setProduct] = useState([])

  const FetchProduct = async () => {
    const response = await fetch(producturl)
    const productdata = await response.json()
    const productArray = productdata.products
    setProduct(productArray)
    console.log(productArray)
  }

  useEffect(() => {
    FetchProduct()
  }, [])


  return (
    <div className="backgroundlayout">
      <DisplayAllProduct data={product}></DisplayAllProduct>
    </div>
  )
}


export default Product;



const DisplayAllProduct = ({ data }) => {
  return (
    <div className="container">
      {data.map((item, index) => {
        return (
          <div key={index} className="row">
            <div className="col-md-3">
              <div class="card card-product-grid">
                <img src={item.images[3]} class="card-img-top" alt={item.title} />
                <div class="card-body">
                  <h5 class="card-title"><span>Product</span>{item.title}</h5>
                  <h5 class="card-title"><span>Brand</span>{item.brand}</h5>
                  <h5 class="card-title"><span>Category</span>{item.category}</h5>
                  <p class="card-text"><span>Description</span>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div >
  )
}



