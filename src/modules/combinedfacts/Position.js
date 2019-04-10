import React, { Component } from 'react';
import styled from 'styled-components';

const PositionLabel = styled.h1`
  padding: .2em .5em;
  font-size: 1.2em;
  background: #262626;
  border-radius: 3px;
  text-align: center;
  display: inline-block;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 0;
  position: absolute;
  width: auto;
  text-decoration: none;
  user-select: none;
  text-align: center;
  color: #0d0d0d;

  // PC
  @media (min-width: 1023px) {
  

  
  }

  // tablet
  @media (min-width: 768px) and (max-width: 1024px) {
  
    background-color: blue;
  
  }
  // Potrait mobile
  @media (min-width: 320px) and (max-width: 480px) {
    position: inherit;
    background: #262626;
    border-top-left-radius: none;
    border-top-right-radius: none;
    color: white;
    margin-top: 5px;
    z-index: 1;
  }
`

class Position extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.text === "Click again!" && <PositionLabel>{this.props.posOfFact}</PositionLabel>}
      </React.Fragment>
    );
  }
}

export default Position;
