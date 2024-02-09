import React from 'react';
import YouTube from 'react-youtube';
import './Egitim.css';

const Egitim = () => {
  const videos = [
    'oBYsWGjg1HM',
    'GfP7RkKLAzw',
    'p_LHLXFTOm8',
    '0lrfRxc-rp8',
    'A8txWZcSRZ8'
   
  ];

  return (
    <div className="egitim-container">
      <h2>Eğitim Videoları</h2>
      <div className="egitim-row">
        {videos.map((videoId, index) => (
          <div className="egitim-video" key={index}>
            <YouTube videoId={videoId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Egitim;