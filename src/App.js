import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.section`
  background: lightgrey;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const InnerWrapper = styled.article`
  display: block;
  margin: 0 auto;
`

const Button = styled.a`
  color: white;
  padding: .5em 1em;
  font-size: 1.2em;
  background: rosybrown;
  border: 2px solid rosybrown;
  border-radius: 3px;
  text-align: center;
  display: inline-block;
  margin: 1em;
  text-decoration: none;
  cursor: pointer;
  ${props => props.styles === 'primary' && css`
  background: darkred;
  color: white;
  border: 2px solid darkred;
  `}
  ${props => props.styles === 'secondary' && css`
  background: forestgreen;
  border: 2px solid forestgreen;
  color: white;
  `}
`
const ExtendedButton = styled(Button)`
  background: khaki;
  display: flex;
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
          <Button styles={this.state.styles} onClick={this.handleClick}>
            {this.state.text}
          </Button>
          {this.state.text === "Clicked!" && <Button onClick={this.handleReset}>
            Reset
        </Button>}
        </InnerWrapper>
        <InnerWrapper>
          <ExtendedButton target="_blank" href="https://www.google.co.uk">
            Testy
          </ExtendedButton>
        </InnerWrapper>
      </Wrapper>
    );
  }
}

export default App;
