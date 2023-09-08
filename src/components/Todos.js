
//using state hooks

import React, { useState , useEffect } from "react";

const workApi = 'https://dummyjson.com/todos'

const Todos = ()=>{
  const [work, setWork] = useState([])

  const fetchWorks = async ()=>{
    const response = await fetch(workApi)
    const busy = await response.json()
    const allWorks = busy.todos
    setWork(allWorks)
    console.log(allWorks)
  }


  useEffect(()=>{
     fetchWorks()
  }, [])

  return(
    <div>
      <DisplayAllTodo list={work}/>
    </div>
  )
}

export default Todos;




const DisplayAllTodo = ({ list }) => {
  return (
    <div className="container">
      {list.map((dos, index) => {
        return (
          <div key={index} className="row">
            <div className="col-md-3">
              <div className="card-comments">
                <div className="card-body">
                  <h5 className="card-title"><span>Todo:</span>{dos.todo}</h5>
                  <p className="card-text"><span>Complete:</span>{dos.completed? 'True' : 'False'}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div >
  )
}