

import Product from './components/Product';
import Navbar from './components/Navbar';
import Searchproduct from './components/Searchproduct';
import Store from './components/Store';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
        path: "/Searchproduct",
        element: <Store/>
      },
      {
        path: "#",
        element: <h2>Page Not Found</h2>
      }
    ]
  }
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
