import React, { Component } from 'react';
import styled, { css } from 'styled-components';

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
  ${props => props.styles === "Finland" && css`
    
    background: white;
    border-color: white;
    border: 2px solid white;
  `}
  ${props => props.styles === "Norway" && css`
    
    background: #EF2B2D;
    border-color: white;
    border: 2px solid #EF2B2D;
  `}
  ${props => props.styles === "Sweden" && css`
    
    background: #006AA7;
    border-color: #006AA7;
    border: 2px solid #006AA7;
  `}
  ${props => props.styles === "Denmark" && css`
    
    background: #C60C30;
    border-color: #C60C30;
    border: 2px solid #C60C30;
  `}
  ${props => props.styles === "Iceland" && css`
    
    background: #02529C;
    border-color: #DC1E35;
    border: 2px solid #02529C;

  `}
  // Potrait mobile
  @media (min-width: 320px) and (max-width: 480px) {
  
    border: none;
    
  }
`

class Position extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.text === "Click again!" && <PositionLabel styles={this.props.styles}>{this.props.posOfFact}</PositionLabel>}
      </React.Fragment>
    );
  }
}

export default Position;
