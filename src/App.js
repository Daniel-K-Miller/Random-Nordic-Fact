import React, { Component } from 'react';
import styled from 'styled-components';
import PrimButton from './modules/PrimButton.js';
import ResetButton from './modules/ResetButton.js'
import Name from './modules/Name.js'
import FactBox from './modules/Facts.js'

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
      clicked: false,
      text: 'Click here!',
      styles: 'primary',
      index: ''
    }
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


  render() {
    return (
      <Wrapper>
        <InnerWrapper>
          <PrimButton clicked={this.state.clicked} text={this.state.text} styles={this.state.styles} onChange={this.handleClick} />
        </InnerWrapper>
        <Name clicked={this.state.clicked} country={nordicArray[this.state.index]} />
        <InnerWrapper>
          <FactBox clicked={this.state.clicked} country={nordicArray[this.state.index]} />
        </InnerWrapper>
        <InnerWrapper>
          <ResetButton clicked={this.state.clicked} onChange={this.handleReset} />
        </InnerWrapper>
      </Wrapper>
    );
  }
}

export default App;
