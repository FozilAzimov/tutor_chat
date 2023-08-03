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
width: 40px;
height: 40px;
cursor: pointer;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
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
font-family: 'Inter', sans-serif;
display: flex;
flex-direction: column;
align-items: start;
border-radius: 5px;
box-shadow: 0px 4px 4px 0px #00000040;
margin-bottom: 15px;
}
`

const MessageVideo = styled.img`
@media(max-width: 576px){
width: 100%;
}
`

const getTitle = ({ type }) => {
  switch (type) {
    case 'large': return {
      fontWeight: '700',
      color: '#323232',
      padding: '15px 30px 0px 8px',
    }
    case 'medium': return {
      fontWeight: '400',
      color: '#0A0A0A',
      padding: '15px 40px 50px 8px',
    }
    default: return {
      width: '100%',
      textAlign: 'right',
      fontWeight: '400',
      color: '#9A9A9A',
      padding: '0px 20px 20px 0px',
    }
  }
}

const MessageTitle = styled.div`
@media(max-width: 576px){
font-size: 13px;
${getTitle}
}
`




export {
  Container,
  IconWrap,
  Icons,
  MessageBox,
  Title,
  TitleWrapper,
  Wrapper,
  MessageVideo,
  MessageTitle
}