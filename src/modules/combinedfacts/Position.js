import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const PositionLabel = styled.h1`
  color: white;
  padding: .2em .5em;
  font-size: 1.2em;
  background: #0d0d0d;
  border-radius: 3px;
  text-align: center;
  display: inline-block;
  margin: 0 auto;
  top: 0;
  right: max-content;
  position: absolute;
  width: auto;
  text-decoration: none;
  user-select: none;
  text-align:center;
  left: max-content;
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
