import React from 'react';

import {
  GenericInput,
  Icons,
  Wrap
} from './style';

export default function Input ({ type, width, fontSize, placeholder, icon }) {

  return (
    <Wrap>
      {
        icon && <Icons.InputIcon />
      }
      <GenericInput type={type} width={width} fontSize={fontSize} placeholder={placeholder} />
    </Wrap>
  )
}
