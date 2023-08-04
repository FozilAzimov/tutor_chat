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
import { useNavigate } from 'react-router-dom';

export default function Card ({ Text, width, center }) {

  const navigate = useNavigate();

  return (
    <Wrapper>
      <UserName onClick={() => navigate(`/profile`)}>
        <Icons.UserImg />
        <UserText>Username</UserText>
      </UserName>
      <CardImg src={card_img} />
      <CardTitle>
        <CardMessage width={width} center={center}>
          <Container>
            <UserText type='lg'>{Text}</UserText>
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
