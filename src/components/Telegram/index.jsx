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
import category from '../../utils/telegramNavbar';

export default function Telegram () {

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
