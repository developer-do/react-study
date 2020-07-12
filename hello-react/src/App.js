import React, { Component } from 'react';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';


const onClick = () => {
  alert("test");
}

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent name="React" age={29} onClick={onClick} />
        <EventPractice />
        <hr />
        <ValidationSample />
      </div>
    );
  }
}


export default App;
