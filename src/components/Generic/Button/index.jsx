import React from 'react';

import { GenericBtn } from './style';
import { useNavigate } from 'react-router-dom';

export default function Button ({ type, children, width, fontSize, top }) {
  const navigate = useNavigate();
  const Click = () => {
    navigate('/loginacount');
  }

  return (
    <GenericBtn onClick={Click} type={type} width={width} fontSize={fontSize} top={top}>
      {children || 'Generic btn'}
    </GenericBtn>
  )
}
