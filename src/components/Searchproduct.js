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