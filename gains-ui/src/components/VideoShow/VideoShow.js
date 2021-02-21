import React from 'react';
import styles from './VideoShow.module.css';

export const VideoShow = ({ video }) => {
    
  return (
    <div className={styles.videoDiv}>
      <video id='video'autoPlay loop muted className={styles.video}>
        <source 
          src={video}
          type='video/mp4'
        />
      </video>
      <p>Stock footage provided by Beachfront, downloaded from www.videvo.net</p>
    </div>
  );
}

export default VideoShow;