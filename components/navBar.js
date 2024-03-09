import Link from 'next/link';
import React from 'react';
import {useSession} from "next-auth/react"

const NavBar = () => {
  const {data:session}= useSession();
  console.log(session);
  if (session) return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger-subtle">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link btn btn-danger text-primary" aria-current="page" href="/home"><b>Home</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  btn btn-danger text-primary " aria-current="page" href="/home/firstPage"><b>First</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-danger text-primary" href="/users"><b>Users</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-danger text-primary" href="/orders"><b>Orders</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-danger text-primary" href="/prods"><b>Products</b></Link>
              </li>
              {/* <li className="nav-item">
          <Link className="nav-link" href="/orders/2/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/orders/2">Orders/2</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/orders/2/products/7">Orders/2/7</Link>
        </li> */}
              <li className="nav-item">
                <Link className="nav-link btn btn-danger text-primary" href="/about"><b>About Us</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-danger text-primary" href="/dashboard"><b>Dashboard</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-danger text-primary" href="/api/auth/signout"><b>Sign Out</b></Link>
              </li>
        
            </ul>
      
          </div>
        </div>
      </nav>
    </div>
  );
  else
    return (
      <div>
      <nav className="navbar navbar-expand-lg bg-danger-subtle">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link btn btn-danger text-primary " aria-current="page" href="/home"><b>Home</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-danger text-primary " aria-current="page" href="/home/firstPage"><b>First</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-danger  text-primary " href="/users"><b>Users</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-danger text-primary" href="/orders"><b>Orders</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-danger text-primary" href="/about"><b>About Us</b></Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link btn btn-danger text-primary" href="/api/auth/signin"><b>Sign In</b></Link>
             </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
