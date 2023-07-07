import React from 'react';

function TextwithImg() {
  const jsonData = {
    "heading": "With eyes to the future",
    "paragraph": "Google is working towards correcting this legacy with its new Pixel 6 smartphone, equipped with Real Tone, a camera calibrated to all skin tones.",
    "image": "assets/images/topimgtext.png"
  };

  const { heading, paragraph, image } = jsonData;

  return (
    <div>
      <section className='acknowlede-section'>
        <div className='container'>
          <div className='col-12'>
            <div className='acknowlede-header'  data-aos="fade-up">
              <h2>{heading}</h2>
              <p>{paragraph}</p>
            </div>
          </div>
          <div className='col-12'  data-aos="fade-up" data-aos-duration="1500">
            <img src={image} alt='img' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextwithImg;
