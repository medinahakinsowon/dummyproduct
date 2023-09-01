import React, { useState , useEffect } from "react";


const commentsUrl = 'https://dummyjson.com/comments'

function Comments() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState("")
    const fetchproducts = async () => {
        try {
            setError("")
            setLoader(true)  //loading will start from here 
            const resposne = await fetch(commentsUrl)
            if (!resposne.ok) {
                throw new Error("something happened")
            }
            const data = await resposne.json()
            setData(data.comments)
            setLoader(false)  // remove the true 
            setError("")
            console.log(data.comments)
        } catch (err) {
            console.log(err.message)
            setError(err.message) /// set the error state 
        }
    }
    useEffect(() => {
        fetchproducts()
    }, []);
 return(
  <div>
    <DisplayAllComment list={data}/>
  </div>
 )
}

export default Comments;




const DisplayAllComment = ({ list }) => {
  return (
    <div className="container">
      {list.map((com, index) => {
        return (
          <div key={index} className="row">
            <div className="col-md-3">
              <div className="card-comments">
                <div className="card-body">
                  <h5 className="card-title"><span>Username</span>{com.user.username}</h5>
                  <p className="card-text"><span>Comment</span>{com.body}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div >
  )
}