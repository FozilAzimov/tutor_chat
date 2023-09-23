import { styled } from "styled-components";

import { ReactComponent as arrow } from "../../assets/icons/arrow_prewiev.svg";
import { ReactComponent as angle } from "../../assets/icons/dodEdit.svg";
import { ReactComponent as addition } from "../../assets/icons/addition.svg";
import { ReactComponent as del } from "../../assets/icons/delete.svg";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as like } from "../../assets/icons/total_like.svg";
import { ReactComponent as romb } from "../../assets/icons/romb.svg";
import { ReactComponent as message } from "../../assets/icons/total_message.svg";
import { ReactComponent as leavel } from "../../assets/icons/card_leavel.svg";
import { ReactComponent as no_liked } from "../../assets/icons/no_liked.svg";
import { ReactComponent as university } from "../../assets/icons/university.svg";
import { ReactComponent as sovga } from "../../assets/icons/sovga.svg";
import { ReactComponent as avatar } from "../../assets/icons/avatar.svg";
import { ReactComponent as totalClose } from "../../assets/icons/total_close.svg";
import { ReactComponent as totalGalichka } from "../../assets/icons/total_galichka.svg";
import { ReactComponent as iconImagePlus } from "../../assets/icons/icon_image-plus.svg";

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
margin-left: ${({ nonepadding }) => nonepadding ? '0' : '20px'};
}
`;
Icons.Addition = styled(addition)`
cursor: pointer;
`;
Icons.Del = styled(del)`
cursor: pointer;
`;
Icons.Edit = styled(edit)`
cursor: pointer;
`;
Icons.University = styled(university)`
cursor: pointer;
`;
Icons.Sovga = styled(sovga)`
cursor: pointer;
`;
Icons.Avatar = styled(avatar)`
cursor: pointer;
width: 52px;
height: 59px;
@media (max-width:380px){
  width: 40px;
  height: 47px;
}
`;
Icons.Like = styled(like)`
@media(max-width: 576px){
cursor: pointer;
}
@media(max-width: 350px){
  width: 14px !important;
  height: 14px !important;
}
`;
Icons.Romb = styled(romb)`
@media(max-width: 576px){
cursor: pointer;
}
@media(max-width: 350px){
  width: 14px !important;
  height: 14px !important;
}
`;
Icons.Message = styled(message)`
@media(max-width: 576px){
cursor: pointer;
}
@media(max-width: 350px){
  width: 14px !important;
  height: 14px !important;
}
`;
Icons.Leavel = styled(leavel)`
@media(max-width: 576px){
cursor: pointer;
width: 16px !important;
height: 16px !important;
}
@media(max-width: 350px){
  width: 14px !important;
  height: 14px !important;
}
`;
Icons.NoLiked = styled(no_liked)`
@media(max-width: 576px){
cursor: pointer;
width: 15px !important;
height: 15px !important;
}
@media(max-width: 350px){
  width: 13px !important;
  height: 13px !important;
}
`;
Icons.TotalClose = styled(totalClose)`
cursor: pointer;
`;
Icons.TotalGalichka = styled(totalGalichka)`
cursor: pointer;
`;
Icons.IconImagePlus = styled(iconImagePlus)`
cursor: pointer;
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
padding-top: 20px;
}
`

const Container = styled.div`
@media(max-width: 576px){
padding: 0 27px;
::placeholder{
  color: rgba(153, 153, 153, 1);
  font-size: 10px;
}
}
`

const Header = styled.div`
@media(max-width: 576px){
display: flex;
justify-content: space-between;
align-items: center;
}
`

const getTitleMax = ({ type }) => {
  switch (type) {
    case 'large': return {
      color: '000',
      fontSize: '20px',
      fontWeight: '600'
    };
    case 'max': return {
      color: '000',
      fontSize: '20px',
      fontWeight: '500'
    };
    default: return {
      color: 'rgba(154, 154, 154, 1)',
      fontSize: '14px',
      fontWeight: '400',
      textAlign: 'center',
      lineHeight: '0',
    }
  }
}

const getTitleMediumMin = ({ type }) => {
  switch (type) {
    case 'large': return {
      color: '000',
      fontSize: '16px',
      fontWeight: '600'
    };
    case 'max': return {
      color: '000',
      fontSize: '18px',
      fontWeight: '500'
    };
    default: return {
      color: 'rgba(154, 154, 154, 1)',
      fontSize: '13px',
      fontWeight: '400',
      textAlign: 'center',
      lineHeight: '0',
    }
  }
}

const getTitleMin = ({ type }) => {
  switch (type) {
    case 'large': return {
      color: '000',
      fontSize: '15px',
      fontWeight: '600'
    };
    case 'max': return {
      color: '000',
      fontSize: '18px',
      fontWeight: '500'
    };
    default: return {
      color: 'rgba(154, 154, 154, 1)',
      fontSize: '13px',
      fontWeight: '400',
      textAlign: 'center',
      lineHeight: '0',
    }
  }
}

const Title = styled.div`
@media (max-width: 576px) {
  ${getTitleMax};
  font-family: 'Inter', sans-serif;
}
@media (max-width: 400px) {
  ${getTitleMediumMin};
  font-family: 'Inter', sans-serif;
}
@media (max-width: 350px) {
  ${getTitleMin};
  font-family: 'Inter', sans-serif;
}
`

const getTypeDropdown = ({ type }) => {
  switch (type) {
    case 'video': return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      padding: '22px 18px',
      width: '88%',
      height: '200px',
      background: '#fff',
      gap: '10px',
      borderRadius: '5px',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -30%)',
      boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.3)',
    };
    default: return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      padding: '6px 10px',
      width: '140px',
      background: '#fff',
      boxShadow: '0px 5px 15px 0px rgba(0, 0, 0, 0.05)',
      gap: '10px',
      borderRadius: '2px',
      position: 'absolute',
      left: '-130px',
    };
  }
}

const getTypeDropdownTo = ({ type }) => {
  switch (type) {
    case 'video': return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      padding: '20px 16px',
      width: '88%',
      height: '190px',
      background: '#fff',
      gap: '10px',
      borderRadius: '5px',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -30%)',
      boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.3)',
    };
    default: return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      padding: '6px 10px',
      width: '140px',
      background: '#fff',
      boxShadow: '0px 5px 15px 0px rgba(0, 0, 0, 0.05)',
      gap: '10px',
      borderRadius: '2px',
      position: 'absolute',
      left: '-130px',
    };
  }
}

const Menu = styled.div`
@media(max-width: 576px) {
${getTypeDropdown}
}
@media(max-width: 400px) {
${getTypeDropdownTo}
}
`

const getTypeListGroup = ({ type }) => {
  switch (type) {
    case 'modal': return {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: '5px',
    };
    case 'centerList': return {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '15px 0',
      borderTop: '1px solid rgba(236, 239, 244, 1)',
      borderBottom: '1px solid rgba(236, 239, 244, 1)',
    };
    case 'modalCenterList': return {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5px 0',
    };
    default: return {
      width: 'fit-content',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    };
  }
}

const ListWrap = styled.div`
@media(max-width: 576px) {
${getTypeListGroup};
}
`

const List = styled.div`
@media(max-width: 576px) {
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #000;
cursor: pointer;
margin-left: 15px;
}
`

const SubTextModal = styled.div`
@media(max-width: 576px) {
color: #347AE2;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 104.5%;
margin-top: 7px;
cursor: pointer;
}
`

const Video = styled.div`
@media(max-width: 576px) {
width: 100%;
text-align: center;
margin-top: 10px;
}
`

const Img = styled.img`
@media(max-width: 576px) {
width: 100%;
cursor: pointer;
}
`

const VideoSubTitle = styled.div`
@media(max-width: 576px) {
width: 100%;
text-align: end;
margin-top: 10px;
font-size: 14px;
font-weight: 500;
color: rgba(52, 122, 226, 1);
cursor: pointer;
}
@media(max-width: 350px) {
font-size: 12px;
}
`

const Text = styled.div`
@media (max-width: 576px){
  font-weight: 600;
  font-size: 28px;
  color: rgba(0, 0, 0, 1);
  line-height: 29.26px;
}
@media (max-width: 350px){
  font-size: 24px;
  line-height: 23px;
}
`

const Progress = styled.div`
@media (max-width: 576px){
  width: 90%;
  height: 18px;
  border-radius: 50px;
  background: rgba(199, 223, 255, 1);
  margin-top: 7px;
  position: relative;
}
@media (max-width: 350px){
  width: 85%;
  height: 16px;
}
`

const Rectangle = styled.div`
@media (max-width: 576px){
  width: 50%;
  height: 18px;
  border-radius: 50px;
  background: rgba(85, 149, 234, 1);
  position: absolute;
  left: 0;
}
@media (max-width: 350px){
  height: 16px;
}
`

const Completed = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
font-weight: 400;
color: rgba(255, 255, 255, 1);
z-index: 10;
`

const ModalTitle = styled.div`
@media (max-width: 576px){
font-size: 14px;
color: #292C38;
font-weight: 700;
}
`

const LikedGroup = styled.div`
@media (max-width: 576px){
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`

const getType = ({ type }) => {
  switch (type) {
    case 'max': return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '15px'
    }
    case 'min': return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '8px'
    }
    case 'primary': return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'rgba(70, 140, 231, 1)',
      gap: '4px',
    }
    case 'primarySub': return {
      display: 'flex',
      alignItems: 'center',
      color: 'rgba(70, 140, 231, 1)',
      gap: '5px',
      margin: '8px 0'
    }
    default: return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '4px',
    }
  }
}

const getTypeTo = ({ type }) => {
  switch (type) {
    case 'max': return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '15px'
    }
    case 'min': return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '8px'
    }
    case 'primary': return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'rgba(70, 140, 231, 1)',
      gap: '4px',
    }
    case 'primarySub': return {
      display: 'flex',
      alignItems: 'center',
      color: 'rgba(70, 140, 231, 1)',
      gap: '5px',
      margin: '8px 0'
    }
    default: return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '0'
    }
  }
}

const Box = styled.div`
@media (max-width: 576px){
  ${getType};
  font-size: 12px;
}
@media (max-width: 350px){
  ${getTypeTo};
}


`

const getTutorialVideoType = ({ type }) => {
  switch (type) {
    case 'max': return {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginTop: '7px',
      marginBottom: '15px',
    }
    case 'min': return {
      width: '59px',
      height: '59px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '18px',
      boxShadow: `0px 0.49732357263565063px 7.543533802032471px 0px rgba(114, 129, 223, 0.3)`,
    }
    case 'direction': return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      justifyContent: 'center',
      gap: '5px',
    }
    case 'large': return {
      color: 'rgba(0, 0, 0, 1)',
      fontSize: '16px',
      fontWeight: '600',
    }
    default: return {
      color: 'rgba(95, 95, 95, 1)',
      fontSize: '12px',
      fontWeight: '400',
    }
  }
}

const TutorialVideoBox = styled.div`
@media (max-width: 576px){
  ${getTutorialVideoType};
}
`

const Input = styled.input`
@media (max-width: 576px){
  width: 100%;
  height: 36px;
  border: none;
  outline: none;
  border-radius: 4px;
  border-bottom: 1px solid rgba(234, 234, 234, 1);
  box-shadow: 0px 17px 215px 0px rgba(114, 129, 223, 0.2);
  padding-left: 15px;
  font-size: 10px;
}
`

const TeacherCard = styled.div`
@media (max-width: 576px){
  height: 121px;
  width: 100%;
  border-radius: 30px;
  box-shadow: 0px 17px 215px 0px rgba(114, 129, 223, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 30px 0;
  padding: 0 20px 0 10px;
}
@media (max-width: 380px){
  padding: 0 10px 0 5px;
}
`

const getItem = ({ type }) => {
  switch (type) {
    case 'icon': return {
      width: '95px',
      height: '95px',
      background: 'linear-gradient(180deg, #E2DAFD 0%, #D6CBFC 100%)',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    };
    case 'text': return {};
    default: return {
      display: 'flex',
      alignItems: 'start',
      height: '85px',
    }
  }
}

const getItemTo = ({ type }) => {
  switch (type) {
    case 'icon': return {
      width: '70px',
      height: '70px',
      background: 'linear-gradient(180deg, #E2DAFD 0%, #D6CBFC 100%)',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    };
    case 'text': return {};
    default: return {
      display: 'flex',
      alignItems: 'start',
      height: '85px',
    }
  }
}

const CardItem = styled.div`
@media (max-width: 576px){
  ${getItem};
}
@media (max-width: 380px){
  ${getItemTo};
}
`

const CardBtn = styled.div`
@media (max-width: 576px){
  padding: 3px 5px;
  border-radius: 6px;
  color: rgba(154, 154, 154, 1);
  border: 1px solid rgba(154, 154, 154, 1);
  font-size: 10px;
  font-weight: 400;
  margin-right: 4px;
  cursor: pointer;
}
`







export {
  Container,
  Header,
  IconWrap,
  Icons,
  List,
  ListWrap,
  SubTextModal,
  Menu,
  Title,
  Wrapper,
  Video,
  Img,
  VideoSubTitle,
  Text,
  Progress,
  Rectangle,
  Completed,
  LikedGroup,
  Box,
  TutorialVideoBox,
  Input,
  TeacherCard,
  CardItem,
  CardBtn,
  ModalTitle,
}