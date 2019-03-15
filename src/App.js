import React from 'react';
import { hot } from 'react-hot-loader';
// import axios from 'axios';

import UserProfile from './components/UserProfile';
import UserRepositories from './components/UserRepositories';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React Boilerplate</h1>
        <div>
          <UserProfile />
          <UserRepositories />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
