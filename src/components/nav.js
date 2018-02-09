import React from 'react';
import styled from 'styled-components';

function Nav() {
  const NavStyles = styled.div`
    width: 900px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    font-size: 0.8rem;
    
    div {
      margin: 0 15px;
    }
  `;
  return (
    <NavStyles defaulte='search'>
      <img src='https://www.juliusdesign.net/sm-reference/img/linkedin-logo.png' className='logo' alt='Logo'/>
      <div>
        <form>
          <input type='text' />
        </form>
      </div>
      <div>Home</div>
      <div>My Network</div>
      <div>Jobs</div>
      <div>Messaging</div>
      <div>Notifications</div>
      <div>Me</div>
    </NavStyles>
  );
}

export default Nav;
