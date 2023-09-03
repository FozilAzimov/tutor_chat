import { styled } from "styled-components";

import { ReactComponent as arrow } from "../../assets/icons/arrow_prewiev_white.svg";
import { ReactComponent as angle } from "../../assets/icons/angle_bottom.svg";
import { ReactComponent as player } from "../../assets/icons/player.svg";

const Icons = styled.div``;

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
@media (max-width: 350px) {
  width: 35px;
  height: 35px;
}
`;
Icons.Angle = styled(angle)`
@media(max-width: 576px){
margin: 0 10px;
width: 20px;
height: 20px;
cursor: pointer;
padding: 4px;
}
`;
Icons.Player = styled(player)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
cursor: pointer;
`;

const IconWrap = styled.div`
@media(max-width: 576px){
:hover{
  background: #555;
}
:active{
  background: #666;
  box-shadow: 0 0 10px #999;
}
}
`;

const Wrapper = styled.div`
@media(max-width: 576px){
width: 100%;
height: 100vh;
padding-top: 25px;
background: #000;
}
`

const Container = styled.div`
@media(max-width: 576px){
padding: 0 27px;
}
`

const Header = styled.div`
@media(max-width: 576px){
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 50px;
}
`

const Title = styled.div`
@media (max-width: 576px) {
  color: #FFFFFF;
  font-weight: 600;
  font-size: 20px;
}
@media (max-width: 350px) {
  font-size: 16px;
}
`

const Wrap = styled.div`
position: relative;
`

const Img = styled.img`
@media (max-width: 576px) {
width: 100%;
cursor: pointer;
}
`



export {
  Icons,
  IconWrap,
  Wrapper,
  Container,
  Header,
  Title,
  Wrap,
  Img,
}