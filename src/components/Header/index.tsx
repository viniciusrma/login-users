/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

const Header: React.FC = () => {
  const [headerState] = useState('home');
  const activeItem = headerState;
  return (
    <Menu secondary className="menu">
      <Menu.Item className="home" name="home" active={activeItem === 'home'} />
      <Menu.Item
        className="login"
        name="login"
        active={activeItem === 'login'}
      />
      <Menu.Item
        className="register"
        name="register"
        active={activeItem === 'register'}
      />

      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu.Menu>
      <Menu.Item name="logout" active={activeItem === 'logout'} />
    </Menu>
  );
};

export default Header;
