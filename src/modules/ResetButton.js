import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.a`
  color: white;
  margin: auto;
  padding: 0;
  display: flex;
  font-size: 1em;
  background: rosybrown;
  border: 2px solid rosybrown;
  border-radius: 50px;
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
  user-select: none;
  :hover {
    background: red;
    border: 2px solid red;
    opacity: 1;
  }
  p {
    color: black;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
  }
`

class ResetButton extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.text === "Click again!" && <Button onClick={this.props.onChange}>
          <p>x</p>
        </Button>}
      </React.Fragment>
    );
  }
}

export default ResetButton;
