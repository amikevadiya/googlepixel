import React, { useEffect } from 'react';
import Slider from './Components/Slider';
import SliderText from './Components/SlideText';
import ImgText from './Components/ImgText';
import FullImgText from './Components/FullImgText';
import Acknowlede from './Components/Acknowlede';
import Video from './Components/Video';

import TextwithImg from './Components/TextwithImg';
import Slidertextdatas from './Data/Slidertext.json';
import jsonData from './Data/imgtext.json';
import Fullimgtextdata from './Data/FullImgText.json';

function HomePage() {
     const images = jsonData.images;
  const Slidertextdata = Slidertextdatas.Slidertextdata;
  const Fullimgtexts = Fullimgtextdata.Fullimgtexts;

  const images1 = [
    { src: "assets/images/1.png" },
    { src: "assets/images/2.png" },
    { src: "assets/images/3.png" },
    { src: "assets/images/4.png" }
  ];

  const images2 = [
    { src: "assets/images/5.png" },
    { src: "assets/images/6.png" },
    { src: "assets/images/7.png" }
  ];

  const images3 = [
    { src: "assets/images/8.png" },
    { src: "assets/images/9.png" },
    { src: "assets/images/10.png" },
    { src: "assets/images/11.png" },
    { src: "assets/images/12.png" },
    { src: "assets/images/13.png" },
    { src: "assets/images/14.png" },
    { src: "assets/images/15.png" }
  ];
  return (  
    <div>        
      <Slider />
      <SliderText images={images1} text={Slidertextdata[0].text} imageOnLeft={true} textsecond={Slidertextdata[0].textsecond} />

      <ImgText image={`${process.env.PUBLIC_URL}/${images[0].src}`} text={images[0].text} imageOnLeft={true} beforecolor={images[0].beforecolor}/>
      <FullImgText image={`${process.env.PUBLIC_URL}/${Fullimgtexts[0].src}`} text={Fullimgtexts[0].text} smalltext={Fullimgtexts[0].smalltext} imageOnLeft={false} backgroundcolorcode={Fullimgtexts[0].backgroundcolorcode}/>

      <Acknowlede />

      <ImgText image={`${process.env.PUBLIC_URL}/${images[1].src}`} text={images[1].text} beforecolor={images[1].beforecolor} imageOnLeft={false}  />
      <Video />

      <SliderText images={images2} text={Slidertextdata[1].text} imageOnLeft={false}  textsecond={Slidertextdata[1].textsecond}/>

      <TextwithImg />

      <ImgText image={`${process.env.PUBLIC_URL}/${images[2].src}`} text={images[2].text} beforecolor={images[2].beforecolor}  imgvertical={true} imgbeforebottom={false} />
      <FullImgText image={`${process.env.PUBLIC_URL}/${Fullimgtexts[1].src}`} text={Fullimgtexts[1].text} smalltext={Fullimgtexts[1].smalltext} backgroundcolorcode={Fullimgtexts[1].backgroundcolorcode} imageOnLeft={true} />

      <ImgText image={`${process.env.PUBLIC_URL}/${images[3].src}`} text={images[3].text} beforecolor={images[3].beforecolor}  imgvertical={true} imgbeforebottom={true}/>
      <SliderText images={images3} text={Slidertextdata[2].text} imageOnLeft={false} imghorizontal={true}  textsecond={Slidertextdata[2].textsecond}/>

              
    </div>
  );
}

export default HomePage;
