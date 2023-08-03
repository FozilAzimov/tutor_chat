import { styled } from "styled-components";
import { ReactComponent as user_foto } from "../../assets/icons/user_foto.svg";
import { ReactComponent as acount } from "../../assets/icons/acount_icon.svg";
import { ReactComponent as hiddenfalse } from "../../assets/icons/hidden_false.svg";
import { ReactComponent as hiddentrue } from "../../assets/icons/hidden_true.svg";

const Icons = styled.div``;

Icons.UserPhoto = styled(user_foto)`
cursor: pointer;
`;
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

const getType = ({ type }) => {
  switch (type) {
    case 'bold': return {
      color: '#000000',
      fontWeight: '500',
      fontSize: '18px',
      marginTop: '10px',
    }
    default: return {
      color: '#969696',
      fontWeight: '400',
      fontSize: '15px',
      marginTop: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
    }
  }
}

const TitleText = styled.div`
@media(max-width: 576px){
${getType}
}
`

const Wrap = styled.div`
@media(max-width: 576px){
  width: 100%;
  position: relative;
}
`









export {
  Wrapper,
  Title,
  TitleText,
  Icons,
  Wrap,
}