import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/nav';
import dummyData from './dummy-data';
import People from './components/People/people';
import Connections from './components/Connections/connections';
import Promoted from './components/Promoted/promoted';

const BodyContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
`;

const NavContainerStyle = styled.div`
  height: 40px;
  width: auto;
  minimum-width: 1000px;
  margin: 0;
  padding: 0 0 0 270px;
  background: #0077B5;
  display: flex;
  justify-content: flex-start;

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
          <Connections />
          <PeopleContainerStyle>
            {this.state.dummyData.map((person, i) => {
              return (
                <People 
                  key={i} 
                  person={person}
                />)
            })}
          </PeopleContainerStyle>
          <Promoted />
        </BodyContainerStyle>
      </div>
    );
  }
}

export default App;
