import { styled } from "styled-components";

import { ReactComponent as arrow } from "../../assets/icons/arrow_prewiev.svg";
import { ReactComponent as angle } from "../../assets/icons/dodEdit.svg";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as logout } from "../../assets/icons/loguot.svg";
import { ReactComponent as like } from "../../assets/icons/total_like.svg";
import { ReactComponent as chaqmoq } from "../../assets/icons/total_icon.svg";
import { ReactComponent as message } from "../../assets/icons/total_message.svg";

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
margin-left: 20px;
}
`;
Icons.Edit = styled(edit)`
cursor: pointer;
`;
Icons.Logout = styled(logout)`
cursor: pointer;
`;
Icons.Like = styled(like)`
cursor: pointer;
`;
Icons.Chaqmoq = styled(chaqmoq)`
cursor: pointer;
`;
Icons.Message = styled(message)`
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

const getTitleMin = ({ type }) => {
  switch (type) {
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
@media (max-width: 350px) {
  ${getTitleMin};
  font-family: 'Inter', sans-serif;
}
`

const Menu = styled.div`
@media(max-width: 576px) {
display: grid;
flex-direction: column;
align-items: start;
padding: 8px 10px;
width: 130px;
background: #fff;
box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
0px 7px 46px rgba(0, 0, 0, 0.06),
0px 8px 15px rgba(0, 0, 0, 0.06);
gap: 10px;
border-radius: 2px;
position: absolute;
left: -120px;
}
`

const ListWrap = styled.div`
@media(max-width: 576px) {
width: fit-content;
display: flex;
align-items: center;
cursor: pointer;
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

const getList = ({ type }) => {
  switch (type) {
    case 'max': return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    };
    case 'min': return {
      display: 'flex',
      alignItems: 'center',
    };
    default: return {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start',
      gap: '8px'
    }
  }
}

const TotalList = styled.div`
@media(max-width: 576px) {
${getList}
margin-top: ${({ top }) => top ? '30px' : '10px'};
}
`

const TotalImg = styled.img`
@media(max-width: 576px) {
  width: 80px;
  height: 80px;
  margin-right: 15px;
}
@media(max-width: 350px) {
  width: 70px;
  height: 70px;
  margin-right: 15px;
}
`

const getTitle = ({ type }) => {
  switch (type) {
    case 'sub': return {
      width: '160px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    };
    case 'subMin': return {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      fontSize: '12px',
      fontWeight: '500',
      color: 'rgba(154, 154, 154, 1)',
    };
    case 'firstSub': return {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      fontSize: '12px',
      fontWeight: '500',
      color: 'rgba(70, 140, 231, 1)',
    };
    default: return {
      fontSize: '18px',
      fontWeight: '400',
      color: 'rgba(0, 0, 0, 1)',
    }
  }
}

const getTitleSub = ({ type }) => {
  switch (type) {
    case 'sub': return {
      width: '140px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    };
    case 'subMin': return {
      display: 'flex',
      alignItems: 'center',
      gap: '3px',
      fontSize: '12px',
      fontWeight: '500',
      color: 'rgba(154, 154, 154, 1)',
    };
    case 'firstSub': return {
      display: 'flex',
      alignItems: 'center',
      gap: '3px',
      fontSize: '12px',
      fontWeight: '500',
      color: 'rgba(70, 140, 231, 1)',
    };
    default: return {
      fontSize: '16px',
      fontWeight: '400',
      color: 'rgba(0, 0, 0, 1)',
    }
  }
}

const TotalTitle = styled.div`
@media(max-width: 576px) {
${getTitle};
}
@media(max-width: 350px) {
${getTitleSub};
}
`


export {
  Container,
  Header,
  IconWrap,
  Icons,
  List,
  ListWrap,
  Menu,
  Title,
  Wrapper,
  TotalList,
  TotalImg,
  TotalTitle,
}