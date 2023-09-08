
import { useEffect,useState } from "react";
import { Link, Outlet } from "react-router-dom";

const categoryAllurl = 'https://dummyjson.com/products/categories';

const GetAllCategory = ()=>{
  const [getCategory, setGetCategory] = useState([])

   const fetchAllCategory = async ()=>{
    const response = await fetch(categoryAllurl)
    const categoryData = await response.json()
    setGetCategory(categoryData)
    console.log(categoryData)
   }

   useEffect(()=>{
     fetchAllCategory()
   }, [])

  return(
    <div>
      <DisplayAll lists={getCategory}/>
    </div>
  )
}

export default GetAllCategory;




const DisplayAll = ({ lists }) => {
  return (
    <div className="container">
      {lists.map((list, index) => {
        return (
          <div key={index} className="row">
            <div className="col-md-3">
              <div className="card-comments">
                <div className="card-body">
                  <Link className="text-center" to={`/seeproducts/${list}`}>{list}</Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div >
  )
}