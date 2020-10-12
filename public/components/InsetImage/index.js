import React from 'react';
import './styles.scss';
import clsx from 'clsx';

import Div100vh from 'react-div-100vh';

export default function InsetImage({
  imageSrc,
  portrait
}) {

  return (
    <div
      className={clsx(
        'inset-image',
        portrait && 'inset-image--portrait'
      )}
    >
     	{imageSrc ?
        <div className={clsx(
          'inset-image__image'
        )}>
          <img src={imageSrc} />
        </div>
        :
        null
      }
    </div>
  )
}
