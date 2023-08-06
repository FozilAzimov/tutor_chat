import React from 'react';

import {
  Container,
  Link,
  NavImg,
  NavbarWrapper,
  Parent,
  Wrapper,
} from './style';

import { Outlet } from 'react-router-dom';
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
                <Link key={index} className={({ isActive }) => isActive && 'active'} to={path}>
                  <NavImg src={url} />
                </Link>
              )
            })
          }
        </NavbarWrapper>
      </Container>
    </Wrapper >
  )
}
