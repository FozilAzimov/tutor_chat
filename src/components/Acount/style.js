import { styled } from "styled-components";
import { ReactComponent as language } from "../../assets/icons/language.svg";


const LanguageIcon = styled(language)`
@media(max-width: 576px){
  width: 50px;
  height: 50px;
}
@media(max-width: 350px){
  width: 45px;
  height: 45px;
}
`;

const Wrapper = styled.div`
@media(max-width: 576px){
  width: 100%;
}
`

const Title = styled.div`
@media(max-width: 576px){
  width: 100%;
  text-align: center;
  margin-top: 40px;
}
`

const TitleText = styled.div`
@media(max-width: 576px){
  color: var(--textLightColor);
  font-weight: 400;
  font-size: 20px;
  line-height: 27.24px;
}
@media(max-width: 350px){
  color: var(--textLightColor);
  font-weight: 400;
  font-size: 18px;
  line-height: 27.24px;
}
`

const FonImgWrap = styled.div`
@media(max-width: 576px){
  position: relative;
}

`

const FonImg = styled.div`
@media(max-width: 576px){
  width: 274px;
  height: 258px;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
}
`

const Img = styled.img`
@media(max-width: 576px){
  width: 100%;
  height: 100%;
}
`

export {
  LanguageIcon,
  Wrapper,
  Title,
  TitleText,
  FonImgWrap,
  FonImg,
  Img
}