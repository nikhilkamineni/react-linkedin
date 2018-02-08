import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/nav';
import dummyData from './dummy-data'
import People from './components/People/people';

const NavContainerStyle = styled.div`
  height: 100px;
  width: 100%;
  margin: 0;
  padding: 0;
  background: #0077B5;
  border: 1px solid black;

  .logo {
    height: 100px;
    width: 100px;
  }
`;

class App extends Component {
  state = {dummyData};

  render() {
    return (
      <div className="App">
      <NavContainerStyle className='NavContainer'><Nav /></NavContainerStyle>
      {this.state.dummyData.map((person, i) => {
        return (
          <People key={i} person={person}/>
        )
      })}

      </div>
    );
  }
}

export default App;
