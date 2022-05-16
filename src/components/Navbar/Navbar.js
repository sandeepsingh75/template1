import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='header'>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://icon-library.com/images/healthcare-icon/healthcare-icon-7.jpg"
              width="30"
              height="24"
              className='icon'
            />
          </a>
          <h6 className='fw-bold title text-dark fw-bold fs-6 navtitle'>Health </h6>
          <button
            className="navbar-toggler m-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 me-5 mb-lg-0 ">
              <li className="nav-item mx-3">
                <a
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link fw-bold" href="#">
                  Doctor
                </a>
              </li>

              <li className="nav-item mx-3">
                <a className="nav-link fw-bold" href=''>Services</a>
              </li>

              <li className="nav-item mx-3">
                <a className="nav-link fw-bold" href=''>Review</a>
              </li>
            </ul>
            <button classNameName="contact ms2 ">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
        </div>
    );
};

export default Navbar;