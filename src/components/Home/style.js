import { styled } from "styled-components";

import { ReactComponent as message } from "../../assets/icons/home_message.svg";
import { ReactComponent as telegram } from "../../assets/icons/tg_message.svg";
import { ReactComponent as search } from "../../assets/icons/home_search.svg";

const Icons = styled.div``;

Icons.Message = styled(message)`
cursor: pointer;
width: 30px;
height: 30px;
`;
Icons.Telegram = styled(telegram)`
cursor: pointer;
width: 30px;
height: 30px;
`;
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

const getType = ({ type }) => {
  switch (type) {
    case 'min': return '90px';
    default: return '100%';
  }
}

const BoxTitle = styled.div`
@media(max-width: 576px){
display: flex;
width:${getType};
justify-content: space-between;
align-items: center;
}
`

const getSize = ({ type }) => {
  switch (type) {
    case 'lg': return {
      color: '#000',
      fontSize: '25px',
      fontWeight: '600',
    };
    case 'md': return {
      color: '#000',
      fontSize: '23px',
      fontWeight: '400',
      marginTop: '20px',
    };
    default: return {
      color: '#000',
      fontSize: '16px',
      fontWeight: '400',
    };
  }
}

const Title = styled.div`
@media(max-width: 576px){
${getSize}
}
`

const IconWrap = styled.div`
@media(max-width: 576px){
position: relative;
}
`

const getHidden = ({ type }) => {
  switch (type) {
    case '1': return {
      position: 'absolute',
      width: '22px',
      height: '15px',
      borderRadius: '22px',
      background: '#c00',
      right: '-9px',
      top: '-4px',
      color: '#fff',
      fontSize: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: '400',
    };
    case '0': return {
      display: 'none',
    };
    case ' ': return {
      position: 'absolute',
      width: '22px',
      height: '15px',
      borderRadius: '22px',
      background: '#c00',
      right: '-9px',
      top: '-4px',
      color: '#fff',
      fontSize: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: '400',
    };
    case '': return {
      display: 'none',
    };
    default: return {
      position: 'absolute',
      width: '22px',
      height: '15px',
      borderRadius: '22px',
      background: '#c00',
      right: '-9px',
      top: '-4px',
      color: '#fff',
      fontSize: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: '400',
    }
  }
}

const Count = styled.div`
@media(max-width: 576px){
${getHidden};
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
gap: 5px;
:active{
  background:  #DDEBFF;
}
:hover{
  cursor: pointer;
}
}
`

const Category = styled.div`
@media(max-width: 576px){
text-decoration: none;
width: fit-content;
padding: 7px;
background: #F4F4F4;
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
font-weight: 400;
color: #5F5F5F;
margin-left: 5px;
}
`

const CategoryIcon = styled.img`
width: 10px;
`;




export {
  Wrapper,
  BoxTitle,
  IconWrap,
  Count,
  Title,
  Icons,
  Container,
  Box,
  Input,
  CategoryWrap,
  Category,
  Text,
  CategoryIcon,
}