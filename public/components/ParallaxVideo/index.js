import React from 'react';
import './styles.scss';
import clsx from 'clsx';

import Div100vh from 'react-div-100vh';

export default function ParallaxVideo({
  imageSrc
}) {

  return (
    <Div100vh className={clsx('parallax-video')}>
     	{imageSrc ? <img src={imageSrc} /> : null }
    </Div100vh>
  )
}
