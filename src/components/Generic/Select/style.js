import { styled } from "styled-components";

import { ReactComponent as arrow } from "../../../assets/icons/arrow.svg";

const Arrow = styled(arrow)`
position: absolute;
right: 10px;
top: 50%;
transform: translateY(-50%);
cursor: pointer;
`;

const Wrap = styled.div`
position: relative;
width: 100%;
::-ms-expand{
  display: none;
} 
`

const SelectOption = styled.select`
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
width: 100%;
color: #969696;
padding: 15px 10px;
outline: none;
cursor: pointer;
background: #F5F5F5;
border: none;
font-size: 15px;
`;

const Options = styled.option``;



export {
  Wrap,
  SelectOption,
  Options,
  Arrow
}