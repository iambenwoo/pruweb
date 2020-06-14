import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopBar from './Components/PruTopBar';
import Container from './Components/Container';
import Landing from './Containers/Landing';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <TopBar />
          <Container>
            <Landing />
          </Container>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
