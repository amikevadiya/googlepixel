import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function SliderText({ images, text, textsecond, imageOnLeft, imghorizontal }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div>
      <section className="slidertext-section" id='about-section'>
        <div className="container">
          <div className="row align-items-center justify-content-between">
          {imageOnLeft ? (
              <>
              <div className="col-sm-12 col-md-5 col-lg-4" data-aos="fade-right" data-aos-duration="1200">
                <div className="slidertext-container">
                <p>{text}</p>
                <p>{textsecond}</p>
                </div>
              </div>
           

            <div className="col-sm-12 col-md-7 col-lg-6" data-aos="fade-left" data-aos-duration="1000">
              <div className={`slider-container ${imghorizontal ? ' img-horizontal' : ''}`}>
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index}>
                      <img src={image.src} alt={`Image ${index + 1}`} />
                    </div>
                  ))}
                </Slider>
                <p className='text-sm-block'>{textsecond}</p>
              </div>
            </div>
            </>
               ) : (
              <>
              
              <div className="col-sm-12 col-md-7 col-lg-6" data-aos="fade-right" data-aos-duration="1000">
              <div className={`slider-container ${imghorizontal ? ' img-horizontal' : ''}`}>
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index}>
                      <img src={image.src} alt={`Image ${index + 1}`} />
                    </div>
                  ))}
                </Slider>
                <p className='text-sm-block'>{textsecond}</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-4"  data-aos="fade-left" data-aos-duration="1200">
                <div className="slidertext-container">
                <p>{text}</p>
                <p>{textsecond}</p>

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

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <div className='slider-arrow-left'></div>
    </div>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
           <div className='slider-arrow-right'></div>

    </div>
  );
}

export default SliderText;
