import React from 'react';

import { GenericBtn } from './style';

export default function Button ({ onClick, type, children, width, fontSize, top }) {
  return (
    <GenericBtn onClick={onClick} type={type} width={width} fontSize={fontSize} top={top}>
      {children || 'Generic btn'}
    </GenericBtn>
  )
}
