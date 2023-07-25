import React, { useState } from 'react';

import {
  Wrapper,
  Title,
  TitleText,
  TitleImg,
  TitleTextWrapper,
  Box,
  Span,
  Icons,
  Wrap,
  Check,
  SpanText,
  Link,
  FooterBtn,
} from './style';

import titleImg from '../../assets/imgs/login_icon.jpg';

import { Button, Input } from '../Generic';

export default function LoginAcount () {

  const [type, setType] = useState('password');
  const [isHidden, setIsHidden] = useState(true);

  const Hidden = () => {
    if (isHidden) {
      setType('text');
      setIsHidden(false)
    }
    else {
      setType('password');
      setIsHidden(true);
    }
  }

  return (
    <Wrapper>
      <Title>
        <TitleImg src={titleImg} />
        <TitleText>TutorChat</TitleText>
        <TitleTextWrapper>
          <Box type='span'>
            <Span type='max'>Login Account</Span>
            <Span>Hello, Welcome back to your account.</Span>
          </Box>
          <Box>
            <Icons.Acount />
          </Box>
        </TitleTextWrapper>
        <Input width='100%' type='email' placeholder='Your username' icon={true} />
        <Wrap>
          {
            isHidden
              ? < Icons.HiddenTrue onClick={Hidden} />
              : <Icons.HiddenFalse onClick={Hidden} />
          }
          <Input width='100%' type={type} placeholder='Your password' icon={true} />
        </Wrap>
        <Check>
          <Input width='10px' type='checkbox' icon={false} />
          <span style={{ display: 'flex', marginLeft: '15px' }}>Remember <span style={{ marginLeft: '5px' }}>password</span></span>
        </Check>
        <SpanText>
          <Link>Forgot Password?</Link> or
          <Link>Login</Link>
        </SpanText>
        <Button width='100%' top='40'>Login</Button>
        <SpanText>
          <Link>If you don’t have an account</Link>
          <FooterBtn>Sign up</FooterBtn>
        </SpanText>
      </Title>
    </Wrapper>
  )
}
