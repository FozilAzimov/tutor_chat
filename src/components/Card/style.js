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
cursor: pointer;
`;
Icons.Leavel = styled(leavel)`
margin-right: 5px;
cursor: pointer;
`;
Icons.Rectangle = styled(card_rectangle)`
cursor: pointer;
`;

const Wrapper = styled.div`
@media(max-width: 576px){
width: 100%;
}
`
const Container = styled.div`
@media(max-width: 576px){
padding: var(--paddingMin);
}
`

const UserName = styled.div`
@media(max-width: 576px){
  width: fit-content;
  display: flex;
  align-items: center;
  margin-left: 5px;
  margin-top: 20px;
  cursor: pointer;
}
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
      cursor: 'pointer',
    };
    case 'sm': return {
      color: '#CFCFCF',
      fontSize: '14px',
      fontWeight: '400',
      marginTop: '10px',
      cursor: 'pointer',
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
@media(max-width: 576px){
${getType}
}
`

const CardImg = styled.img`
@media(max-width: 576px){
width: 100%;
}
`;

const CardTitle = styled.div`
@media(max-width: 576px){
position: relative;
margin-bottom: 23px;
:active{
  background: #2b6ebf;
}
}
`;

const getPosition = ({ center }) => {
  switch (center) {
    case 'center': return {
      justifyContent: 'center',
      borderRadius: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '8px 10px'
    };
    case 'start': return {
      justifyContent: 'start',
    };
    default: return 'end';
  }
}

const CardMessage = styled.div`
@media(max-width: 576px){
position: absolute;
top: -18px;
width: ${({ width }) => {
    if (width.includes('100%')) return '100%';
    else if (!width) return '0';
    else return `${width}`;
  }};
height: 34px;
background: #4586D6;
display: flex;
align-items: center;
${getPosition};
cursor: pointer;
}
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
@media(max-width: 576px){
${getLiked}
}
`

const Comment = styled.div`
@media(max-width: 576px){
width: 100%;
height: 44px;
padding: 0 20px;
box-shadow: 0px 5px 31px 0px #00000008;
border: 1px solid #F3F3F3;
margin-top: 10px;
display: flex;
justify-content: space-between;
align-items: center;
::placeholder{
  color: #CFCFCF;
  font-size: 13px;
  font-weight: 400;
}
}
`

const InputComment = styled.input`
@media(max-width: 576px){
width: 100%;
height: 42px;
font-size: 13px;
font-weight: 400;
border: none;
outline: none;
margin-right: 20px;
}
`
const TextComment = styled.div`
@media(max-width: 576px){
color: ${({ isactive }) => isactive ? '#000' : '#CFCFCF'};
font-size: 13px;
font-weight: 400;
cursor: pointer;
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
  Comment,
  InputComment,
  TextComment
}