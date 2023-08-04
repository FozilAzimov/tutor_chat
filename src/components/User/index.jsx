import React from 'react';

import {
  Box,
  Category,
  CategoryIcon,
  CategoryWrap,
  Container,
  Icons,
  Img,
  Input,
  Item,
  ItemText,
  Text,
  Title,
  Wrap,
  Wrapper
} from './style';

import category from '../../utils/searchNavbar';
import { TelegramContext } from '../../context/Telegram';

export default function User () {

  const [post,] = TelegramContext();



  return (
    <Wrapper>
      <Container>
        <Box>
          <Icons.Search />
          <Input type='text' placeholder='Matematika' />
        </Box>
        <CategoryWrap>
          {
            category?.map(({ id, name, url, to }) => {
              return (
                <Category className={({ isActive }) => isActive && 'active'} key={id} to={to}>
                  <CategoryIcon src={url} />
                  <Text>{name}</Text>
                </Category>
              )
            })
          }
        </CategoryWrap>
        <Wrap>
          {
            post?.map(({ id, name, url, description }) => {
              return (
                <Item key={id}>
                  <Img src={url} />
                  <Title>
                    <ItemText type='bold'>{name}</ItemText>
                    <ItemText>{description}</ItemText>
                  </Title>
                </Item>
              )
            })
          }
        </Wrap>
      </Container>
    </Wrapper >
  )
}
