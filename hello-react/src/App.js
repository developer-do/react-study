import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
 
  render() {
    const name = "dohyun";
    return (
      <MyComponent name={name} />
    );
  }
}

// props가 지정되지 않았을 때 기본 props
MyComponent.defaultProps = {
  name: '기본 이름',
};

export default App;
