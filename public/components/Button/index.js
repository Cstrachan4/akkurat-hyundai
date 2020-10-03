import React from 'react';
import './styles.scss';
import clsx from 'clsx';

export default function Button({
 label,
 tag = 'a',
 ...otherProps
}) {
  const Tag = tag;
  return (
    <div className="button">
      <div className="button__link-container">
        <Tag className='button__link' {...otherProps}>
          {label}
        </Tag>
      </div>
    </div>
  )
}
