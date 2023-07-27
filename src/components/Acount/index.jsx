import React, { useState } from 'react';

import img from '../../assets/imgs/language_fon.jpg'

import {
  LanguageIcon,
  Wrapper,
  Title,
  TitleText,
  FonImgWrap,
  FonImg,
  Img
} from './style';

import { Button } from '../Generic';
import { useNavigate } from 'react-router-dom';
import { Select } from 'antd';

export default function Acount () {

  const navigate = useNavigate();
  const [cheked, setCheked] = useState('');
  const [check, setCheck] = useState('');

  const Change = (value) => {
    if (value === "uz" || value === "ru" || value === "en") {
      setCheked('primary');
      setCheck(value);
    }
    else {
      setCheked();
    }
  }

  const Click = () => {
    navigate('/loginacount');
  }


  return (
    <Wrapper>
      <Title>
        <LanguageIcon />
        <TitleText>Language</TitleText>
        <FonImgWrap>
          <Select
            defaultValue="Select Language"
            style={{
              width: '100%',
            }}
            onChange={Change}
            options={[
              { value: 'uz', label: 'Uzbek', },
              { value: 'ru', label: 'Russia', },
              { value: 'en', label: 'English', },
            ]} />
          <FonImg>
            <Img src={img} />
          </FonImg>
        </FonImgWrap>
        {
          check
            ? <Button width='100%' top='150' onClick={Click} type={cheked}>Next</Button>
            : <Button width='100%' top='150'>Next</Button>
        }
      </Title>
    </Wrapper>
  )
}
