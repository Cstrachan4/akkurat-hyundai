import React, {useRef} from 'react';
import './styles.scss';
import clsx from 'clsx';

import Div100vh from 'react-div-100vh';
import ReactPlayer from 'react-player';

export default function ParallaxVideo({
  imageSrc,
  videoUrl
}) {
  const videoRef = useRef(null);
  const onProgress = () => {

  }
  const onReady = () => {

  }
  return (
    <Div100vh className={clsx('parallax-video')}>
      <ReactPlayer
        url={videoUrl}
        ref={videoRef}
        className={clsx('parallax-video__video')}
        playing={true}
        loop={true}
        playsinline={true}
        volume={1}
        muted={true}
        autoPlay={true}
        onProgress={onProgress}
        onReady={onReady}
        width='100%'
        height='100%'
        progressInterval={330}
      />
    </Div100vh>
  )
}
