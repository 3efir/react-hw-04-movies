import React, { Component, Suspense } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Content from './components/Content';
import Navigation from './components/Navigation';
import { getConfiguration } from './api/movies';

class App extends Component {
  async componentDidMount() {
    const configurations = await getConfiguration();
    window.localStorage.setItem('configurations', JSON.stringify(configurations));
  }

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <HashRouter>
          <div className="App">
            <Navigation />
            <Content />
          </div>
        </HashRouter>
      </Suspense>
    )
  }
}

export default App;
