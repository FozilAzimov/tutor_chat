import { styled } from "styled-components";

const getWidth = ({ width }) => {
  if (`${width}`.includes('100%')) return '100%';
  else if (!width) return '0px';
  else return `${width}px`;
}

const getType = ({ type }) => {
  switch (type) {
    case 'primary':
      return {
        background: '#5595EA',
        color: '#fff'
      };
    default:
      return {
        background: '#9FC9EF',
        color: '#FDFDFD63'
      };
  }
}

const marginTop = ({ top }) => {
  if (!top) return '0px';
  else return `${top}px`;
}

const GenericBtn = styled.button`
@media(max-width: 576px){
  width: ${getWidth};
  ${getType};
  padding: 14px 0;
  margin-top: ${marginTop};
  border: none;
  font-size: 20px;
  font-weight: 700px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
}
@media(max-width: 350px){
  padding: 10px 0;
  font-size: 18px;
}
`


export {
  GenericBtn,
}