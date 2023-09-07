import React from 'react';

import img from '../../assets/icons/total_img.svg';

import {
  Container,
  Header,
  IconWrap,
  Icons,
  List,
  ListWrap,
  Menu,
  Title,
  TotalImg,
  TotalList,
  TotalTitle,
  Wrapper
} from './style';

import { useNavigate } from 'react-router-dom';
import { Dropdown, Checkbox } from 'antd';
import { Button } from '../Generic';

export default function Totals () {

  const navigate = useNavigate();

  const data = [
    { id: 1, top: ' ' },
    { id: 2, top: '' },
    { id: 3, top: '' },
    { id: 4, top: '' },
    { id: 5, top: '' },
  ]

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
        <Title>To'plami</Title>

        {
          data.map(({ id, top }) => {
            return (
              <TotalList type='max' key={id} top={top}>
                <TotalList type='min'>
                  <TotalImg src={img} />
                  <TotalList>
                    <TotalTitle>Mavzu Nomi</TotalTitle>
                    <TotalTitle type='sub'>
                      <TotalTitle type='firstSub'>
                        <Icons.Like />785
                      </TotalTitle>
                      <TotalTitle type='subMin'>
                        <Icons.Chaqmoq />1k+
                      </TotalTitle>
                      <TotalTitle type='subMin'>
                        <Icons.Message />850+
                      </TotalTitle>
                    </TotalTitle>
                  </TotalList>
                </TotalList>
                <Checkbox />
              </TotalList>
            )
          })
        }
        <Button width='100%' top='50' type='primary'>Toplamlarni ochish</Button>
      </Container>
    </Wrapper >
  )
}