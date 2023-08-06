import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
width: 100%;
height: inherit;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
display: none;
@media(min-width: 577px){
  padding: var(--paddingMax);
}
@media (max-width: 576px){
  width: 100%;
  height: inherit;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
`;

const Parent = styled.div`
max-width: 1440px;
width: 100%;
margin: 0 auto;
`

const Container = styled.div`
max-width: 1440px;
width: 100%;
margin: 0 auto;
position: sticky;
bottom: 0;
@media(max-width: 576px){
  width: 100%;
  margin: 0 auto;
  position: sticky;
  bottom: 0;
  background: #fff;
}
`;

const NavbarWrapper = styled.div`
@media(max-width: 576px){
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  .active{
    background: #e5e5e5;
    border-radius: 50%;
  }
}
@media(max-width: 350px){
  padding: 8px 10px;
  .active{
    background: #e5e5e5;
    border-radius: 50%;
  }
}
`

const Link = styled(NavLink)`
@media(max-width: 576px){
  text-decoration: none;
  padding: 10px;
}
@media(max-width: 350px){
  padding: 8px;
}
`

const NavImg = styled.img`
@media(max-width: 576px){
  width: 22px;
  height: 22px;
}
@media(max-width: 350px){
  width: 18px;
  height: 18px;
}
`;


export {
  Wrapper,
  Container,
  Parent,
  NavbarWrapper,
  Link,
  NavImg,
}