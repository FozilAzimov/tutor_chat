import React from 'react';

import {
  Box,
  Category,
  CategoryWrap,
  Container,
  Content,
  ContentBox,
  ContentText,
  IconWrap,
  Icons,
  Input,
  Text,
  UserImg,
  Wrapper
} from './style';

import { TelegramContext } from '../../context/Telegram';
import category from '../../utils/telegramNavbar';
import { useNavigate } from 'react-router-dom';

export default function PremiumUser () {

  const navigate = useNavigate();

  const [post] = TelegramContext();

  return (
    <Wrapper>
      <Container>
        <Box type='parent'>
          <IconWrap>
            <Icons.Arrow onClick={() => navigate(-1)} />
          </IconWrap>
          <Box>
            <Icons.Search />
            <Input type='text' placeholder='Search message...' />
          </Box>
        </Box>
        <CategoryWrap>
          {
            category?.map(({ id, name, to }) => {
              return (
                <Category
                  className={({ isActive }) => isActive && 'active'}
                  key={id}
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
                  {
                    privateIcon
                      ? <UserImg src={private1} />
                      : <UserImg src={private2} />
                  }
                </ContentBox>
              </ContentBox>
            </Content>
          )
        })
      }

    </Wrapper>
  )
}
