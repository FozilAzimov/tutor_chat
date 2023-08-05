import React from 'react';

import img from '../../assets/imgs/profile_img.png'

import {
  Box,
  Btn,
  BtnWrap,
  Container,
  Header,
  IconWrap,
  Icons,
  Img,
  ImgWrap,
  LinkWrap,
  Pages,
  PagesText,
  ProfileHeader,
  ProfileSection,
  Text,
  Title,
  VideoBox,
  VideoWrapper,
  Wrapper
} from './style';

import { useNavigate } from 'react-router-dom';

export default function PremiumProfile () {

  const data = [
    { id: 1, text: 'All', to: '/profile' },
    { id: 2, text: 'Bepul darslar', to: '/free' },
    { id: 3, text: 'Premium darslar', to: '/premium_profile' },
    { id: 4, text: 'Saved', to: '/saved' },
  ]

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

      <ProfileSection>
        <Container>
          <ProfileHeader>
            <ImgWrap>
              <Img src={img} />
            </ImgWrap>
            <Box></Box>
            <Box>
              <Text type='bold'>1k</Text>
              <Text>Followers</Text>
            </Box>
            <Box>
              <Text type='bold'>342</Text>
              <Text>Followers</Text>
            </Box>
            <Box>
              <Text type='bold'>105</Text>
              <Text>Lessons</Text>
            </Box>
          </ProfileHeader>

          <Text type='small'>Teacher</Text>
          <Text type='medium'>Catherine Ellise</Text>
          <Text type='mediumLight'>Lorem ipsum dolor sit amet consectetur. Sed curabitur sollicitudin arcu.</Text>

          <LinkWrap>
            <Text type='link'>Telegram</Text>
            <Text type='link'>Instagram</Text>
            <Text type='link'>Facebook</Text>
          </LinkWrap>

          <BtnWrap>
            <Btn follow="true">Follow</Btn>
            <Btn>Portfolio</Btn>
            <Btn>Message</Btn>
          </BtnWrap>

          <Pages>
            {
              data.map(({ id, text, to }) => {
                return (
                  <PagesText key={id} className={({ isActive }) => isActive && 'active'} to={to}>{text}</PagesText>
                )
              })
            }
          </Pages>
        </Container>
      </ProfileSection>

      <VideoWrapper>
        <VideoBox>1</VideoBox>
        <VideoBox>1</VideoBox>
        <VideoBox>1</VideoBox>
        <VideoBox>1</VideoBox>
        <VideoBox>1</VideoBox>
        <VideoBox>1</VideoBox>
        <VideoBox>1</VideoBox>
        <VideoBox>1</VideoBox>
        <VideoBox>1</VideoBox>
        <VideoBox>1</VideoBox>
        <VideoBox>1</VideoBox>
        <VideoBox>1</VideoBox>
      </VideoWrapper>

    </Wrapper>
  )
}
