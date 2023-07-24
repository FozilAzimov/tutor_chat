import React from 'react';
import {
  Option,
  Selects,
} from './style';

export default function Select () {

  // let Checked = false;
  // let Change = ({ target: { value } }) => {

  //   (value === "uz" || value === "ru" || value === "en")
  //     ? Checked = true
  //     : Checked = false;
  // }

  return (
    // <Selects onChange={Change}>
    <Selects>
      <Option value=''>Select Language</Option>
      <Option value='uz'>O'zbek</Option>
      <Option value='ru'>Russia</Option>
      <Option value='en'>English</Option>
    </Selects>
  )
}
