import React from 'react';
import './styles.scss';
import clsx from 'clsx';

import Div100vh from 'react-div-100vh';

export default function InsetImage({
  imageSrc,
  portrait
}) {

  return (
    <Div100vh className={clsx(
      'inset-image',
      portrait && 'inset-image--portrait'
    )}>
     	{imageSrc ?
        <div className={clsx(
          'inset-image__image'
        )}>
          <img src={imageSrc} />
        </div>
        :
        null
      }
    </Div100vh>
  )
}
