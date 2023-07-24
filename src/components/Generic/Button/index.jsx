import React from 'react';

import { GenericBtn } from './style';
import { useNavigate } from 'react-router-dom';

export default function Button ({ type, children, width, min, max, height, fontSize }) {
  const navigate = useNavigate();
  const Click = () => {
    navigate('/home');
  }

  return (
    <GenericBtn onClick={Click} type={type} width={width} min={min} max={max} height={height} fontSize={fontSize}>
      {children || 'Generic btn'}
    </GenericBtn>
  )
}
