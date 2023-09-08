import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link, Outlet } from "react-router-dom";






function SingleProduct({ single }) {
  return (
    <div>
      {single.map((item, index) => {
        return (
          <div key={item.id} className='card_for_single_product'>
            {/* <img src={item.images[0]}/> */}
            <div className='image_product'>
              <LazyLoadImage
                alt={`Image not loading.....`}
                height={'100%'}
                src={item.images[0]} // use normal <img> attributes as props
                effects="blur"
                placeholderSrc="black-and-white"
                opacity={1.2}
                width={'100%'}
              />
            </div>
            <div className="card_product_body">
              <h5 className="card-title"><span>Product:</span>{item.title}</h5>
              <br></br>
              <h5 className="card-title"><span>Brand:</span>{item.brand}</h5>
              <br></br>
              <h5 className="card-title"><span>Category:</span>{item.category}</h5>
              <br></br>
              <h5 className="card-title"><span>Price:</span>N{item.price}.00</h5>
              <br></br>
              <h5 className="card-title"><span>Stock:</span>{item.stock}</h5>
              <br></br>
              <h5 className="card-title"><span>Rating:</span>{item.rating}</h5>
              <br></br>
              <p className="card-text"><span>Description:</span>{item.description}</p>
            </div>
            <Link className="btn btn-danger" to='/'>Product Page</Link>
          </div>
        )
      })}
    </div>
  )
}

export default SingleProduct;



