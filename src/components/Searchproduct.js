import {useState} from "react";
import SearchIcon from '../search.svg';

const categoryurl = 'https://dummyjson.com/products/category/'

const Searchproduct = () => {
  const [product, setProduct] = useState([])
  const [searchCategory, setSearchCategory] = useState('')

  const fetchCategory = async (prod) => {
    const response = await fetch(`${categoryurl}${prod}`)
    const categories = await response.json()
    const productCategory = categories.products
    setProduct(productCategory)
    console.log(productCategory)
    
  }

  const searchButton = () => {
    fetchCategory(searchCategory)
  }

  return (
    <div>
      <div className='search'>
        <input
          placeholder='search for category'
          className="input_category"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        />
        <img src={SearchIcon}
          onClick={searchButton}
          alt='search'
        />
      </div>
      <div className="display_box">
        <DisplayProduct data={product}></DisplayProduct>
      </div>
    </div>
  )
}


export default Searchproduct;




const DisplayProduct = ({ data }) => {
  return (
    <div className="container-fluid">
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