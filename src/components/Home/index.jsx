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
import { HomeContext } from '../../context/HomeContext';

export default function Home () {

  const navigate = useNavigate();
  const [state, dispatch] = HomeContext();

  console.log(state);

  const category = [
    { id: 1, name: 'chemistry#', url: icon1, mg: ' ' },
    { id: 2, name: 'maths#', url: icon2, mg: ' ' },
    { id: 3, name: 'physics#', url: icon3, mg: ' ' },
    { id: 4, name: 'astronomy#', url: icon4, mg: '' },
  ];

  const getMessages = () => {
    navigate(`/messages`);
  }
  const getTelegram = () => {
    navigate(`/telegram`);
  }

  return (
    <Wrapper>
      <Container>
        <BoxTitle>
          <Title type='lg'>Tutor Chat</Title>
          <BoxTitle type='min'>
            <IconWrap>
              <Count>0</Count>
              <Icons.Message onClick={getMessages} />
            </IconWrap>
            <IconWrap>
              <Count>0</Count>
              <Icons.Telegram onClick={getTelegram} />
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
            category.map(({ id, name, url, mg }) => {
              return (
                <Category mg={mg} key={id}>
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
