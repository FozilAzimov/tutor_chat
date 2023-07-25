import React from 'react';

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
  const Click = () => {
    navigate('/loginacount');
  }

  return (
    <Wrapper>
      <Title>
        <LanguageIcon />
        <TitleText>Language</TitleText>
        <FonImgWrap>
          <Select />
          <FonImg>
            <Img src={img} />
          </FonImg>
        </FonImgWrap>
        <Button width='100%' top='150' onClick={Click}>Next</Button>
      </Title>
    </Wrapper>
  )
}
