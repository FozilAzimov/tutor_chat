import React, { useState } from 'react';

import {
  Wrapper,
  Title,
  TitleText,
  Icons,
  Wrap,
} from './style';

import { Button, Input } from '../Generic';
import { useNavigate } from 'react-router-dom';

export default function Registration () {

  const navigate = useNavigate();
  const [body, setBody] = useState({});
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


  const onChange = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    })
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
        }
      });
  }

  return (
    <Wrapper>
      <Title>
        <Icons.UserPhoto />
        <TitleText type='bold'>Rasm qo'shish</TitleText>
        <TitleText>Quyidagi ma'lumotlarni to'ldiring</TitleText>
        <Input onInput={getInpValue} onChange={onChange} name='fullname' width='100%' type='text' placeholder='Full name' icon={true} />
        <Input onInput={getInpValue} onChange={onChange} name='username' width='100%' type='text' placeholder='User name' icon={true} />
        <Input onInput={getInpValue} onChange={onChange} name='brithdate' width='100%' type='text' placeholder='dd.mm.yyyy' icon={true} />
        <Input onInput={getInpValue} onChange={onChange} name='email' width='100%' type='email' placeholder='Email' icon={true} />
        <Input onInput={getInpValue} onChange={onChange} name='phone' width='100%' type='text' placeholder='Phone number' icon={true} />

        <Wrap>
          {
            isHidden
              ? < Icons.HiddenTrue onClick={Hidden} />
              : <Icons.HiddenFalse onClick={Hidden} />
          }
          <Input onInput={getInpLength} onChange={onChange} name='password' width='100%' type={type} placeholder='Your password' icon={true} />
        </Wrap>

        {
          typeBtn
            ? <Button width='100%' top='40' onClick={getSubmit} type={typeBtn}>Next</Button>
            : <Button width='100%' top='40'>Next</Button>
        }

      </Title>
    </Wrapper>
  )
}
