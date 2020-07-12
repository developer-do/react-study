import React, { Component } from 'react';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';


const onClick = () => {
  alert("test");
}

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent name="React" age={29} onClick={onClick} ref={(ref) => {this.MyComponent = ref}}/>
        <EventPractice />
        <hr />
        <ValidationSample />
        <hr />
        <ScrollBox ref={(ref) => {
          this.scrollBox = ref;
          console.log(ref);
        }}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      </div>
    );
  }
}


export default App;
