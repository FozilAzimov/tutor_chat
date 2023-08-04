import React from 'react';

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
import category from '../../utils/searchNavbar';

export default function Group () {

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
      </Container>
      <Card Text='Matematika' width='fit-content' center='center' />
    </Wrapper >
  )
}
