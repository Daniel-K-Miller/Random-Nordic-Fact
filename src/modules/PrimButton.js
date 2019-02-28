import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Button = styled.a`
  color: white;
  padding: .5em 1em;
  font-size: 1.2em;
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

  ${props => props.styles === 'secondary' && css`
  background: forestgreen;
  border: 2px solid forestgreen;
  opacity: 0.9;
  :hover {
    opacity: 1;
  `}
`

class PrimButton extends Component {
  render() {
    return (
      <Button styles={this.props.styles} onClick={this.props.onChange}>
        {this.props.text}
      </Button>
    );
  }
}

export default PrimButton;
