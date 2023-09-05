import React from 'react';

import {
  Container,
  Header,
  IconWrap,
  Icons,
  List,
  ListWrap,
  Menu,
  Title,
  Wrapper
} from './style';

import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'antd';

export default function Totals () {


  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Header>
          <IconWrap>
            <Icons.Arrow onClick={() => navigate(-1)} />
          </IconWrap>
          <Title type='max'>Matematika</Title>
          <Dropdown
            trigger={['click']}
            dropdownRender={() => {
              return (
                <Menu>
                  <ListWrap>
                    <Icons.Edit />
                    <List data-name='myprofile'>Edit</List>
                  </ListWrap>
                  <ListWrap>
                    <Icons.Logout />
                    <List data-name='favorites'>Log out</List>
                  </ListWrap>
                </Menu>
              )
            }}
          >
            <Icons.Angle />
          </Dropdown>
        </Header>
        <Title>Toplami</Title>
      </Container>
    </Wrapper >
  )
}