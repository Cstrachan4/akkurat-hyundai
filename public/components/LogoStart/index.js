import React from 'react';
import './styles.scss';
import clsx from 'clsx';

import Div100vh from 'react-div-100vh';
import Logo from './AKKURAT-studios.svg';

export default function LogoStart({

}) {

  return (
    <Div100vh className={clsx('logo-start')}>
      <Logo />
    </Div100vh>
  )
}
