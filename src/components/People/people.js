import React from 'react';
import styled from 'styled-components';

function People(props) {
  const PeopleStyles = styled.div`
    width: 200px;
    border: 1px solid #CACCCE;
    padding: 0;
    margin: 0;
    
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
      color: #86888A;
      text-align: center;
    }

    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      margin-top: 20px;
    }

    button {
      height: 30px;
      width: auto;
      background: white;
      color: #0077B5;
      margin: 10px 0;
    }

    .userName {
      color: #313335;
      font-weight: bold;
      font-size: 1rem;
      padding: 5px;
    }

    .jobTitle {
      font-size: 0.8rem;
      width: 170px;
      height: 20px;
      padding: 15px;
    }

    .person:hover {
      background-color: rgb(234, 243, 247);
    }
  `;
  
  return(
    <PeopleStyles>
      <ul className='person'>
        <li><img src={props.person.imageUrl} alt='Kitty'/></li>
        <li className='userName'>{props.person.username}</li>
        <li className='jobTitle'>{props.person.jobTitle}</li>
        <li className='connections'>{props.person.connections}</li>
        <li><button>Connect</button></li>
      </ul>
    </PeopleStyles>
  )
}

export default People;