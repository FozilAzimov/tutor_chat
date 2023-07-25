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
import { useNavigate } from 'react-router-dom';
import useRequest from '../../hooks/useRequest';
import { message } from 'antd';

export default function LoginAcount () {

  const navigate = useNavigate();
  const request = useRequest();
  const [body, setBody] = useState({});
  const [, setError] = useState(false);
  const [type, setType] = useState('password');
  const [isHidden, setIsHidden] = useState(true);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [typeBtn, setTypeBtn] = useState('');

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

  const getInpValue = ({ target: { value } }) => (value.length > 5 && value.includes('@'))
    ? setEmail(true)
    : setEmail(false);

  const getInpLength = ({ target: { value } }) => value.length > 8
    ? setPassword(true)
    : setPassword(false);

  const getChecked = ({ target: { checked } }) => (email && password && checked)
    ? setTypeBtn('primary')
    : setTypeBtn('');


  const onChange = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    })
    setError(false);
  }

  const info = () => {
    message.info('Tabriklaymiz! Siz ro`yxatdan o`tdingiz.');
  }
  const warning = () => {
    message.warning('Email yoki Password xato, iltimos qayta urinib ko`ring.');
  }

  const getSubmit = () => {
    request({ url: `/public/auth/login`, method: 'POST', body, me: true })
      .then((res) => {
        if (res?.authenticationToken) {
          info();
          navigate(`/home`);
          localStorage.setItem('token', res?.authenticationToken);
        }
        else warning();
      });
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
        <Input onInput={getInpValue} onChange={onChange} name='email' width='100%' type='email' placeholder='Your username' icon={true} />
        <Wrap>
          {
            isHidden
              ? < Icons.HiddenTrue onClick={Hidden} />
              : <Icons.HiddenFalse onClick={Hidden} />
          }
          <Input onInput={getInpLength} onChange={onChange} name='password' width='100%' type={type} placeholder='Your password' icon={true} />
        </Wrap>
        <Check>
          <Input onChange={getChecked} width='10px' type='checkbox' icon={false} />
          <span style={{ display: 'flex', marginLeft: '15px' }}>Remember
            <span style={{ marginLeft: '5px' }}>password</span>
          </span>
        </Check>
        <SpanText>
          <Link>Forgot Password?</Link> or
          <Link>Login</Link>
        </SpanText>
        {
          typeBtn
            ? <Button width='100%' top='40' onClick={getSubmit} type={typeBtn}>Login</Button>
            : <Button width='100%' top='40'>Login</Button>
        }

        <SpanText>
          <Link>If you don’t have an account</Link>
          <FooterBtn>Sign up</FooterBtn>
        </SpanText>
      </Title>
    </Wrapper>
  )
}
