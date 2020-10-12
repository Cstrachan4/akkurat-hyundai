import React from 'react';
import './styles.scss';
import clsx from 'clsx';

import Div100vh from 'react-div-100vh';

export default function FullImage({
  imageSrc,
  inView,
  viewHeight
}) {
  return (
    <div

      className={clsx(
        'full-image',
        inView && 'full-image--display'
      )}
      style={{height:viewHeight}}
    >
      <div>
     	{imageSrc ?
        <img src={imageSrc} />
        :
        null
      }
      </div>
    </div>
  )
}
