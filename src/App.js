import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopBar from './Components/TopBar';
import TopBarNew from './Components/TopBarNew';
import Container from './Components/Container';
import Landing from './Containers/Landing';
import './App.css';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <TopBarNew />
        <Container>
          <Landing />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
