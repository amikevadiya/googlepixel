import React from 'react';
import logo from '../image/heading.svg';
function Navbar() {
 
  return (
    <div>
      <section className='navbar-section'>
        <div className='container-fluid'>
          <div className='nav-bar'>
            <div className='row justify-content-between text-center'>
                <div className='col-lg-4 d-lg-block d-none'>
                  <div className='arrow-icon'>
                    <div className='arrow-back'>
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <span>BACK TO MAIN SITE</span>
                  </div>                    
                </div>
                <div className='col-lg-4'>
                  <img src={logo} alt='logo'/>
                </div>
                <div className='col-lg-4  d-lg-block d-none'>
                  <div className='share-div'>
                  <span>SHARE</span>
                  <ul className='share-icon'>
                    <li>
                      <a href='#' target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href='#' target='_blank'><i className="fa-brands fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href='#' target='_blank'><i className="fa-solid fa-envelope"></i></a>
                    </li>
                    <li>
                      <a href='#' target='_blank'><i className="fa-sharp fa-solid fa-print"></i></a>
                    </li>
                  </ul>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>       
    </div>
  );
}

export default Navbar;
