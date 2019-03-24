import React, { Component } from 'react';
import styled from 'styled-components';

const Fact = styled.p`
  color: white;
  padding: 1.5em;
  font-size: 1.2em;
  background: #1a1a1a;
  border-radius: 3px;
  text-align: justify;
  display: inline-block;
  width: 700px;
  text-decoration: none;
`

class FactBox extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.text === "Click again!" && <Fact country={this.props.country} testArray={this.props.testArray}>{this.props.fact}</Fact>}
            </React.Fragment>
        );
    }
}

export default FactBox;
