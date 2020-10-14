import React, {useRef} from 'react';
import './styles.scss';
import clsx from 'clsx';

import Div100vh from 'react-div-100vh';
import ReactPlayer from 'react-player';
import PlayIcon from 'assets/images/ui/play-button.svg';

import { motion, useTransform } from 'framer-motion';

export default function ParallaxVideo({
  video,
  onChange,
  width,
  viewHeight
}) {
  const videoRef = useRef(null);
  const { displayPlay, url, preview, controls, muted } = video;

  const handlePlayClick = () => {
    if(preview) {
      onChange('video', {
        ...video,
        url:'https://platform.akkurat.tv/wp-content/uploads/2020/09/90s_SUPER_HYUNDAI_IONIQ_200918_4k_s.mp4',
        controls: true,
        muted: false,
        displayPlay: false,
        preview: false
      })
    }
  }

  const height = width ? useTransform(width, latest => latest * 0.5625) : 0;

  return (
    <div style={{height:viewHeight}} className={clsx('parallax-video')}>
      <button
        className={clsx(
          'parallax-video__play',
          (displayPlay && preview) && 'parallax-video__play--display'
        )}
        onClick={handlePlayClick}
      >
        <PlayIcon />
      </button>
      <motion.div style={{width:width, height: height}} className="parallax-video__container">
        <ReactPlayer
          url={url}
          ref={videoRef}
          className={clsx('parallax-video__video')}
          playing={true}
          loop={true}
          playsinline={true}
          volume={1}
          muted={muted}
          autoPlay={true}
          controls={controls}
          width='100%'
          height='100%'
          progressInterval={330}
        />
      </motion.div>
    </div>
  )
}
