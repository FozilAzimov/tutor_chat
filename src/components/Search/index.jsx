import React from 'react';

import icon1 from '../../assets/icons/user_icon.svg';
import icon2 from '../../assets/icons/video.svg';
import icon3 from '../../assets/icons/group.svg';

import {
  Box,
  BoxTitle,
  Category,
  CategoryIcon,
  CategoryWrap,
  Container,
  Icons,
  Input,
  Text,
  Title,
  Wrapper
} from './style';

import Card from '../Card';

export default function Search () {

  const category = [
    { id: 1, name: 'User', url: icon1, mg: ' ' },
    { id: 2, name: 'Video', url: icon2, mg: ' ' },
    { id: 3, name: 'Group', url: icon3, mg: '' },
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
            category.map(({ id, name, url, mg }) => {
              return (
                <Category
                  key={id}
                  mg={mg}>
                  <CategoryIcon src={url} />
                  <Text>{name}</Text>
                </Category>
              )
            })
          }
        </CategoryWrap>
      </Container>
      <Card Text='Matematika' width='fit-content' center='center' />
    </Wrapper>
  )
}
