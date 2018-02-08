import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/nav';
import dummyData from './dummy-data'
import People from './components/People/people';
import Connections from './components/Connections/connections'

const BodyContainerStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const NavContainerStyle = styled.div`
  height: 40px;
  width: 100%;
  margin: 0;
  padding: 0;
  background: #0077B5;
  border: 1px solid black;

  .logo {
    height: 40px;
    width: 40px;
  }
`;

const PeopleContainerStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 610px;
  minimum-width: 610px;
`;

class App extends Component {
  state = {dummyData};

  render() {
    return (
      <div className="App">
        <NavContainerStyle className='NavContainer'>
          <Nav />
        </NavContainerStyle>

        <BodyContainerStyle>


          <PeopleContainerStyle>
            {this.state.dummyData.map((person, i) => {
              return (
                <People 
                  key={i} 
                  person={person}
                />)
            })}
          </PeopleContainerStyle>
        </BodyContainerStyle>
      </div>
    );
  }
}

export default App;
