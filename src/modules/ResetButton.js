import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.a`
  color: white;
  margin: 1em 0;
  padding: .5em 0;
  font-size: 1.2em;
  background: rosybrown;
  border: 2px solid rosybrown;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  text-align: center;
  width: 20px;
  text-decoration: none;
  position: absolute;
  right: 0;
  cursor: pointer;
  :hover {
    background: red;
    border: 2px solid red;
  }
`

class ResetButton extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.clicked === true && <Button onClick={this.props.onChange}>
          X
          </Button>}
      </React.Fragment>
    );
  }
}

export default ResetButton;
