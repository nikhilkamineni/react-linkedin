import React from 'react';
import styled from 'styled-components';

function People(props) {
  const PeopleStyles = styled.div`
    width: 30%;
    border: 1px solid black;
    
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      list-style-type: none;
      padding: 0px;
      margin: 0px;
    }

    li {
      display: flex;
      justify-content: center;
    }

    img {
      height: 200px;
      width: 200px;
    }

    button {
      height: 30px;
      width: auto;
      background: white;
      color: #0077B5;
    }
  `;
  return(
    <PeopleStyles>
      <ul>
        <li><img src={props.person.imageUrl} /></li>
        <li>{props.person.username}</li>
        <li>{props.person.jobTitle}</li>
        <li>{props.person.connections}</li>
        <li><button>Connect</button></li>
      </ul>
    </PeopleStyles>
  )
}

export default People;