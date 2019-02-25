import React, { Component } from 'react';
import styled from 'styled-components';

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
  width: 6em;
  text-decoration: none;
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
          Close
          </Button>}
      </React.Fragment>
    );
  }
}

export default ResetButton;
