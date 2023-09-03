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
import { MessagesContext } from '../../context/MessageAll';

export default function MessagesAll () {

  const navigate = useNavigate();
  const [messages] = MessagesContext();

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
          messages?.map(({
            id,
            month,
            day,
            time,
            title,
            description
          }) => {
            return (
              <MessageBox key={id}>
                <TitleWrapper>{month || 'Yan'}{' '}{day || '1'},{' '}{time || '00:00'}</TitleWrapper>
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
