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

import { Button, Select } from '../Generic';
import { useNavigate } from 'react-router-dom';

export default function Acount () {

  const navigate = useNavigate();
  const [cheked, setCheked] = useState('');
  const [check, setCheck] = useState('');

  const Change = ({ target: { value } }) => {
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
          <Select onChange={Change} />
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




