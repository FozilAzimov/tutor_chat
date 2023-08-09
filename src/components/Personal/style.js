import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

import { ReactComponent as search } from "../../assets/icons/tg_search.svg";
import { ReactComponent as arrow } from "../../assets/icons/arrow_prewiev.svg";

const Icons = styled.div``;

Icons.Search = styled(search)`
position: absolute;
left: 18px;
top: 50%;
transform: translateY(-50%);
`;

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
margin-top: 25px;
}
`

const Container = styled.div`
@media(max-width: 576px){
padding: 0 27px;
}
`

const getBack = ({ type }) => {
  switch (type) {
    case 'parent': return {
      display: 'flex',
      alignItems: 'center',
      marginTop: '15px',
    };
    default: return {
      position: 'relative',
      width: '100%',
      marginLeft: '10px',
    }
  }
}

const Box = styled.div`
@media(max-width: 576px){
${getBack};
}
`;

const Input = styled.input`
@media(max-width: 576px){
width: 100%;
height: 44px;
font-size: 14px;
font-weight: 400;
padding-left: 50px;
border: none;
outline: none;
border-radius: 12px;
background: #F8FBFF;
::placeholder{
  color: #96A0B5;
}
}
`

const CategoryWrap = styled.div`
@media(max-width: 576px){
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
gap: 5px;
margin-bottom: 30px;
.active{
  background: #DDEBFF;
}
:hover{
  cursor: pointer;
}
}
`

const Category = styled(NavLink)`
@media(max-width: 576px){
text-decoration: none;
width: fit-content;
padding: 8px 10px;
background: #F8FBFF;
border-radius: 11px;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;
}
`

const Text = styled.span`
@media(max-width: 576px){
font-size: 12px;
font-weight: 700;
color: #292C38;
display: flex;
justify-content: center;
align-items: center;
padding: 0;
}
`

const Content = styled.div`
@media(max-width: 576px){
width: 100%;
padding: 20px 50px;
display: flex;
justify-content: space-between;
align-items: center;
background: rgba(236, 239, 244, .1);
cursor: pointer;
border-top: 1px solid rgb(236, 239, 244);
}
@media (max-width:400px){
  padding: 15px 27px;
}
`

const UserImg = styled.img`
cursor: pointer;
`;

const getBox = ({ type }) => {
  switch (type) {
    case 'max': return {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '20px'
    };
    case 'min': return {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start',
    };
    default: return {
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',
    };
  }
}

const ContentBox = styled.div`
@media(max-width: 576px){
${getBox};
}
`

const getType = ({ type }) => {
  switch (type) {
    case 'bold': return {
      fontSize: '14px',
      fontWeight: '700',
    };
    default: return {
      fontSize: '12px',
      fontWeight: '500',
    };
  }
}

const ContentText = styled.div`
@media(max-width: 576px){
width: fit-content;
color: #292C38;
${getType};
padding-bottom: 8px;
}
`


export {
  Wrapper,
  Icons,
  IconWrap,
  Container,
  Box,
  Input,
  CategoryWrap,
  Category,
  Text,
  Content,
  UserImg,
  ContentBox,
  ContentText
}