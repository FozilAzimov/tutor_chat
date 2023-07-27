import { styled } from "styled-components";
import { ReactComponent as inputIcon } from "../../../assets/icons/input_icon.svg";

const getWidth = ({ width }) => {
  if (`${width}`.includes('100%')) return '100%';
  else if (!width) return '0px';
  else return `${width}px`;
}

const Icons = styled.div``;
Icons.InputIcon = styled(inputIcon)`
position: absolute !important;
right: 0 !important;
top: 20px !important;
`;

const Wrap = styled.div`
position: relative;
width: 100%;
`

const getType = ({ type }) => {
  switch (type) {
    case 'checkbox': return {
      marginTop: '3px',
      cursor: 'pointer',
    };
    default: return {
      marginTop: '20px',
    };
  }
}

const GenericInput = styled.input`
@media(max-width: 576px){
  width: ${getWidth};
  padding: 14px 0;
  ${getType}
  font-size: 15px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  border: 2px solid #9B9B9B30;
  background: #9B9B9B26;
  outline: none;
  padding-left: 18px;
  ::placeholder{
    color: var(--textLightColor);
  }
}
@media(max-width: 350px){
  padding: 10px 0 10px 15px;
  font-size: 14px;
}
`


export {
  Wrap,
  GenericInput,
  Icons,
}