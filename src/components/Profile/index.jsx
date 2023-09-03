import React from 'react';

import img from '../../assets/imgs/profile_img.png';
import video1 from '../../assets/imgs/profile_card1.png';
import video2 from '../../assets/imgs/profile_card2.png';
import video3 from '../../assets/imgs/profile_card3.png';

import {
  Box,
  Btn,
  BtnWrap,
  CardName,
  Container,
  Header,
  IconWrap,
  Icons,
  Img,
  ImgWrap,
  LinkWrap,
  List,
  ListWrap,
  Menu,
  Pages,
  PagesText,
  Parent,
  ProfileHeader,
  ProfileSection,
  Text,
  Title,
  VideoBox,
  VideoBoxImg,
  VideoPrice,
  VideoWrapper,
  Wrapper
} from './style';

import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'antd';

export default function Profile () {

  const data = [
    { id: 1, text: 'All', to: '/profile' },
    { id: 2, text: 'Bepul darslar', to: '/free' },
    { id: 3, text: 'Premium darslar', to: '/premium_profile' },
    { id: 4, text: 'Saved', to: '/saved' },
  ];

  const cards = [
    { id: 1, type: ' ', text: 'Kimyo', src: video1, price: '$100' },
    { id: 2, type: ' ', text: 'Fizika', src: video2, price: '$100' },
    { id: 3, type: ' ', text: 'Biologiya', src: video3, price: '$100' },
    { id: 4, type: '', text: 'Biologiya', src: video3, price: '$100' },
    { id: 5, type: '', text: 'Kimyo', src: video1, price: '$100' },
    { id: 6, type: '', text: 'Fizika', src: video2, price: '$100' },
    { id: 7, type: '', text: 'Kimyo', src: video1, price: '$100' },
    { id: 8, type: '', text: 'Fizika', src: video2, price: '$100' },
    { id: 9, type: '', text: 'Biologiya', src: video3, price: '$100' },
    { id: 10, type: '', text: 'Biologiya', src: video3, price: '$100' },
    { id: 11, type: '', text: 'Kimyo', src: video1, price: '$100' },
    { id: 12, type: '', text: 'Fizika', src: video2, price: '$100' },
  ];

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Header>
          <IconWrap>
            <Icons.Arrow onClick={() => navigate(-1)} />
          </IconWrap>
          <Title>@Catherine12</Title>
          <Dropdown
            trigger={['click']}
            dropdownRender={() => {
              return (
                <Menu>
                  <ListWrap>
                    <Icons.Edit />
                    <List data-name='myprofile'>Edit</List>
                  </ListWrap>
                  <ListWrap>
                    <Icons.Logout />
                    <List data-name='favorites'>Log out</List>
                  </ListWrap>
                </Menu>
              )
            }}
          >
            <Icons.Angle />
          </Dropdown>
        </Header>
      </Container>

      <ProfileSection>
        <Container>
          <ProfileHeader>
            <ImgWrap>
              <Img src={img} />
            </ImgWrap>
            <Box />
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
        {
          cards.map(({ id, type, text, src, price }) => {
            return (
              type ? (
                <VideoBox key={id}>
                  <VideoBoxImg src={src} />
                  <Parent>
                    <Icons.Video />
                    <CardName>{text}</CardName>
                  </Parent>
                  <VideoPrice>{price}</VideoPrice>
                </VideoBox>
              )
                : (
                  <VideoBox key={id}>
                    <VideoBoxImg src={src} />
                  </VideoBox>
                )
            )
          })
        }
      </VideoWrapper>
    </Wrapper >
  )
}