import { styled } from "styled-components";

import { ReactComponent as arrow } from "../../assets/icons/arrow_prewiev.svg";
import { ReactComponent as addition } from "../../assets/icons/addition.svg";
import { ReactComponent as del } from "../../assets/icons/delete.svg";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as angle } from "../../assets/icons/dodEdit.svg";

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

const getTypeContent = ({ type }) => {
  switch (type) {
    case 'max': return {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
    };
    case 'min': return {
      display: 'flex',
      alignItems: 'center',
    };
    case 'subMin': return {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };
    case 'minText': return {
      fontSize: '9px',
      color: '#969696',
      margin: '3px 15px 0 0',
    };
    default: return {
      color: '#000',
      fontSize: '16px',
      fontWeight: '400',
    }
  }
}

const getTypeContentMin = ({ type }) => {
  switch (type) {
    case 'max': return {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
    };
    case 'min': return {
      display: 'flex',
      alignItems: 'center',
    };
    case 'subMin': return {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };
    case 'minText': return {
      fontSize: '9px',
      color: '#969696',
      margin: '3px 15px 0 0',
      cursor: 'pointer',
    };
    default: return {
      color: '#000',
      fontSize: '14px',
      fontWeight: '400',
    }
  }
}

const Content = styled.div`
@media(max-width: 576px) {
  ${getTypeContent};
}
@media(max-width: 350px) {
  ${getTypeContentMin};
}
`

const Img = styled.img`
@media(max-width: 576px) {
  width: ${({ size }) => size ? '55px' : '40px'};
  margin-right: ${({ size }) => size ? '15px' : '27px'};
  cursor: pointer;
}
@media(max-width: 350px) {
  width: ${({ size }) => size ? '50px' : '35px'};
  margin-right: ${({ size }) => size ? '13px' : '27px'};
  cursor: pointer;
}
`

const Install = styled.img`
@media(max-width: 576px) {
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
  Menu,
  Title,
  Wrapper,
  Content,
  Img,
  Install
}