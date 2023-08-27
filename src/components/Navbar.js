import React from "react";
import { Link, Outlet } from "react-router-dom";
import logoImage from '../images/logoIcon.png';



const Navbar = () => {
  return (
    <div style={{backgroundColor: '#ddd'}}>
      <nav className="nav" style={{height: '12vh', alignItems: 'center', marginLeft: '100px'}}>
      <img src={logoImage} alt="logo" width="55" height="43"/>
        <Link className="nav-link active" style={{fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: 'black'}} aria-current="page" to="/">Home</Link>
        <Link className="nav-link" style={{fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: 'black'}} to="/Searchproduct">Product-Category</Link>
        <Link className="nav-link" style={{fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: 'black'}} to="/Store">Store</Link>
      </nav>
      <Outlet />
    </div>
    

  )
}


export default Navbar;