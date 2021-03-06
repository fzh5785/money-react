import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
   line-height: 24px;
   box-shadow: 0 0 3px rgba(0,0,0,.25);
   background:#fff;
   >ul {
    display: flex;
    >li {
    width: 33.333%;
    text-align: center;
    >a {
     display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
    flex-direction: column;
    
    .icon {
    width: 24px;
    height: 24px;
    }
    &.selected {
     color: #f60;
     .icon {
     fill: #f60;
     }
    }
    }
}
}
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>

          <NavLink to="/tags" activeClassName="selected">
            <Icon name='label'/>
            标签
          </NavLink>
        </li>
        <li>

          <NavLink to="/money" activeClassName="selected">
            <Icon name='money'/>
            记账
          </NavLink>
        </li>
        <li>

          <NavLink to="/statistics" activeClassName="selected">
            <Icon name='sta'/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;