import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.section`
  background: lightgrey;
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  color: darkred;
  padding: .5em 1em;
  font-size: 1.2em;
  background-color: white;
  border: 2px solid darkred;
  border-radius: 3px;
  text-align: center;
  display: inline-block;
  margin: 1em;
  cursor: pointer;
  ${props => props.primary && css`
  background: darkred;
  color: white;
  border: 2px solid darkred;
  `}
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Click here!'
    }
  }
  handleClick = () => {
    this.setState({
      text: "Clicked!"
    })
  }
  handleReset = () => {
    this.setState({
      text: 'Click here!'
    })
  }
  render() {
    return (
      <Wrapper>
        <Button primary onClick={this.handleClick}>
          {this.state.text}
        </Button>
        {this.state.text === "Clicked!" && <Button onClick={this.handleReset}>
          Reset
        </Button>}
      </Wrapper>
    );
  }
}

export default App;
