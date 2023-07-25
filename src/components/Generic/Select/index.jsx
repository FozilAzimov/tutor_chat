import React from 'react';
import {
  Option,
  Selects,
} from './style';

export default function Select ({ onChange }) {

  return (
    <Selects onChange={onChange}>
      <Option value=''>Select Language</Option>
      <Option value='uz'>O'zbek</Option>
      <Option value='ru'>Russia</Option>
      <Option value='en'>English</Option>
    </Selects>
  )
}
