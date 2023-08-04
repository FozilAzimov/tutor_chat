import React from 'react';

import {
  Container,
  Header,
  IconWrap,
  Icons,
  Title,
  Wrapper
} from './style';

import { useNavigate } from 'react-router-dom';

export default function Profile () {

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Header>
          <IconWrap>
            <Icons.Arrow onClick={() => navigate(-1)} />
          </IconWrap>
          <Title>@Catherine12</Title>
          <Icons.Angle />
        </Header>
      </Container>
    </Wrapper>
  )
}
