import React from 'react';
import styled from 'styled-components';

function Connections() {
  const ConnectionsStyles = styled.div`
    width: 250px;
    height: 400px;
    padding: 0;
    margin: 0 5px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;

    h1, h3 {
      color: #0077B5;
    }

    .connectionsNumber {
      width: 250px;
      height: 200px;
      border: 1px solid #CACCCE;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .addContact {
      width: 250px;
      border: 1px solid #CACCCE;
      border-top: 0px;
    }

    .learnMore {
      width: 250px;
      border: 1px solid #CACCCE;
      border-top: 0px;
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