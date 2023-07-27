import { styled } from "styled-components";

import { ReactComponent as user_img } from "../../assets/icons/user_img.svg";
import { ReactComponent as leavel } from "../../assets/icons/card_leavel.svg";
import { ReactComponent as card_rectangle } from "../../assets/icons/card_rectangle.svg";

const Icons = styled.div``;
Icons.UserImg = styled(user_img)`
width: 35px;
height: 35px;
border-radius: 50%;
background: #E5F0FF;
`;
Icons.Leavel = styled(leavel)`
margin-right: 5px;
`;
Icons.Rectangle = styled(card_rectangle)``;

const Wrapper = styled.div`
width: 100%;
`
const Container = styled.div`
padding: var(--paddingMin);
`

const UserName = styled.div`
display: flex;
align-items: center;
margin-left: 5px;
margin-top: 20px;
`

const getType = ({ type }) => {
  switch (type) {
    case 'lg': return {
      color: '#fff',
      fontSize: '18px',
      fontWeight: '500',
    };
    case 'md': return {
      color: '#1C3554',
      fontSize: '16px',
      fontWeight: '600',
    };
    case 'sm': return {
      color: '#CFCFCF',
      fontSize: '14px',
      fontWeight: '400',
      marginTop: '10px',
    };
    default: return {
      color: '#000',
      fontSize: '17px',
      fontWeight: '400',
      marginLeft: '10px',
    }
  }
}

const UserText = styled.div`
${getType}
`

const CardImg = styled.img`
width: 100%;
`;

const CardTitle = styled.div`
position: relative;
margin-bottom: 23px;
`;

const CardMessage = styled.div`
position: absolute;
top: -17px;
width: 100%;
height: 34px;
background: #4586D6;
display: flex;
align-items: center;
`;

const getLiked = ({ type }) => {
  switch (type) {
    case 'liked': return {
      display: 'flex',
      alignItems: 'center',
    };
    default: return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '10px',
    }
  }
}

const Liked = styled.div`
${getLiked}
`

const Input = styled.input`
width: 100%;
height: 44px;
font-size: 14px;
font-weight: 400;
padding-left: 20px;
box-shadow: 0px 5px 31px 0px #00000008;
border: 1px solid #F3F3F3;
outline: none;
margin-top: 10px;
::placeholder{
  color: #CFCFCF;
}
`





export {
  Icons,
  Wrapper,
  Container,
  UserName,
  CardImg,
  UserText,
  CardTitle,
  CardMessage,
  Liked,
  Input
}