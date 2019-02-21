import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PrimButton from './modules/PrimButton.js';
import ResetButton from './modules/ResetButton.js'

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
      styles: 'primary'
    }
  }
  handleClick = () => {
    this.setState({
      text: "Clicked!",
      styles: 'secondary'
    })
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
        <InnerWrapper>
          <ResetButton text={this.state.text} onChange={this.handleReset} />
        </InnerWrapper>
      </Wrapper>
    );
  }
}

export default App;
