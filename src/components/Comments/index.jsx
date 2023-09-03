import React from 'react';

import {
  Container,
  IconWrap,
  Icons,
  Title,
  TitleWrapper,
  Wrapper
} from './style';

import { useNavigate } from 'react-router-dom';

export default function Comments () {

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <TitleWrapper type='top'>
          <IconWrap>
            <Icons.Arrow onClick={() => navigate(-1)} />
          </IconWrap>
          <Title>Comments</Title>
        </TitleWrapper>

      </Container>
    </Wrapper>
  )
}
