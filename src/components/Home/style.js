import { styled } from "styled-components";

import { ReactComponent as message } from "../../assets/icons/home_message.svg";
import { ReactComponent as telegram } from "../../assets/icons/tg_message.svg";
import { ReactComponent as search } from "../../assets/icons/home_search.svg";

const Icons = styled.div``;
Icons.Message = styled(message)``;
Icons.Telegram = styled(telegram)``;
Icons.Search = styled(search)`
position: absolute;
left: 20px;
top: 50%;
transform: translateY(-40%);
`;

const Wrapper = styled.div`
width: 100%;
margin-top: 25px;
`

const Container = styled.div`
padding: 0 27px;
`

const getType = ({ type }) => {
  switch (type) {
    case 'min': return '80px';
    default: return '100%';
  }
}

const BoxTitle = styled.div`
display: flex;
width:${getType};
justify-content: space-between;
align-items: center;
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
${getSize}
`

const Box = styled.div`
position: relative;
margin-top: 15px;
`;
const Input = styled.input`
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
`

const CategoryWrap = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
`

const Category = styled.div`
width: fit-content;
padding: 8px 10px;
background: #F4F4F4;
border-radius: 11px;
display: flex;
justify-content: space-between;
align-items: center;
margin-right: ${({ mg }) => mg ? '10px' : '0'};
margin-top: 20px;
:hover{
  cursor: pointer;
}
`

const Text = styled.span`
font-size: 14px;
font-weight: 400;
color: #5F5F5F;
margin-left: 5px;
`

const CategoryIcon = styled.img``;




export {
  Wrapper,
  BoxTitle,
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