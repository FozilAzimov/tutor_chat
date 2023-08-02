import React from 'react';

import {
  Container,
  IconWrap,
  Icons,
  Link,
  MessageBox,
  MessageContent,
  Messages,
  Title,
  TitleWrapper,
  WrapLink,
  Wrapper
} from './style';

import { useNavigate } from 'react-router-dom';

export default function MessagesAll () {

  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      month: 'May',
      day: 7,
      time: '19:07',
      title: 'My name is Catherine. I like dancing',
      description: 'Lorem Ipsum is simply dummy text of the....',
    },
    {
      id: 2,
      month: 'May',
      day: 7,
      time: '19:10',
      title: 'My name is Catherine. I like dancing',
      description: 'Lorem Ipsum is simply dummy text of the....',
    },
    {
      id: 3,
      month: 'May',
      day: 7,
      time: '19:15',
      title: 'My name is Catherine. I like dancing',
      description: 'Lorem Ipsum is simply dummy text of the....',
    },
  ];

  const getMessage = () => {
    navigate('/message');
  }

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
            month,
            day,
            time,
            title,
            description
          }) => {
            return (
              <MessageBox key={id}>
                <TitleWrapper>{month}{' '}{day},{' '}{time}</TitleWrapper>
                <MessageContent onClick={getMessage}>
                  <Messages type='bold'>{title}</Messages>
                  <Messages>{description}</Messages>
                </MessageContent>
              </MessageBox>
            )
          })
        }
        <WrapLink>
          <Link>Mark as read</Link>
        </WrapLink>
      </Container>
    </Wrapper>
  )
}
