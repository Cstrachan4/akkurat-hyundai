import React, {useEffect,useState} from 'react';
import './styles.scss';
import clsx from 'clsx';

import Div100vh from 'react-div-100vh';

export default function Slideshow({
  pathStart,
	images
}) {
  const [activeSlide,setActiveSlide] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if(activeSlide < images.length - 1) {
        setActiveSlide(activeSlide + 1);
      } else {
        setActiveSlide(0);
      }
    },250);
  },[activeSlide]);

  return (
    <div className={clsx('slideshow')}>
      <div className="slideshow__images">
     	{images.map((image,i)=>{
     		return (
     			<Slide key={i} image={image} pathStart={pathStart} active={i === activeSlide} />
     		)
     	})}
      </div>
    </div>
  )
}

export function Slide({
  pathStart,
	image,
  active
}) {
  return (
    <div className={clsx('slideshow__image', active && 'slideshow__image--active')}>
     	<img src={`${pathStart}${image}`} />
    </div>
  )
}


// 3500
