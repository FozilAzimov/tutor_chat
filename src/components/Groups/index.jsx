import React from 'react';

import {
  Box,
  Category,
  CategoryWrap,
  Container,
  Content,
  ContentBox,
  ContentText,
  Icons,
  Input,
  Text,
  UserImg,
  Wrapper
} from './style';

import { TelegramContext } from '../../context/Telegram';

export default function Groups () {

  const category = [
    { id: 1, name: 'All', mg: ' ', to: '/telegram' },
    { id: 2, name: 'Personal', mg: ' ', to: '/personal' },
    { id: 3, name: 'Premium users', mg: ' ', to: '/premium' },
    { id: 4, name: 'Groups', mg: '', to: '/groups' },
  ];

  const [post] = TelegramContext();

  return (
    <Wrapper>
      <Container>
        <Box>
          <Icons.Search />
          <Input type='text' placeholder='Search message...' />
        </Box>
        <CategoryWrap>
          {
            category?.map(({ id, name, mg, to }) => {
              return (
                <Category
                  className={({ isActive }) => isActive && 'active'}
                  key={id}
                  mg={mg}
                  to={to}
                >
                  <Text>{name}</Text>
                </Category>
              )
            })
          }
        </CategoryWrap>
      </Container>
      {
        post?.map(({
          id,
          url,
          name,
          time,
          description,
          privateIcon,
          private1,
          private2
        }) => {
          return (
            <Content key={id}>
              <UserImg src={url} />
              <ContentBox type='max'>
                <ContentBox type='min'>
                  <ContentText type='bold'>{name}</ContentText>
                  <ContentText>{description}</ContentText>
                </ContentBox>
                <ContentBox>
                  <ContentText>{time}</ContentText>
                </ContentBox>
              </ContentBox>
            </Content>
          )
        })
      }

    </Wrapper>
  )
}
