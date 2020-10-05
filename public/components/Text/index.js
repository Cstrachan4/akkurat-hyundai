import React, {useState} from 'react';
import './styles.scss';
import clsx from 'clsx';

import Div100vh from 'react-div-100vh';
import { Waypoint } from 'react-waypoint';

export default function Text({
  lineOne,
  lineTwo,
  align
}) {
  const [display, setDisplay] = useState(false);
  const onEnter = () => {
    setDisplay(true);
  }
  const onExit = () =>  {
    setDisplay(false);
  }
  return (
    <Div100vh
      className={clsx(
        'text',
        align && `text--${align}`,
        display && 'text--display'
      )}
    >
      <div>
        <Waypoint onEnter={onEnter} onLeave={onExit} topOffset="10%"/>
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
