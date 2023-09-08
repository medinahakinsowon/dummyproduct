

import Product from './components/Product';
import Navbar from './components/Navbar';
import Searchproduct from './components/Searchproduct';
import Store from './components/Store';
import Users from './components/Users';
import Comments from './components/Comments';
import Todos from './components/Todos';
import GetAllCategory from './components/GetAllCategory';
import SingleProductPage, { loadersingleproducts } from './components/SingleProductPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SeeProducts, {loadercategoryproducts} from './components/SeeProducts';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Product />
      },
      {
        path: "/Searchproduct",
        element: <Searchproduct />
      },
      {
        path: "/Store",
        element: <Store/>
      },
      {
        path: "/users",
        element: <Users/>
      },
      {
        path: "/Comments",
        element: <Comments/>
      },
      {
        path: "/Todos",
        element: <Todos/>
      },
      {
        path: "/GetAllCategory",
        element: <GetAllCategory/>
      },
      {
        path: "#",
        element: <h2>Page Not Found</h2>
      }
    ]
  },
  {
    path: "/products/:id",
    element: <SingleProductPage/>,
    loader : loadersingleproducts
  },
  {
    path: "/seeproducts/:list",
    element: <SeeProducts/>,
    loader : loadercategoryproducts
  },
])

function App() {
  return (
    <div className="App">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
