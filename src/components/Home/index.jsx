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
  Icons,
  Input,
  Text,
  Title,
  Wrapper
} from './style';

import Card from '../Card';

export default function Home () {

  const category = [
    { id: 1, name: 'chemistry#', url: icon1, mg: ' ' },
    { id: 2, name: 'maths#', url: icon2, mg: ' ' },
    { id: 3, name: 'physics#', url: icon3, mg: ' ' },
    { id: 4, name: 'astronomy#', url: icon4, mg: '' },
  ]

  return (
    <Wrapper>
      <Container>
        <BoxTitle>
          <Title type='lg'>Tutor Chat</Title>
          <BoxTitle type='min'>
            <Icons.Message />
            <Icons.Telegram />
          </BoxTitle>
        </BoxTitle>
        <Title type='md'>Start Learning</Title>
        <Box>
          <Icons.Search />
          <Input type='text' placeholder='what you want to learn?' />
        </Box>
        <CategoryWrap>
          {
            category.map(({ id, name, url, mg }) => {
              return (
                <Category key={id} mg={mg}>
                  <CategoryIcon src={url} />
                  <Text>{name}</Text>
                </Category>
              )
            })
          }
        </CategoryWrap>
      </Container>
      <Card />
    </Wrapper>
  )
}
