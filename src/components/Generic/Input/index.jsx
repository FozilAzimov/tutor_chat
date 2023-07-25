import React from 'react';

import {
  GenericInput,
  Icons,
  Wrap
} from './style';

export default function Input ({
  onChange,
  onInput,
  type,
  width,
  fontSize,
  placeholder,
  icon,
}) {

  return (
    <Wrap>
      {
        icon && <Icons.InputIcon />
      }
      <GenericInput
        onChange={onChange}
        onInput={onInput}
        type={type}
        width={width}
        fontSize={fontSize}
        placeholder={placeholder}
      />
    </Wrap>
  )
}
