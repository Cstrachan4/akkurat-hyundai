import React, {useEffect,useState} from 'react';
import './styles.scss';
import clsx from 'clsx';

import { use100vh } from 'react-div-100vh';

export default function Intro({
  name
}) {
  const [initial,setInitial] = useState(true);
  const displayName =  name  ? name.replace("-", ' '): null;
  const height = use100vh();
  useEffect(()=>{
    setTimeout(()=>{
      setInitial(false);
    },3250);
  },[]);
  return (
    <div
      className={clsx('intro')}
      style={{height: initial ? height : height - 54}}
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
