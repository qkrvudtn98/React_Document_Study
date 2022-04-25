import React, { Component } from 'react';
import './App.css';
// import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
// import ScrollBox from './ScrollBox';
// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';
// import ValidationSample from './ValidationSample';

class App extends Component {
  render() {
    return (
      // <MyComponent name='종기가 난 작은 공작새' favoriteNumber={7}>
      //   리액트
      // </MyComponent>
      // <Counter></Counter>
      // <Say />
      // <EventPractice />
      // <ValidationSample />
  
      // <div>
      //   <ScrollBox  ref={(ref) => this.scrollBox=ref}/>
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>
      //     맨 밑으로
      //   </button>
      // </div>

      // <IterationSample />

      <LifeCycleSample />
    );
  }
}

export default App;
