import React from 'react';

import {
  Container,
  IconWrap,
  Icons,
  MessageBox,
  MessageTitle,
  MessageVideo,
  Title,
  TitleWrapper,
  Wrapper
} from './style';

import { useNavigate } from 'react-router-dom';

import img from '../../assets/imgs/video.svg'

export default function Message () {

  const navigate = useNavigate();

  const realDate = new Date();
  const data = [
    {
      id: 1,
      date: `${realDate.getDate() >= 10 ? realDate.getDate() : `0${realDate.getDate()}`}.${realDate.getMonth() + 1 >= 10 ? realDate.getMonth() + 1 : `0${realDate.getMonth() + 1}`}.${realDate.getFullYear()}`,
      title: 'My name is Catherine. I like dancing in the rain and travelling',
      description: 'My name is Catherine. I like dancing in the rain and travelling all around the world. My name is Catherine. I like dancing in the rain and travelling all around the world.My name is Catherine. I like dancing in the rain and travelling all around the world.',
    },
    {
      id: 2,
      date: `${realDate.getDate() >= 10 ? realDate.getDate() : `0${realDate.getDate()}`}.${realDate.getMonth() + 1 >= 10 ? realDate.getMonth() + 1 : `0${realDate.getMonth() + 1}`}.${realDate.getFullYear()}`,
      title: 'My name is Catherine. I like dancing in the rain and travelling',
      description: 'My name is Catherine. I like dancing in the rain and travelling all around the world. My name is Catherine. I like dancing in the rain and travelling all around the world.My name is Catherine. I like dancing in the rain and travelling all around the world.',
    },
  ];

  return (
    <Wrapper>
      <Container>
        <TitleWrapper type='top'>
          <IconWrap>
            <Icons.Arrow onClick={() => navigate(-1)} />
          </IconWrap>
          <Title>Message</Title>
        </TitleWrapper>
        {
          data.map(({
            id,
            date,
            title,
            description,
          }) => {
            return (
              <MessageBox key={id}>
                <MessageVideo src={img} />
                <MessageTitle type='large'>
                  {title}
                </MessageTitle>
                <MessageTitle type='medium'>
                  {description}
                </MessageTitle>
                <MessageTitle >
                  {date}
                </MessageTitle>
              </MessageBox>
            )
          })
        }
      </Container>
    </Wrapper>
  )
}
