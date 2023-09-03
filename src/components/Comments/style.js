import { styled } from "styled-components";

import { ReactComponent as arrow } from "../../assets/icons/arrow_prewiev.svg";

const Icons = styled.div``;

const IconWrap = styled.div`
@media(max-width: 576px){
position: absolute;
:hover{
  background: #f5f5f5;
}
:active{
  background: #f5f5f5;
  box-shadow: 0 0 10px #f3f3f3;
}
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
position: relative;
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


export {
  Container,
  IconWrap,
  Icons,
  Title,
  TitleWrapper,
  Wrapper
}