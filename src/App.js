import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/nav';
import styled from 'styled-components';

const NavContainerStyle = styled.div`
  height: 100px;
  width: 100%;
  margin: 0;
  padding: 0;
  background: #0077B5;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .logo {
    height: 100px;
    width: 100px;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavContainerStyle className='NavContainer'><Nav /></NavContainerStyle>

      </div>
    );
  }
}

export default App;
