import React from 'react';

import icon1 from '../../assets/icons/chemistry.svg';
import icon2 from '../../assets/icons/maths.svg';
import icon3 from '../../assets/icons/physics.svg';
import icon4 from '../../assets/icons/astronomy.svg';

import {
  Box,
  BoxTitle,
  Category,
  CategoryIcon,
  CategoryWrap,
  Container,
  Count,
  IconWrap,
  Icons,
  Input,
  Text,
  Title,
  Wrapper
} from './style';

import Card from '../Card';
import { useNavigate } from 'react-router-dom';
import { MessagesContext } from '../../context/MessageAll';
import { TelegramContext } from '../../context/Telegram';

export default function Home () {

  const navigate = useNavigate();
  const [messages,] = MessagesContext();
  const [post,] = TelegramContext();


  const category = [
    { id: 1, name: 'chemistry#', url: icon1 },
    { id: 2, name: 'maths#', url: icon2 },
    { id: 3, name: 'physics#', url: icon3 },
    { id: 4, name: 'astronomy#', url: icon4 },
  ];

  const ClickMessages = () => {
    navigate('/messages');
  }

  const ClickTelegram = () => {
    navigate(`/telegram`);
  }


  return (
    <Wrapper>
      <Container>
        <BoxTitle>
          <Title type='lg'>Tutor Chat</Title>
          <BoxTitle type='min'>
            <IconWrap>
              <Count>{messages?.length}+</Count>
              <Icons.Message onClick={ClickMessages} />
            </IconWrap>
            <IconWrap>
              <Count>{post?.length}+</Count>
              <Icons.Telegram onClick={ClickTelegram} />
            </IconWrap>
          </BoxTitle>
        </BoxTitle>
        <Title type='md'>Start Learning</Title>
        <Box>
          <Icons.Search />
          <Input type='text' placeholder='what you want to learn?' />
        </Box>
        <CategoryWrap>
          {
            category.map(({ id, name, url }) => {
              return (
                <Category key={id}>
                  <CategoryIcon src={url} />
                  <Text>{name}</Text>
                </Category>
              )
            })
          }
        </CategoryWrap>
      </Container>
      <Card Text='Send message' width='100%' center='start' />
    </Wrapper >
  )
}
