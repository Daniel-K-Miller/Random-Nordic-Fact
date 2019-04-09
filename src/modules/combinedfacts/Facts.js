import React, { Component } from 'react';
import styled from 'styled-components';

const Fact = styled.p`
  color: white;
  padding: 1.5em;
  font-size: 1.2em;
  background: #262626;
  border-radius: 3px;
  text-align: justify;
  display: inline-block;
  width: 700px;
  text-decoration: none;
  // tablet
  @media (min-width: 768px) and (max-width: 1024px) {
  
    
  
  }
  // Potrait mobile
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.1em;
    width: 90vw;
    padding: 5vw;
    height: 15vh;
    overflow-y: scroll;
  }
`

class FactBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.text === "Click again!" && <Fact country={this.props.country} testArray={this.props.testArray}>{this.props.fact}</Fact>}
      </React.Fragment>
    );
  }
}

export default FactBox;
