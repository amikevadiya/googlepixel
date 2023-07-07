import React from 'react';
import slider3 from '../image/fullimgtext.png';

function FullImgText({ smalltext, text, imageOnLeft ,image , backgroundcolorcode }) {
  return (
    <div>
      <section className='fullimgtext-section'  style={{ background: backgroundcolorcode }}>
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
          {!imageOnLeft ? (
              <>
            <div className='col-sm-12 col-md-6 col-lg-5 '>
              <div className='slidertext-container-fullimg' data-aos="fade-right" >
                <h2>{text}</h2>
                <span className='text-small'>– {smalltext}</span>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6 '>
              <div className='img-full-container'>
                <div className='img-full-box' style={{ backgroundImage: `url(${image})` }}>
                </div>
              </div>
            </div>
            </>
            ) : (
              <>
                  <div className='col-sm-12 col-md-6 col-lg-6 full-img-left'>
              <div className='img-full-container'>
                <div className='img-full-box' style={{ backgroundImage: `url(${image})` }}>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-5 ' data-aos="fade-left" >
              <div className='slidertext-container-fullimg'>
                <h2>{text}</h2>
                <span className='text-small'>– {smalltext}</span>
              </div>
            </div>
              </>
              )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FullImgText;
