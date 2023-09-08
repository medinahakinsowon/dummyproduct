import { useEffect, useState } from "react";
import SearchIcon from '../search.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link, Outlet } from "react-router-dom";


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
  const fetchProductOne = async (id) => {
    const response = await fetch(`${searchpro}${id}`)
    const anoData = await response.json()
    const productDis = anoData.products
    console.log(productDis)
    setInfo(productDis)
  }

  useEffect(() => {
    FetchProduct()
  }, [])

  const searchButton = () => {
    fetchProductOne(searchProduct)
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
      
      <DisplaysearchProduct list={info} />
      <DisplayAllProduct data={product}></DisplayAllProduct>
    </div>
  )
}


export default Product;



const DisplayAllProduct = ({ data }) => {
  return (
    <div className="container-fluid pt-4">
      {data.map((item, index) => {
        return (
          <div key={index} className="row pt-5">
            <div className="col-sm-12 col-md-4 col-lg-3 pb-4">
              <div className="card">
                {/* <img src={item.images[3]} className="card-img-top" alt={item.title} /> */}
                <LazyLoadImage
                  alt={`Image not loading.....`}
                  height={280}
                  src={item.images[0]} // use normal <img> attributes as props
                  effects="blur"
                  placeholderSrc="black-and-white"
                  opacity={1.2}
                  width={300} 
                  />
                <div className="card-body">
                  <h5 className="card-title"><span>Product</span>{item.title}</h5>
                  <h5 className="card-title"><span>Brand</span>{item.brand}</h5>
                  <h5 className="card-title"><span>Category</span>{item.category}</h5>
                  <p className="card-text"><span>Description</span>{item.description}</p>
                  <Link className="btn btn-danger" to={`products/${item.id}`}>More</Link>
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
      {list.map((item, index) => {
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