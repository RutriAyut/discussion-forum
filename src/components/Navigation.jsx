import React from 'react';
import { Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <div className='navigation'>
      <Nav as='ul' className='d-flex'>
        <Nav.Item as='li' className='mr-auto p-2'>
          <Nav.Link className='navlink logo' href='/'>Discussion Forum</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navigation;
