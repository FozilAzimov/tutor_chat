import React from 'react';

import img from '../../assets/imgs/player.png';

import {
  Container,
  Header,
  IconWrap,
  Icons,
  Img,
  Title,
  Wrap,
  Wrapper
} from './style';

import { useNavigate } from 'react-router-dom';

export default function Application () {

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Header>
          <IconWrap>
            <Icons.Arrow onClick={() => navigate(-1)} />
          </IconWrap>
          <Title>Matematika 1-dars</Title>
          <Icons.Angle />
        </Header>
      </Container>
      <Wrap>
        <Icons.Player />
        <Img src={img} />
      </Wrap>
    </Wrapper>
  )
}
