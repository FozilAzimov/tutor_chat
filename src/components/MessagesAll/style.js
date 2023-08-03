import { styled } from "styled-components";

import { ReactComponent as arrow } from "../../assets/icons/arrow_prewiev.svg";

const Icons = styled.div``;

const IconWrap = styled.div`
:hover{
  background: #f5f5f5;
}
:active{
  background: #f5f5f5;
  box-shadow: 0 0 10px #f3f3f3;
}
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

const getMargin = ({ type }) => {
  switch (type) {
    case 'top': return '50px';
    default: return '0';
  }
}

const TitleWrapper = styled.div`
@media(max-width: 576px){
display: flex;
align-items: center;
margin-bottom: ${getMargin};
}
`

const Title = styled.div`
@media(max-width: 576px){
text-align: center;
width: 100%;
font-size: 20px;
font-weight: 500;
font-family: 'Inter', sans-serif;
}
`

const MessageBox = styled.div`
@media(max-width: 576px){
width: 100%;
font-size: 20px;
font-weight: 500;
font-family: 'Inter', sans-serif;
display: flex;
flex-direction: column;
align-items: center;
font-size: 12px;
font-weight: 400;
color: #8C8C8C;
}
`

const MessageContent = styled.div`
@media(max-width: 576px){
width: 100%;
padding: 10px 15px;
margin: 12px auto 40px auto;
box-shadow: 0px 4px 4px 0px #00000040;
border-radius: 10px;
cursor: pointer;
}
`

const getType = ({ type }) => {
  switch (type) {
    case 'bold': return {
      fontSize: '13px',
      fontWeight: '600',
      color: '#323232',
      marginBottom: '10px'
    };
    default: return {
      fontSize: '15px',
      fontWeight: '300',
      color: '#000'
    }
  }
}

const Messages = styled.div`
@media(max-width: 576px){
${getType}
}
`

const Link = styled.div`
@media(max-width: 576px){
width: fit-content;
color: #347AE2;
font-size: 16px;
font-weight: 400;
margin-top: 20px;
cursor: pointer;
}
`

const WrapLink = styled.div`
@media(max-width: 576px){
display: flex;
justify-content: center;
:hover{
  color: #0a59d0;
}
}
`;


export {
  Wrapper,
  Icons,
  IconWrap,
  Container,
  TitleWrapper,
  Title,
  MessageBox,
  MessageContent,
  Messages,
  Link,
  WrapLink
}