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

export default function Acount () {
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
        <Button width='100%' top='150'>Next</Button>
      </Title>
    </Wrapper>
  )
}
