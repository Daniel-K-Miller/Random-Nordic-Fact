import React, { Component } from 'react';
import styled, { css } from 'styled-components';

// TODO CSS conflicting with JS formatting within this file, visuaul bug within text editor only

const Wrapper = styled.article`
  display: flex;
  margin: auto;
  width: 200px;
  position: relative;


  // tablet
    @media (min-width: 768px) and (max-width: 1024px) {
    
        
    
    }
    // Potrait mobile
    @media (min-width: 320px) and (max-width: 480px) {
    
        position: absolute;
        bottom: 15vh;
        z-index: 1;
        left: 0;
        right: 0;
        width: 100vw;
        
    
    }
`
const PriButton = styled.button`
  color: white;
  padding: .5em 1em;
  font-size: 1.4em;
  background: goldenrod;
  border: 2px solid goldenrod;
  border-radius: 3px;
  text-align: center;
  margin: 1em 0;
  width: 100%;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  :hover {
    opacity: .9;
  }

  // tablet
    @media (min-width: 768px) and (max-width: 1024px) {
    
        
    
    }
    // Potrait mobile
    @media (min-width: 320px) and (max-width: 480px) {
    
        padding: 1em 0;
    
    }

  ${props => props.styles === 'secondary' && css`
  background: forestgreen;
  border: 2px solid forestgreen;
  opacity: 0.9;
  :hover {
    opacity: 1;
  `}


  
`


class Button extends Component {
    render() {
        return (
            <Wrapper>
                <PriButton styles={this.props.styles} onClick={this.props.handleClick}>
                    {this.props.text}
                </PriButton>
            </Wrapper>
        )
    }
}
export default Button;