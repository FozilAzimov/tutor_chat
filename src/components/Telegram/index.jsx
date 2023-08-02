import React from 'react';

// User img
import user1 from '../../assets/icons/tg_use_icon.svg';
import user2 from '../../assets/icons/tg_use_icon2.svg';
import user3 from '../../assets/icons/tg_use_icon3.svg';
// Private Icon
import private_close from '../../assets/icons/private.svg';
import private_open from '../../assets/icons/private_open.svg';

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

export default function Telegram () {

  const category = [
    { id: 1, name: 'All', mg: ' ' },
    { id: 2, name: 'Personal', mg: ' ' },
    { id: 3, name: 'Premium users', mg: ' ' },
    { id: 4, name: 'Groups', mg: '' },
  ]
  const data = [
    {
      id: 1,
      url: user1,
      name: 'Jane Cooper',
      time: '1m ago',
      description: 'IDK what else is there to do',
      privateIcon: ' ',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 2,
      url: user2,
      name: 'Wade Warren',
      time: '2h ago',
      description: 'What`s the progress on that ...',
      privateIcon: '',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 3,
      url: user3,
      name: 'Leslie Alexander',
      time: '10.15',
      description: 'omg, this is amazing',
      privateIcon: ' ',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 4,
      url: user1,
      name: 'Jane Cooper',
      time: '1m ago',
      description: 'IDK what else is there to do',
      privateIcon: ' ',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 5,
      url: user2,
      name: 'Wade Warren',
      time: '2h ago',
      description: 'What`s the progress on that ...',
      privateIcon: '',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 6,
      url: user3,
      name: 'Leslie Alexander',
      time: '10.15',
      description: 'omg, this is amazing',
      privateIcon: ' ',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 7,
      url: user1,
      name: 'Jane Cooper',
      time: '1m ago',
      description: 'IDK what else is there to do',
      privateIcon: ' ',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 8,
      url: user2,
      name: 'Wade Warren',
      time: '2h ago',
      description: 'What`s the progress on that ...',
      privateIcon: '',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 9,
      url: user3,
      name: 'Leslie Alexander',
      time: '10.15',
      description: 'omg, this is amazing',
      privateIcon: ' ',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 10,
      url: user1,
      name: 'Jane Cooper',
      time: '1m ago',
      description: 'IDK what else is there to do',
      privateIcon: ' ',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 11,
      url: user2,
      name: 'Wade Warren',
      time: '2h ago',
      description: 'What`s the progress on that ...',
      privateIcon: '',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 12,
      url: user3,
      name: 'Leslie Alexander',
      time: '10.15',
      description: 'omg, this is amazing',
      privateIcon: ' ',
      private1: private_close,
      private2: private_open,
    },
  ];

  return (
    <Wrapper>
      <Container>
        <Box>
          <Icons.Search />
          <Input type='text' placeholder='Search message...' />
        </Box>
        <CategoryWrap>
          {
            category.map(({ id, name, mg }) => {
              return (
                <Category
                  key={id}
                  mg={mg}>
                  <Text>{name}</Text>
                </Category>
              )
            })
          }
        </CategoryWrap>
      </Container>
      {
        data.map(({
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
