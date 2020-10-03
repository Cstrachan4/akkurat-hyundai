import React from 'react';
import './styles.scss';
import clsx from 'clsx';

import Div100vh from 'react-div-100vh';

export default function FullImage({
  imageSrc
}) {
  return (
    <Div100vh className={clsx(
      'full-image'
    )}>
      <div>
     	{imageSrc ?
        <img src={imageSrc} />
        :
        null
      }
      </div>
    </Div100vh>
  )
}
