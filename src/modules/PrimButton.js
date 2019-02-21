import React, { Component } from 'react';
import styled, { css } from 'styled-components';

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
  width: 11em;
  text-decoration: none;
  cursor: pointer;
  ${props => props.styles === 'primary' && css`
  background: 	goldenrod;
  color: white;
  border: 2px solid goldenrod;
  `}
  ${props => props.styles === 'secondary' && css`
  background: forestgreen;
  border: 2px solid forestgreen;
  color: white;
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
