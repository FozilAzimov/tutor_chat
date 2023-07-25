import React from 'react';

import {
  Container,
  NavImg,
  NavbarWrapper,
  Parent,
  Wrapper,
} from './style';

import { NavLink, Outlet } from 'react-router-dom';
import navbar from '../../utils/navbar';

export default function Navbar () {
  return (
    <Wrapper>
      <Parent>
        <Outlet />
      </Parent>
      <Container>
        <NavbarWrapper>
          {
            navbar.map(({ url, path, hidden }, index) => {
              return !hidden && (
                <NavLink key={index} to={path}>
                  <NavImg src={url} />
                </NavLink>
              )
            })
          }
        </NavbarWrapper>
      </Container>
    </Wrapper>
  )
}
