import React from 'react';
import './styles.scss';
import clsx from 'clsx';

import Div100vh from 'react-div-100vh';

export default function Text({
  lineOne,
  lineTwo,
  align
}) {

  return (
    <Div100vh
      className={clsx(
        'text',
        align && `text--${align}`
      )}
    >
      <div>
        <div>
       	  {lineOne}
        </div>
        <div>
          {lineTwo}
        </div>
      </div>
    </Div100vh>
  )
}
