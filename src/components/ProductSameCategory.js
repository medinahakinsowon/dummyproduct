
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const ProductSameCategory = ({ data }) => {
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
                </div>
              </div>
              
            </div>
          </div>
        )
      })}
    </div >
  )
}

export default ProductSameCategory;