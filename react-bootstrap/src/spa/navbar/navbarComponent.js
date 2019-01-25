import React from 'react';
 import '../../styling/customize.css'
import { Link } from "react-router-dom";

class NavbarComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-orange">
            <a className="navbar-brand" href="#">
            <img src="/media/logo.png" width="50" height="50" className="d-inline-block align-top" alt=""></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ">
                 <li className="nav-item"><Link className="nav-link" to="/upload">Upload Media</Link></li>
                 <li className="nav-item"><Link className="nav-link" to="/">My Media</Link></li><br></br>
                 <li className="nav-item"><Link className="nav-link" to="/followers">Follwers/Following</Link></li>
                 <li className="nav-item"><Link className="nav-link" to="/account">Account</Link></li> 
              </ul>
            </div>
          </nav>     
        // <header>
        // <nav class="container">
        //         <div class="logo">
        //         </div>
        //         <div class="two">
        //         <Link className="navLinks" to="/upload">Upload Media</Link>
        //         </div>
        //         <div class="three">
        //         <Link className="navLinks" to="/">My Media</Link>
        //         </div>
        //         <div class="four">
        //         <Link className="navLinks" to="/followers">Follwers/Following</Link>
        //         </div>
        //         <div class="five">
        //         <Link className="navLinks" to="/account">Account</Link>
        //         </div>
        // </nav>       
        // </header>   
         );
    }
}
 
export default NavbarComponent;