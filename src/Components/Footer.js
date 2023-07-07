import React from 'react';
import slider1 from '../image/1.png';
import slider2 from '../image/2.png';
import pixelsphone from '../image/pixels-phone.png';
import goolelogo from '../image/Pixel6.png';
function Acknowlede() {

  return (
    <div>
      <section className='footer-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-12 col-lg-8 '>
                    <div className='footer-detail'>
                      <img src={goolelogo} alt='img' className='footer-google-logo' data-aos="fade-up" data-aos-duration="1800"/>
                    <h2 data-aos="fade-up" data-aos-duration="1600">Portraits photographed beautifully and authentically</h2>
                    <p data-aos="fade-up" data-aos-duration="1500">Historically, camera technology has overlooked and excluded people with darker skin tones. Today’s cameras carry that same bias. Google and Nine’s portfolio of brands are helping improve the representation of diverse skin tones by producing image galleries for use across the Nine Network and Getty’s Refinery29 We Are Many collection.</p>
                    <a href='#' target='_blank' className='btn-web btn-papayaWhip' data-aos="fade-up" data-aos-duration="1200">
                    Learn more about Pixel 6
                    </a>
                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-4'>
                  <div className='footer-img-box'>
                    <div className='footer-img' data-aos="fade-up" data-aos-duration="1000">
                      <img src={pixelsphone} alt='slider-img'/>
                    </div>
                  </div>
                </div>
            </div>
            <div className='footer-add' >
              <span >ADVERTISING FEATURE</span>
              <img src={goolelogo} alt='img' className='footer-google-logo-sm'/>
            </div>
        </div>
      </section>       
    </div>
  );
}

export default Acknowlede;
