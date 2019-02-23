import React, { Component } from 'react';
import styled from 'styled-components';
import PrimButton from './modules/PrimButton.js';
import ResetButton from './modules/ResetButton.js'
import Name from './modules/Name.js'

const nordicArray = ["Denmark", "Norway", "Sweden", "Finland", "Iceland"];

const Wrapper = styled.section`
  display: block;
  text-align: center;
  margin: 0 auto;
`
const InnerWrapper = styled.article`
  display: block;
  margin: 0 auto;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Click here!',
      styles: 'primary',
      index: ''
    }
  }
  handleClick = () => {
    let random = Math.floor(Math.random() * nordicArray.length);
    this.setState({
      text: "Clicked!",
      styles: 'secondary',
      index: random
    });
  }
  handleReset = () => {
    this.setState({
      text: 'Click here!',
      styles: 'primary'
    })
  }


  render() {


    return (
      <Wrapper>
        <InnerWrapper>
          <PrimButton styles={this.state.styles} onChange={this.handleClick} text={this.state.text} />
        </InnerWrapper>
        <Name text={this.state.text} country={nordicArray[this.state.index]} />
        <InnerWrapper>
          <ResetButton text={this.state.text} onChange={this.handleReset} />
        </InnerWrapper>
      </Wrapper>
    );
  }
}

export default App;
