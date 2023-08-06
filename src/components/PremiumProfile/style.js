import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

import { ReactComponent as arrow } from "../../assets/icons/arrow_prewiev.svg";
import { ReactComponent as angle } from "../../assets/icons/dodEdit.svg";
import { ReactComponent as player } from "../../assets/icons/player.svg";
import { ReactComponent as video } from "../../assets/icons/profile_video.svg";

const Icons = styled.div``;

Icons.Arrow = styled(arrow)`
@media(max-width: 576px){
width: 40px;
height: 40px;
cursor: pointer;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
}
@media (max-width: 350px) {
  width: 35px;
  height: 35px;
}
`;
Icons.Angle = styled(angle)`
@media(max-width: 576px){
width: 20px;
height: 20px;
cursor: pointer;
padding: 4px;
}
`;
Icons.Player = styled(player)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
cursor: pointer;
`;
Icons.Video = styled(video)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
cursor: pointer;
@media (max-width: 350px) {
  width: 28px;
  height: 28px;
}
`;

const IconWrap = styled.div`
@media(max-width: 576px){
:hover{
  background: #f5f5f5;
}
:active{
  background: #f5f5f5;
  box-shadow: 0 0 10px #f3f3f3;
}
}
`;

const Wrapper = styled.div`
@media(max-width: 576px){
width: 100%;
padding-top: 25px;
}
`

const Container = styled.div`
@media(max-width: 576px){
padding: 0 27px;
}
`

const Header = styled.div`
@media(max-width: 576px){
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 25px;
}
`

const Title = styled.div`
@media (max-width: 576px) {
  color: #000;
  font-weight: 700;
  font-size: 15px;
}
@media (max-width: 350px) {
  font-size: 13px;
}
`

const ProfileSection = styled.div`
@media (max-width: 576px) {
width: 100%;
background: #FCFCFC;
border-radius: 50px 50px 0 0;
padding-bottom: 15px;
}
`


const ProfileHeader = styled.div`
@media (max-width: 576px) {
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 0;
}
`;

const ImgWrap = styled.div`
@media (max-width: 576px) {
position: relative;
}
`;

const Img = styled.img`
@media (max-width: 576px) {
  border-radius: 50%;
  position: absolute;
  top: -65px;
}
`;

const Box = styled.div`
@media (max-width: 576px) {
width: 58px;
height: 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
cursor: pointer;
}
`

const getType = ({ type }) => {
  switch (type) {
    case 'bold': return {
      fontWeight: '700',
      fontSize: '15px',
    }
    case 'medium': return {
      fontWeight: '500',
      fontSize: '13px',
      margin: '10px 0'
    }
    case 'mediumLight': return {
      fontWeight: '400',
      fontSize: '13px',
      color: '#6C7A9C',
      maxWidth: '280px',
      width: '100%',
      lineHeight: '22px'
    }
    case 'small': return {
      fontWeight: '500',
      fontSize: '10px',
      color: '#9A9A9A',
    }
    case 'link': return {
      fontWeight: '500',
      fontSize: '13px',
      color: '#347AE2',
      marginRight: '25px',
      cursor: 'pointer',
    }
    default: return {
      fontWeight: '400',
      fontSize: '13px',
    }
  }
}

const Text = styled.div`
@media (max-width: 576px) {
  ${getType}
}
`

const LinkWrap = styled.div`
@media (max-width:576px) {
  display: flex;
  align-items: center;
  margin-top: 10px;
  :hover{
    text-decoration: underline;
  }
}
`

const BtnWrap = styled.div`
@media (max-width:576px) {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  margin-top: 25px;
  :hover{
    cursor: pointer;
  }
}
`

const Btn = styled.div`
@media (max-width:576px) {
width: 106px;
height: 35px;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 10px 20px 0px #00000040;
font-size: 13px;
font-weight: 600;
background: ${({ follow }) => follow ? ' #5790DF' : '#fff'};
color: ${({ follow }) => follow ? '#fff' : '#000'};
}
`

const Pages = styled.div`
@media (max-width:576px) {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  margin-top: 30px;
  :hover{
    cursor: pointer;
  }
  .active{
    text-decoration: underline;
  }
}
`

const PagesText = styled(NavLink)`
@media(max-width: 576px) {
  text-decoration: none;
  color: #000;
  font-size: 13px;
  font-weight: 500;
}
`

const VideoWrapper = styled.div`
@media(max-width: 576px) {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
`

const VideoBox = styled.div`
@media(max-width: 576px) {
  width: calc(33.33% - 2px);
  height: 130px;
  margin-bottom: 3px;
  position: relative;
  cursor: pointer;
}
@media(max-width: 550px) {
  height: 125px;
}
@media(max-width: 500px) {
  height: 120px;
}
@media(max-width: 450px) {
  height: 110px;
}
@media(max-width: 400px) {
  height: 100px;
}
@media(max-width: 380px) {
  height: 90px;
}
@media(max-width: 350px) {
  height: 80px;
}
`

const VideoBoxImg = styled.img`
@media(max-width: 576px) {
  width: 100%;
  height: 130px;
}
@media(max-width: 550px) {
  height: 125px;
}
@media(max-width: 500px) {
  height: 120px;
}
@media(max-width: 450px) {
  height: 110px;
}
@media(max-width: 400px) {
  height: 100px;
}
@media(max-width: 380px) {
  height: 90px;
}
@media(max-width: 350px) {
  height: 80px;
}
`

const Parent = styled.div`
@media(max-width: 576px) {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
`

const CardName = styled.div`
@media(max-width: 576px) {
  width: fit-content;
  padding: 2px 8px;
  background: rgba(57, 96, 100, .5);
  position: absolute;
  top: 25px;
  transform: translateX(-50%);
  font-size: 7px;
  font-weight: 400;
  color: #fff;
  border-radius: 2px;
  border-radius: 2px;
}
@media(max-width: 350px) {
  top: 20px;
}
`

const VideoPrice = styled.div`
@media(max-width: 576px) {
  width: fit-content;
  padding: 2px 7px;
  background: rgba(87, 144, 223, 1);
  border-radius: 2px;
  color: #fff;
  font-size: 6px;
  font-weight: 400;
  position: absolute;
  right: 5px;
  bottom: 3px;
}
@media(max-width: 350px) {
  right: 2px;
  bottom: 0px;
}
`



export {
  Icons,
  IconWrap,
  Wrapper,
  Container,
  Header,
  Title,
  ProfileSection,
  ProfileHeader,
  ImgWrap,
  Img,
  Box,
  Text,
  LinkWrap,
  BtnWrap,
  Btn,
  Pages,
  PagesText,
  VideoWrapper,
  VideoBox,
  VideoBoxImg,
  Parent,
  CardName,
  VideoPrice,
}