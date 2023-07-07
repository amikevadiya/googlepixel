import React from 'react';

function Acknowlede() {
  const data = {
    heading: "Acknowledging the past",
    paragraph: "Representing diversity is just one part of the story. As photographer Daphne Nguyen points out, technology also has a role to play in how images are actually photographed.",
    images: [
      {
        src: "assets/images/Acknowled1.png",
        alt: "acknowled-1"
      },
      {
        src: "assets/images/Acknowled2.png",
        alt: "acknowled-2"
      },
      {
        src: "assets/images/Acknowled3.png",
        alt: "acknowled-3"
      }
    ]
  };

  const { heading, paragraph, images } = data;

  return (
    <div>
      <section className='acknowlede-section'>
        <div className='container'>
          <div className='col-12'  >
            <div className='acknowlede-header'>
              <h2 data-aos="fade-up" data-aos-duration="1000">{heading}</h2>
              <p data-aos="fade-up" data-aos-duration="1200">{paragraph}</p>
            </div>
          </div>
          <div className='row'>
            {images.map((image, index) => (
              <div className='col-lg-4 col-md-4 col-12' key={index}>
                <div className='acknowlede-img' data-aos="fade-up" data-aos-duration="1000">
                  <img src={image.src} alt={image.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Acknowlede;
