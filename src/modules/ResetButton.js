import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.a`
  color: white;
  margin: auto;
  padding: 0;
  display: flex;
  font-size: 1.2em;
  background: rosybrown;
  border: 2px solid rosybrown;
  border-radius: 3px;
  text-align: center;
  width: 20px;
  height: 20px;
  text-decoration: none;
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  cursor: pointer;
  opacity: .5;
  text-align: center;
  vertical-align: middle;
  line-height: 20px;
  :hover {
    background: red;
    border: 2px solid red;
    opacity: 1;
  }
`

class ResetButton extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.text === "Click again!" && <Button onClick={this.props.onChange}>
          x
          </Button>}
      </React.Fragment>
    );
  }
}

export default ResetButton;
