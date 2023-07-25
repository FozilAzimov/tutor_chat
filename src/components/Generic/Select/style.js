import { styled } from "styled-components";

const Selects = styled.select`

@media(max-width: 576px){
  width: 100%;
  padding: 17px 0 17px 15px;
  margin-top: 105px;
  color: var(--textLightColor);
  font-size: 15px;
  font-weight: 500;
  border: none;
  outline: none;
  background: var(--genericBackground);
  cursor: pointer;
}
@media(max-width: 350px){
  font-size: 15px;
  padding: 14px 0 14px 15px;
}
`

const Option = styled.option`
height: 33px;
border-radius: none;
`

export {
  Selects,
  Option
}