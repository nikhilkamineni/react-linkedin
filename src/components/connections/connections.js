import React from 'react';
import styled from 'styled-components';

function Connections() {
  const ConnectionsStyles = styled.div`
    width: 220px;
    height: 380px;
    padding: 0;
    margin: 0 15px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    box-shadow: -2px 4px #D0D3D6;

    h1 {
      color: #0077B5;
      font-size: 2.5rem;
    }

    h1, h3 {
      color: #0077B5;
    }

    .connectionsNumber {
      width: 100%;
      height: 200px;
      border: 1px solid #CACCCE;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0;
    }

    .addContact {
      width: 100%;
      border: 1px solid #CACCCE;
      border-top: 0px;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    button {
      width: 130px;
      height: 30px;
      margin: 15px 0 0 0;
      color: #0077B5;
      border: 1px solid #CACCCE;
    }

    .learnMore {
      width: 100%;
      border: 1px solid #CACCCE;
      border-top: 0px;
      margin: 0;
      background-color: #E6E9EC
    }

  `;

  return (
    <ConnectionsStyles className='connections'>
      <div className='connectionsNumber'>
        <h1>534</h1>
        <h2>Your connections</h2>
        <h3>See all</h3>
      </div>
      <div className='addContact'>
        <h2>Add person contact</h2>
        <form><input type='text'/></form>
        <button>Continue</button>
        <h3>More options</h3>
      </div>
      <div className='learnMore'>
      <p>We'll import your address book to suggest connections. Learn more</p>
      </div>
    </ConnectionsStyles>
  )
}

export default Connections;