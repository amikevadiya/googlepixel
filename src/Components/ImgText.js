import React from 'react';

function ImgText({ image, text, imageOnLeft, beforecolor, imgvertical, imgbeforebottom }) {
  return (
    <div>
      <section className='imgtext-section' >
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
            {imageOnLeft ? (
              <>
                <div className={`col-sm-12 col-md-6 col-lg-7  ${imgvertical ? ' img-vertical' : ''}${imageOnLeft ? ' img-onleft' : ''}`} >
                  <div className='img-text-container '>
                    <div className='img-text-before' style={{ background: beforecolor }}  data-aos="fade-right" data-aos-duration="1000" ></div>
                    <img src={image} alt='slider'  data-aos="fade-right" data-aos-duration="1500"  data-aos-delay="50"/>
                  </div>
                </div>
                <div className={`col-sm-12 col-md-6 col-lg-4 ${imageOnLeft ? ' img-onleft-text' : ''}`}>
                  <div className='imgtext-container'  data-aos="fade-left" data-aos-duration="1500">
                    <p dangerouslySetInnerHTML={{ __html: text }}></p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={`col-sm-12 col-md-6 col-lg-4 ${!imageOnLeft ? ' img-right-text' : '' } `}>
                  <div className='imgtext-container'   data-aos="fade-right" data-aos-duration="1500" >
                    <p dangerouslySetInnerHTML={{ __html: text }}></p>
                  </div>
                </div>
                <div className={`col-sm-12 col-md-6 col-lg-7 ${imgvertical ? ' img-vertical' : '' } ${!imageOnLeft ? ' img-onright' : ''} ${imgbeforebottom ? ' img-beforebottom' : '' }`}>
                  <div className='img-text-container img-text-right animation-right'>
                    <div className='img-text-before' style={{ background: beforecolor }} data-aos="fade-left" data-aos-duration="1000" ></div>
                    <img src={image} alt='slider' data-aos="fade-left" data-aos-duration="1500"  data-aos-delay="50"/>
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

export default ImgText;
