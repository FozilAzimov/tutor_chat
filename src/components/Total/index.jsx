import React from 'react';

import videoImg from '../../assets/icons/total_video.svg';

import {
  Box,
  CardBtn,
  CardItem,
  Completed,
  Container,
  Header,
  IconWrap,
  Icons,
  Img,
  Input,
  LikedGroup,
  List,
  ListWrap,
  Menu,
  ModalTitle,
  Progress,
  Rectangle,
  SubTextModal,
  TeacherCard,
  Text,
  Title,
  TutorialVideoBox,
  Video,
  VideoSubTitle,
  Wrapper
} from './style';

import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'antd';

export default function Total () {

  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <Container>
          <Header>
            <IconWrap>
              <Icons.Arrow onClick={() => navigate(-1)} />
            </IconWrap>
            <Title type='max'>To’plam</Title>
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
          <Video>
            <Dropdown
              trigger={['click']}
              dropdownRender={() => {
                return (
                  <Menu type='video'>
                    <ListWrap type='modal'>
                      <Icons.TotalClose />
                      <ModalTitle>Edit</ModalTitle>
                      <Icons.TotalGalichka />
                    </ListWrap>
                    <ListWrap type='centerList'>
                      <Title type='large'>Matematika online kurslari</Title>
                    </ListWrap>
                    <ListWrap type='modalCenterList'>
                      <Icons.IconImagePlus />
                      <SubTextModal>Set Photo</SubTextModal>
                    </ListWrap>
                  </Menu>
                )
              }}
            >
              <Img src={videoImg} />
            </Dropdown>
          </Video>
          <VideoSubTitle>View all</VideoSubTitle>
          <Text>Matematika <br />online kurslar</Text>
          <Progress>
            <Completed>50% completed</Completed>
            <Rectangle />
          </Progress>
          <LikedGroup>
            <Box type='max'>
              <Box type='primary'>
                <Icons.Like />785
              </Box>
              <Box>
                <Icons.Romb />1k+
              </Box>
              <Box>
                <Icons.Message />850+
              </Box>
            </Box>
            <Box type='min'>
              <Box>
                <Icons.Leavel />
              </Box>
              <Box>
                <Icons.Leavel />
              </Box>
              <Box>
                <Icons.NoLiked />
              </Box>
              <Box>
                <Icons.NoLiked />
              </Box>
              <Box>
                <Icons.NoLiked />
              </Box>
              <Box>30</Box>
            </Box>
          </LikedGroup>
          <TutorialVideoBox type='max'>
            <TutorialVideoBox type='min'>
              <Icons.University />
            </TutorialVideoBox>
            <TutorialVideoBox type='direction'>
              <TutorialVideoBox type='large'>Video uchun 15 soat</TutorialVideoBox>
              <TutorialVideoBox>Mukammal tugatish uchun 15 soat ajrating</TutorialVideoBox>
            </TutorialVideoBox>
          </TutorialVideoBox>
          <TutorialVideoBox type='max'>
            <TutorialVideoBox type='min'>
              <Icons.Sovga />
            </TutorialVideoBox>
            <TutorialVideoBox type='direction'>
              <TutorialVideoBox type='large'>10+ video</TutorialVideoBox>
              <TutorialVideoBox>Qo’shimcha 10 ta darsliklar siz uchun</TutorialVideoBox>
            </TutorialVideoBox>
          </TutorialVideoBox>
          <Input placeholder='Izoh qoldirish' />
          <TeacherCard>
            <CardItem type='icon'>
              <Icons.Avatar />
            </CardItem>
            <CardItem type='text'>
              <TutorialVideoBox type='large'>Teacher Name</TutorialVideoBox>
              <TutorialVideoBox>Matematika o'qituvchisi</TutorialVideoBox>
              <Box type='primarySub'>
                <Icons.Like />5181
              </Box>
              <Box>
                <CardBtn>Follow</CardBtn>
                <CardBtn>Message</CardBtn>
                <CardBtn>Share</CardBtn>
              </Box>
            </CardItem>
            <CardItem>
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
                <Icons.Angle nonepadding="true" />
              </Dropdown>
            </CardItem>
          </TeacherCard>
        </Container >
      </Wrapper >
    </>
  )
}