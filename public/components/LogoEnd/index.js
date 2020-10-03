import React from 'react';
import './styles.scss';
import clsx from 'clsx';

import Div100vh from 'react-div-100vh';
import Logo from './AKKURAT-studios.svg';
import Button from '../Button';

export default function LogoEnd({

}) {

  return (
    <Div100vh className={clsx('logo-end')}>
      <Logo />
    </Div100vh>
  )
}
