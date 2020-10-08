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
  width
}) {
  const videoRef = useRef(null);
  const { displayPlay, url, preview, controls, muted } = video;

  const handlePlayClick = () => {
    if(preview) {
      onChange('video', {
        ...video,
        url:'https://vimeo.com/90509568',
        controls: true,
        muted: false,
        displayPlay: false,
        preview: false
      })
    }
  }

  const height = width ? useTransform(width, latest => latest * 0.5625) : 0;

  return (
    <Div100vh className={clsx('parallax-video')}>
      <button
        className={clsx(
          'parallax-video__play',
          displayPlay && 'parallax-video__play--display'
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
    </Div100vh>
  )
}
