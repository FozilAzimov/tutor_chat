import { styled } from "styled-components";

import { ReactComponent as arrow } from "../../assets/icons/arrow_prewiev.svg";
import { ReactComponent as angle } from "../../assets/icons/dodEdit.svg";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as logout } from "../../assets/icons/loguot.svg";

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
margin: 0 10px;
}
`;
Icons.Edit = styled(edit)`
cursor: pointer;
`;
Icons.Logout = styled(logout)`
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
      fontSize: '15px',
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
      fontSize: '14px',
      fontWeight: '400',
      textAlign: 'center',
      lineHeight: '0',
    }
  }
}

const Title = styled.div`
@media (max-width: 576px) {
  ${getTitleMax}
}
@media (max-width: 350px) {
  ${getTitleMin}
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



export {
  Container,
  Header,
  IconWrap,
  Icons,
  List,
  ListWrap,
  Menu,
  Title,
  Wrapper
}