import React, { Component } from 'react';
import styled, { CSS } from 'styled-components';

const Wrapper = styled.section`
  background: lightgrey;
`

const Button = styled.button`
  color: ${props => props.primary ? "white" : "darkred"};
  padding: 1rem;
  font-size: 1em;
  background-color: ${props => props.primary ? "darkred" : "transparent"};
  border: 2px solid black;
  border-radius: 3px;
  text-align: center;
  display: block;
  margin: 0 auto;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Button>
          Click here!
        </Button>
        <Button primary>
          Click here!
        </Button>
      </Wrapper>
    );
  }
}

export default App;
