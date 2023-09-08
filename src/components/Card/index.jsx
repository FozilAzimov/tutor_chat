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
  const [isactive, setIsActive] = useState("");
  const commentRef = useRef();

  const Change = () => {
    commentRef.current.value
      ? setIsActive(commentRef.current.value)
      : setIsActive(commentRef.current.value);
  }

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
        <InputComment ref={commentRef} placeholder='Add comment...' onChange={Change} />
        <TextComment isactive={isactive}>Post</TextComment>
      </Comment>
    </Wrapper>
  )
}
