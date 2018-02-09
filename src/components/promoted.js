import React from 'react';
import styled from 'styled-components';

function Promoted() {
  const PromotedStyles = styled.div`
    width: 280px;
    height: 240px;
    border: 1px solid #CACCCE;
    padding: 0;
    margin: 0 15px;
    background-color: #FFFFFF;
    box-shadow: -2px 4px #D0D3D6;

    h1 {
      float: left;
      margin 15px 15px;
      color: #CACCCE;
    }
  `;

  return (
    <PromotedStyles className='promoted'>
      <h1>Promoted</h1>
    </PromotedStyles>
  )
}

export default Promoted;