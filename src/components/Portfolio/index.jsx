import React from 'react';

import icon1 from '../../assets/icons/icon_pdf.svg';
import icon2 from '../../assets/icons/icon_file.svg';
import icon3 from '../../assets/icons/install_icon.svg';
import icon4 from '../../assets/icons/icon_video.svg';
import icon5 from '../../assets/icons/icon_img.svg';

import {
  Container,
  Content,
  Header,
  IconWrap,
  Icons,
  Img,
  Install,
  List,
  ListWrap,
  Menu,
  Title,
  Wrapper
} from './style';

import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'antd';

export default function Portfolio () {

  const navigate = useNavigate();

  const data = [
    { id: 1, size: '', icon1: icon1, title: 'About Teacher', subText: 'PDF', icon2: icon3 },
    { id: 2, size: '', icon1: icon2, title: 'Yutuqlari', subText: 'file', icon2: icon3 },
    { id: 3, size: ' ', icon1: icon4, title: 'Kasbiga oid videolar', subText: 'video', icon2: icon3 },
    { id: 4, size: ' ', icon1: icon5, title: 'Kasbiga oid malumot', subText: 'img', icon2: icon3 },
    { id: 5, size: '', icon1: icon1, title: 'About Teacher', subText: 'PDF', icon2: icon3 },
    { id: 6, size: '', icon1: icon2, title: 'Yutuqlari', subText: 'file', icon2: icon3 },
    { id: 7, size: ' ', icon1: icon4, title: 'Kasbiga oid videolar', subText: 'video', icon2: icon3 },
    { id: 8, size: ' ', icon1: icon5, title: 'Kasbiga oid malumot', subText: 'img', icon2: icon3 },
  ];

  return (
    <Wrapper>
      <Container>
        <Header>
          <IconWrap>
            <Icons.Arrow onClick={() => navigate(-1)} />
          </IconWrap>
          <Title type='max'>Portfolio</Title>
          <Dropdown
            trigger={['click']}
            dropdownRender={() => {
              return (
                <Menu>
                  <ListWrap>
                    <Icons.Addition />
                    <List data-name='favorites'>Video qo’shish</List>
                  </ListWrap>
                  <ListWrap>
                    <Icons.Del />
                    <List data-name='favorites'>O’chirish</List>
                  </ListWrap>
                  <ListWrap>
                    <Icons.Edit />
                    <List data-name='myprofile'>Tahrirlash</List>
                  </ListWrap>
                </Menu>
              )
            }}
          >
            <Icons.Angle />
          </Dropdown>
        </Header>
        {
          data?.map(({ id, icon1, title, subText, icon2, size }) => {
            return (
              <Content type='max' key={id}>
                <Content type='min'>
                  <Content type='subMin'>
                    <Img src={icon1} size={size} />
                    <Content type='minText'>{subText}</Content>
                  </Content>
                  <Content>{title}</Content>
                </Content>
                <Install src={icon2} />
              </Content>
            )
          })
        }
      </Container >
    </Wrapper >
  )
}