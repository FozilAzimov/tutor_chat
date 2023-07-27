import React from 'react';

import {

  Arrow,
  Options,
  SelectOption,
  Wrap
} from './style';

export default function Select ({ onChange }) {

  return (
    <Wrap>
      <Arrow />
      <SelectOption onChange={onChange}>
        <Options value=''>Select Language</Options>
        <Options value='uz'>O'zbek</Options>
        <Options value='ru'>Russia</Options>
        <Options value='en'>English</Options>
      </SelectOption>
    </Wrap>
  )
}
