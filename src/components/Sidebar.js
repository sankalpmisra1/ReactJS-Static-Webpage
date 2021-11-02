import React, { useState } from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
const Nav = styled.div`
  background: black;
  position:fixed;
  width:100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: black;
  margin-top:80px;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
const [sidebar] = useState(true);

    return (
        <>
        <Nav>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
        </>
    );
};

export default Sidebar
