import React from 'react';
import styled from 'styled-components';

function Connections() {
  const ConnectionsStyles = styled.div`
    width: 280px;
    height: 400px;
    border: 1px solid #CACCCE;
    padding: 0;
    margin: 0 5px;
  `;

  return (
    <ConnectionsStyles className='connections'>
      <h1>534</h1>
      <h2>Your connections</h2>
      <h3>See all</h3>
    </ConnectionsStyles>
  )
}

export default Connections;