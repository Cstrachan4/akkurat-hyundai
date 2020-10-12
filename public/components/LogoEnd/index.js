import React from 'react';
import './styles.scss';
import clsx from 'clsx';

import Div100vh from 'react-div-100vh';
import Logo from './AKKURAT-studios.svg';
import Button from '../Button';

export default function LogoEnd({
  display,
  intro,
  onChange
}) {
  const restart = () => {
    onChange('intro',{...intro, 'initial':true, 'timeout':2000});
    setTimeout(()=>{
      window.scrollTo(0, 0);
    },500);
  }
  return (
    <>
      <Div100vh className={clsx(
        'logo-end',
        display && 'logo-end--display'
      )}>
        <Logo />
      </Div100vh>
      <Button onClick={restart} style={{opacity: display ? 1 : 0}} label="Replay"/>
    </>
  )
}
