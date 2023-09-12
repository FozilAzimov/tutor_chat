import React, { useState } from 'react';

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
  Comment,
  TextComment,
  InputComment,
} from './style';

import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export default function Card ({ Text, width, center }) {

  const navigate = useNavigate();
  const commentRef = useRef();
  const [isactive, setIsActive] = useState("");

  const Change = () => {
    commentRef.current.value
      ? setIsActive(commentRef.current.value)
      : setIsActive(commentRef.current.value);
  }

  const Click = () => {
    commentRef.current.focus();
  }

  return (
    <Wrapper>
      <UserName onClick={() => navigate(`/profile`)}>
        <Icons.UserImg />
        <UserText>Username</UserText>
      </UserName>
      <CardImg src={card_img} onClick={() => navigate('/total')} />
      <CardTitle>
        <CardMessage width={width} center={center}>
          <Container>
            <UserText type='lg'>{Text}</UserText>
          </Container>
        </CardMessage>
      </CardTitle>
      <Container>
        <UserText type='md'>Matematika bo'yicha video Kurs(lar)</UserText>
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
      <Comment>
        <InputComment ref={commentRef} onChange={Change} placeholder='Add comment...' />
        <TextComment isactive={isactive} onClick={Click}>Post</TextComment>
      </Comment>
    </Wrapper>
  )
}
