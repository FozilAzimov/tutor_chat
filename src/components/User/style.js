import { styled } from "styled-components";

import { ReactComponent as search } from "../../assets/icons/home_search.svg";
import { NavLink } from "react-router-dom";

const Icons = styled.div``;

Icons.Search = styled(search)`
position: absolute;
left: 20px;
top: 50%;
transform: translateY(-40%);
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
box-shadow: 0px 5px 31px 0px #00000008;
border: none;
outline: none;
::placeholder{
  color: #9A9A9A;
}
}
`

const CategoryWrap = styled.div`
@media(max-width: 576px){
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
:hover{
  cursor: pointer;
}
.active{
  background: #DDEBFF;
}
}
`

const Category = styled(NavLink)`
@media(max-width: 576px){
text-decoration: none;
width: fit-content;
padding: 8px 10px;
background: #F4F4F4;
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
font-size: 14px;
font-weight: 400;
color: #5F5F5F;
margin-left: 5px;
}
`

const CategoryIcon = styled.img``;




export {
  Wrapper,
  Icons,
  Container,
  Box,
  Input,
  CategoryWrap,
  Category,
  Text,
  CategoryIcon,
}