import { styled } from "styled-components";
import { ReactComponent as acount } from "../../assets/icons/acount_icon.svg";
import { ReactComponent as hiddenfalse } from "../../assets/icons/hidden_false.svg";
import { ReactComponent as hiddentrue } from "../../assets/icons/hidden_true.svg";

const Icons = styled.div``;

Icons.Acount = styled(acount)``;
Icons.HiddenFalse = styled(hiddenfalse)`
position: absolute;
right: 20px;
top: 58%;
z-index: 1;
cursor: pointer;
`;
Icons.HiddenTrue = styled(hiddentrue)`
position: absolute;
right: 20px;
top: 55%;
z-index: 1;
cursor: pointer;
`;


const Wrapper = styled.div`
@media(max-width: 576px){
  width: 100%;
  padding: var(--paddingMin);
}
`

const Title = styled.div`
@media(max-width: 576px){
  width: 100%;
  text-align: center;
  margin-top: 25px;
}
`

const TitleImg = styled.img`
@media(max-width: 576px){
  width: 53px;
  height: 50px;
}
`;

const TitleText = styled.div`
@media(max-width: 576px){
  color: var(--textLightColor);
  font-weight: 500;
  font-size: 15px;
  line-height: 18.15px;
  margin-top: 10px;
}
@media(max-width: 350px){
  font-size: 13px;
}
`

const TitleTextWrapper = styled.div`
@media(max-width: 576px){
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 50px;
margin-bottom: 40px;
}
`

const getTypeBox = ({ type }) => {
  switch (type) {
    case 'span':
      return {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        gap: '10px',
        paddingRight: '30px',
      };
    default:
      return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };
  }
}

const Box = styled.div`
@media(max-width: 576px){
  ${getTypeBox};
  text-align: left;
}
`

const getTypeSpan = ({ type }) => {
  switch (type) {
    case 'max':
      return {
        color: '#000',
        fontSize: '20px',
        fontWeight: '600'
      };
    default:
      return {
        color: '#969696',
        fontSize: '15px',
        fontWeight: '400'
      };
  }
}

const Span = styled.span`
@media(max-width: 576px){
  ${getTypeSpan};
}
`

const Wrap = styled.div`
@media(max-width: 576px){
  width: 100%;
  position: relative;
}
`

const Check = styled.div`
@media(max-width: 576px){
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 13px;
  font-weight: 4000;
  margin-top: 20px;
}
`

const SpanText = styled.span`
display: flex;
justify-content: center;
align-items: center;
font-size: 12px;
font-weight: 300;
margin-top: 40px;
`

const Link = styled.div`
color: var(--textPrimaryColor);
cursor: pointer;
margin: 0 5px;
`

const FooterBtn = styled.div`
width: 50px;
color: #555;
font-size: 12px;
font-weight: 700;
text-decoration: underline;
cursor: pointer;
`





export {
  Wrapper,
  TitleImg,
  Title,
  TitleText,
  TitleTextWrapper,
  Box,
  Span,
  Icons,
  Wrap,
  Check,
  SpanText,
  Link,
  FooterBtn
}