import React, { Component } from 'react';
import 'antd/dist/antd.css';

import Router from '../../routes';
import '../../css/App.css';
import '../../css/animate.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
