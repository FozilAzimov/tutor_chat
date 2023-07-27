import React from 'react';

import card_img from '../../assets/imgs/card_img.jpg'

import {
  Icons,
  CardImg,
  UserName,
  UserText,
  Wrapper,
  CardTitle,
  CardMessage,
  Container,
  Liked,
  Input,
} from './style';

export default function Card () {

  return (
    <Wrapper>
      <UserName>
        <Icons.UserImg />
        <UserText>Username</UserText>
      </UserName>
      <CardImg src={card_img} />
      <CardTitle>
        <CardMessage>
          <Container>
            <UserText type='lg'>Send message</UserText>
          </Container>
        </CardMessage>
      </CardTitle>
      <Container>
        <UserText type='md'>Matematika bo’yicha video Kurs(lar)</UserText>
        <Liked>
          <Liked type='liked'>
            <Icons.Leavel />
            <Icons.Leavel />
            <Icons.Leavel />
            <Icons.Leavel />
            <Icons.Leavel />
          </Liked>
          <Icons.Rectangle />
        </Liked>
        <UserText type='sm'>View all 50 comments</UserText>
      </Container>
      <Input type='text' placeholder='Add comment...' />
    </Wrapper>
  )
}
