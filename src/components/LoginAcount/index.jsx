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
import { message } from 'antd';

export default function LoginAcount () {

  const navigate = useNavigate();
  const [body, setBody] = useState({});
  const [, setError] = useState(false);
  const [type, setType] = useState('password');
  const [isHidden, setIsHidden] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const getInpValue = ({ target: { value } }) => setEmail(value);

  const getInpLength = ({ target: { value } }) => setPassword(value);

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
    message.info('Admin panelga xush kelibsiz!');
  }
  const warning = () => {
    message.warning('User name yoki password xato, iltimos tekshirib qayta urinib ko`ring.');
  }

  const getSubmit = () => {

    fetch('https://api.tutorchat.uz/api/login/public/login_to_system', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(res => res.json())
      .then(res => {
        if (res?.token) {
          localStorage.setItem('token', res?.token);
          navigate(`/home`);
          info();
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
        <Input onInput={getInpValue} onChange={onChange} name='username' width='100%' type='email' placeholder='Your username' icon={true} />
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
