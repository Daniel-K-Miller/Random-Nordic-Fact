import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const NameCom = styled.h1`
  color: white;
  padding: .5em 1em;
  font-size: 1.2em;
  background: transparent;
  border: 2px solid white;
  border-radius: 3px;
  text-align: center;
  display: inline-block;
  margin: 1em;
  width: 6em;
  text-decoration: none;
  /* Fix this problem here */
  ${props => props.country === 'Norway' && css`
    color: red;
  `}
  :hover {
      animation: myMove 2s ease-in-out;
  }
  @keyframes myMove {
      0% {
          opacity: 1;
      }
      50% {
          opacity: .5;
      }
      100% {
          opacity: 1;
      }
  }
`

class Name extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.text === "Clicked!" && <NameCom>{this.props.country}</NameCom>}
            </React.Fragment>
        );
    }
}

export default Name;
