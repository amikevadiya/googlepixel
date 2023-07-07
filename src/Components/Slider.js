import React from 'react';
import Sliderimg from '../image/slider.png';
import googlelogo from '../image/Pixel6.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

function Slider() {
  return (
    <div>
      <section className='slider-section'>
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
            <span className='header-add'>ADVERTISING FEATURE</span>
            <div className='col-sm-12 col-md-6 col-lg-7  order-sm-2 order-1'>
              <div className='slider-img-box'>                
              <div className='slider-img' data-aos="fade-right" data-aos-duration="2000" style={{ backgroundImage: `url(${Sliderimg})` }}>
                  {/* <img src={Sliderimg} alt='slider-img'/> */}
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 order-sm-1 order-2'>
              <div className='slider-header-img'>
                <div className='google-logo' data-aos="fade-left" data-aos-duration="1000">
                  <span className='collaboration-text'>In collaboration with</span>
                  <img src={googlelogo} alt={`googlelogo`}/>
                </div>
                <div className='slider-heading'>
                  <h1 data-aos="fade-left" data-aos-duration="1200" >A new camera for a new age</h1>
                  <span className='collaboration-text-sm '>In collaboration with Google</span>
                  <p className='text-small ' data-aos="fade-left" data-aos-duration="1500">With the new Pixel 6 smartphone, Google has designed a camera with a diverse range of skin tones in mind.</p>
                  {/* <a href='#' className='btn-web btn-lightGreenishYellow ' data-aos="fade-left" data-aos-duration="1800">
                    Scroll for more
                  </a> */}
                   <ScrollLink to="about-section" className='btn-web btn-lightGreenishYellow ' data-aos="fade-left" data-aos-duration="1800" smooth={true} duration={400}>
                   Scroll for more
                    </ScrollLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Slider;
