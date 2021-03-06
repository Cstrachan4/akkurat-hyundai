import React, {useEffect} from 'react';
import './styles.scss';
import clsx from 'clsx';

import { use100vh } from 'react-div-100vh';

export default function Intro({
  name,
  intro,
  onChange
}) {
  const { initial, timeout, resized, first } = intro;
  const displayName =  name  ? name.replace("-", ' '): null;
  const height = use100vh();
  useEffect(()=>{
    setTimeout(()=>{
      onChange('intro',{...intro, initial:false});
    },timeout);
    setTimeout(()=>{
      onChange('intro',{...intro, initial:false, resized:true})
    },timeout + 1000);
  },[first]);
  return (
    <div
      className={clsx('intro')}
      style={{height: !resized ? height : height - 54}}
    >
      <div>
       	<div className="intro__text-one">
          {
            displayName ? `Hey, ${displayName}! ` : 'Hey, all! '
          }
        </div>
        <div className={clsx(
          "intro__text-two",
          !initial && 'intro__text-two--display'
        )}>
          We’d like to show you something new…
        </div>
      </div>
    </div>
  )
}
