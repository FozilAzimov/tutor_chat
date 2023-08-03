import { styled } from "styled-components";

import { ReactComponent as search } from "../../assets/icons/tg_search.svg";
import { NavLink } from "react-router-dom";

const Icons = styled.div``;

Icons.Search = styled(search)`
position: absolute;
left: 18px;
top: 50%;
transform: translateY(-50%);
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

const Box = styled.div`
@media(max-width: 576px){
position: relative;
margin-top: 15px;
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
padding: 8px 5px;
background: #F8FBFF;
border-radius: 11px;
display: flex;
justify-content: space-between;
align-items: center;
margin-right: ${({ mg }) => mg ? '10px' : '0'};
margin-top: 20px;
}
`

const Text = styled.span`
@media(max-width: 576px){
width: 100px;
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
padding: 20px 60px;
display: flex;
justify-content: space-between;
align-items: center;
background: rgba(236, 239, 244, .1);
cursor: pointer;
border-top: 1px solid rgb(236, 239, 244);
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

const ContentBox = styled.div`
@media(max-width: 576px){
${getBox};
}
`

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