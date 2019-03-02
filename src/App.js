import React, { Component } from 'react';
import styled from 'styled-components';
import PrimButton from './modules/PrimButton.js';
import ResetButton from './modules/ResetButton.js'
import Name from './modules/Name.js'
import FactBox from './modules/Facts.js'
import Navi from './modules/Navi.js'

const nordicArray = ["Denmark", "Norway", "Sweden", "Finland", "Iceland"];

const Wrapper = styled.section`
  display: block;
  text-align: center;
  margin: 0 auto;
  width: 1000px;
  height: 100vh;
  background-color: #262626;
`
const InnerWrapper = styled.article`
  display: flex;
  margin: auto;
  width: 200px;
  position: relative;
`
const InversedWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      text: 'Click here!',
      styles: 'primary',
      index: '',
      testArray: {
        finland: 1,
        sweden: 1,
        denmark: 1,
        norway: 1,
        iceland: 1
      }
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handArray = this.handleArray.bind(this);
  }
  handleClick = () => {
    let random = Math.floor(Math.random() * nordicArray.length);
    this.setState({
      clicked: true,
      text: "Click again!",
      styles: 'secondary',
      index: random
    });
  }
  handleReset = () => {
    this.setState({
      clicked: false,
      text: 'Click here!',
      styles: 'primary'
    })
  }
  handleArray = () => {
    this.setState(prevState => ({
      testArray: { ...prevState.testArray, finland: 0 }
    }))
    console.log(this.state.testArray)
  }


  render() {
    return (
      <Wrapper>
        <Navi nordicArray={nordicArray} testArray={this.state.testArray} onChange={this.handleArray} />
        <InnerWrapper>
          <PrimButton clicked={this.state.clicked} text={this.state.text} styles={this.state.styles} onChange={this.handleClick} />
          <ResetButton clicked={this.state.clicked} onChange={this.handleReset} />
        </InnerWrapper>
        <InversedWrapper>
          <Name clicked={this.state.clicked} country={nordicArray[this.state.index]} />
          <FactBox clicked={this.state.clicked} country={nordicArray[this.state.index]} />
        </InversedWrapper>
      </Wrapper>
    );
  }
}

export default App;
