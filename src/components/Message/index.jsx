import React from 'react';

import {
  Container,
  Icons,
  Link,
  MessageBox,
  MessageContent,
  Messages,
  Title,
  TitleWrapper,
  Wrapper
} from './style';

export default function Message () {

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
      time: '19:07',
      title: 'My name is Catherine. I like dancing',
      description: 'Lorem Ipsum is simply dummy text of the....',
    },
  ]

  return (
    <Wrapper>
      <Container>
        <TitleWrapper type='top'>
          <Icons.Arrow />
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
                <TitleWrapper>{month} {day}, {time}</TitleWrapper>
                <MessageContent>
                  <Messages type='bold'>{title}</Messages>
                  <Messages>{description}</Messages>
                </MessageContent>
              </MessageBox>
            )
          })
        }
        <Link>Mark as read</Link>
      </Container>
    </Wrapper>
  )
}
