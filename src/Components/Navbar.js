import React, { Component } from 'react';
import PropTypes from 'prop-types'


export class Navbar extends Component {
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{fontFamily:"sans-serif", display:"flex", alignContent:"center", alignItems:"center", fontSize:"15px", position:"sticky", top:"0", zIndex:"100"}}>
          <div className="container-fluid text-lg ">
            <a className="navbar-brand ms-auto" style={{ display:"flex", alignContent:"center", alignItems:"center", fontSize:"18px"}} href="/">NewsMonkey</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <a className="nav-link active" aria-current="page" href="https://news-web-app-git-main-mr-kbrkd.vercel.app/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " href="https://github.com/mr-kbRKD/News-Web-App">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " href="https://my-portfolio-kbrkd.vercel.app/">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
