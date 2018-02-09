import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Nav from './components/Nav/Nav';
import dummyData from './dummy-data';
import People from './components/People/People';
import Connections from './components/Connections/Connections';
import Promoted from './components/Promoted/Promoted';

// styled-components styles
const BodyContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  /* width: 1200px; */
`;

const NavContainerStyle = styled.div`
  height: 40px;
  width: auto;
  margin: 0;
  padding: 0 0 0 270px;
  background: #0077B5;
  display: flex;
  justify-content: flex-start;

  .logo {
    height: 20px;
    width: 20px;
  }
`;

const PeopleContainerStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 606px;
  minimum-width: 610px;
  background-color: #FFFFFF;
`;

const AdHeader = styled.div`
  height: 40px;
`

// App component
class App extends Component {
  state = {dummyData};

  render() {
    return (
      <div className="App">
        <NavContainerStyle className='NavContainer'>
          <Nav />
        </NavContainerStyle>

        <AdHeader>Ad Header</AdHeader>

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
