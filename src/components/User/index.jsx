import React from 'react';

import icon1 from '../../assets/icons/user_icon.svg';
import icon2 from '../../assets/icons/video.svg';
import icon3 from '../../assets/icons/group.svg';

import {
  Box,
  Category,
  CategoryIcon,
  CategoryWrap,
  Container,
  Icons,
  Input,
  Text,
  Wrapper
} from './style';

import Card from '../Card';

export default function User () {

  const category = [
    { id: 1, name: 'User', url: icon1, to: '/user' },
    { id: 2, name: 'Video', url: icon2, to: '/search' },
    { id: 3, name: 'Group', url: icon3, to: '/group' },
  ]

  return (
    <Wrapper>
      <Container>
        <Box>
          <Icons.Search />
          <Input type='text' placeholder='Matematika' />
        </Box>
        <CategoryWrap>
          {
            category.map(({ id, name, url, to }) => {
              return (
                <Category className={({ isActive }) => isActive && 'active'} key={id} to={to}>
                  <CategoryIcon src={url} />
                  <Text>{name}</Text>
                </Category>
              )
            })
          }
        </CategoryWrap>
      </Container>
      <Card Text='Matematika' width='fit-content' center='center' />
    </Wrapper >
  )
}
