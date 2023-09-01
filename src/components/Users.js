
import { useState, useEffect } from "react";




const api = 'https://dummyjson.com/users';
function Users() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState("")
    const fetchproducts = async () => {
        try {
            setError("")
            setLoader(true)  //loading will start from here 
            const resposne = await fetch(api)
            if (!resposne.ok) {
                throw new Error("something happened")
            }
            const data = await resposne.json()
            setData(data.users)
            setLoader(false)  // remove the true 
            setError("")
            console.log(data.users)
        } catch (err) {
            console.log(err.message)
            setError(err.message) /// set the error state 
        }
    }
    useEffect(() => {
        fetchproducts()
    }, []);
    return (
        <div className="container ">   
            {loader && <h2>Loading users.......</h2>}
            {!loader &&   <DisplayUsers list={data} />}
        </div>
    )
}

export default Users;



const DisplayUsers = ({ list }) => {
  return (
    <div className="container-fluid">
      {list?.map((people, index) => {
        return (
          <div key={index} className="row">
            <div className="col-md-3">
              <div className="card card-product-grid">
                <img src={people.image} className="card-img-top" alt={people.username} />
                <div className="card-body">
                  <h5 className="card-title"><span>First-Name</span>{people.firstName}</h5>
                  <h5 className="card-title"><span>Last-Name</span>{people.lastName}</h5>
                  <h5 className="card-title"><span>Email</span>{people.email}</h5>
                  <p className="card-text"><span>MaidenName</span>{people.maidenName}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div >
  )
}