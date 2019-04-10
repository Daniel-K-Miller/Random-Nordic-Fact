import React, { Component } from 'react';
import styled from 'styled-components';
import Position from './Position.js';

const Wrapper = styled.section`
  position: absolute;
`

const Fact = styled.p`
  color: white;
  padding: 1.5em;
  font-size: 1.2em;
  background: #262626;
  border-radius: 3px;
  text-align: justify;
  display: inline-block;
  width: 700px;
  height: 100px;
  text-decoration: none;
  margin-bottom: 30px;
  margin-top: 10px;
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
      <Wrapper>
        {this.props.text === "Click again!" && <Position clicked={this.props.clicked} text={this.props.text} posOfFact={this.props.posOfFact} />}
        {this.props.text === "Click again!" && <Fact country={this.props.country} testArray={this.props.testArray}>{this.props.fact}</Fact>}
      </Wrapper>
    );
  }
}

export default FactBox;
