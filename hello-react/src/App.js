import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <MyComponent />
    )
  }
}


MyComponent.defaultProps = {
  name: '기본 이름',
}

export default App;
