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

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

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

      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
