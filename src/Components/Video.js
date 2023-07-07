import React from 'react';


class Video extends React.Component{
  componentDidMount = () =>{
    const script = document.createElement("script");
    script.src = "https://players.brightcove.net/6165065566001/WkAEp4m5G_default/index.min.js";
    script.async = false;
    document.body.appendChild(script);
}
  render(){
    return (
      <>
        <section className='video-section'>
         <div style={{ maxWidth: '100%' }}>
          <video id="my-video" className="video-js vjs-fluid" controls data-account="6165065566001" data-player="WkAEp4m5G" data-embed="default" data-video-id="6285539404001" data-playlist-id="" data-application-id=""/>  
        </div>
        </section>
      </>
    )
  }
}

export default Video;