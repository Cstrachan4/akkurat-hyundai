import React, {useState} from 'react';
import './styles.scss';
import clsx from 'clsx';

import Div100vh from 'react-div-100vh';
import { Waypoint } from 'react-waypoint';

export default function Text({
  lineOne,
  lineTwo,
  align,
  viewHeight
}) {
  const [display, setDisplay] = useState(false);
  const onEnter = () => {
    setDisplay(true);
  }
  const onExit = () =>  {
    setDisplay(false);
  }
  return (
    <div
      className={clsx(
        'text',
        align && `text--${align}`,
        display && 'text--display'
      )}
    >
      <div>
        <Waypoint onEnter={onEnter} onLeave={onExit} topOffset="10%" bottomOffset="15%"/>
        <div>
       	  {lineOne}
        </div>
        <div>
          {lineTwo}
        </div>

      </div>
    </div>
  )
}
