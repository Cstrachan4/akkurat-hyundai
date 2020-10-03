import React from 'react';
import './styles.scss';
import clsx from 'clsx';

import Div100vh from 'react-div-100vh';

export default function Intro({
  name
}) {

  return (
    <Div100vh className={clsx('intro')}>
      <div>
       	<div className="intro__text-one">
          {
            name ? `Hey, ${name}! ` : 'Hey! '
          }
        </div>
        <div className="intro__text-two">
          We'd like to show you something new.
        </div>
      </div>
    </Div100vh>
  )
}
