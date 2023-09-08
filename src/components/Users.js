

// using react query



import { useQuery } from "@tanstack/react-query"; 



const api = 'https://dummyjson.com/users';
function Users() {
  const {isLoading, error, data} = useQuery({
    queryKey: ['repoData'],
    queryFn: ()=>
      fetch(api).then((res)=> res.json())
    
  })
  if(isLoading) return <h2>Loading, Pleasa wait..............</h2>
  if(error) return 'An error occurred' + error.message
    return (
        <div className="container ">   
            <DisplayUsers list={data.users} />
        </div>
    )
}

export default Users;



const DisplayUsers = ({ list }) => {
  return (
    <div className="container-fluid">
      {list.map((people, index) => {
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