import { useEffect, useState } from "react";
import SearchIcon from '../search.svg';


const producturl = 'https://dummyjson.com/products';
const searchpro = 'https://dummyjson.com/products/search?q=phone';

const Product = () => {
  const [product, setProduct] = useState([])
  const [info, setInfo] = useState([])
  const [searchProduct, setSearchProduct] = useState('')

  const FetchProduct = async () => {
    const response = await fetch(producturl)
    const productdata = await response.json()
    const productArray = productdata.products
    setProduct(productArray)
    console.log(productArray)
  }
  const fetchProduct = async (id) => {
    const response = await fetch(`${searchpro}${id}`)
    const anoData = await response.json()
    const productDis = anoData.products
    setInfo(productDis)
    console.log(productDis)
  }

  useEffect(() => {
    FetchProduct()
  }, [])

  const searchButton = () => {
    fetchProduct(searchProduct)
  }
  return (
    <div className="backgroundlayout">
      <div className='search'>
        <input
          placeholder='search-product'
          className="input_category"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
        />
        <img src={SearchIcon}
          onClick={searchButton}
          alt='search'
        />
      </div>
      <DisplaysearchProduct list={info}/>
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
              <div className="card card-product-grid">
                <img src={item.images[3]} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title"><span>Product</span>{item.title}</h5>
                  <h5 className="card-title"><span>Brand</span>{item.brand}</h5>
                  <h5 className="card-title"><span>Category</span>{item.category}</h5>
                  <p className="card-text"><span>Description</span>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div >
  )
}



const DisplaysearchProduct = ({ list }) => {
  return (
    <div className="container">
      {list?.map((item, index) => {
        return (
          <div key={index} className="row">
            <div className="col-md-3">
              <div className="card card-product-grid">
                <img src={item.images[3]} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title"><span>Product</span>{item.title}</h5>
                  <h5 className="card-title"><span>Brand</span>{item.brand}</h5>
                  <h5 className="card-title"><span>Category</span>{item.category}</h5>
                  <p className="card-text"><span>Description</span>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div >
  )
}