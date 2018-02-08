import React from 'react';
import styled from 'styled-components';

function Promoted() {
  const PromotedStyles = styled.div`
    width: 280px;
    height: 400px;
    border: 1px solid #CACCCE;
    padding: 0;
    margin: 0 5px;
    background-color: #FFFFFF;
  `;

  return (
    <PromotedStyles className='promoted'>
      <h1>Promoted</h1>
    </PromotedStyles>
  )
}

export default Promoted;