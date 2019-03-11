import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.header`
@import url('https://fonts.googleapis.com/css?family=Lato');
  color: white;
  display: flex;
  justify-content: center;
  font-family: 'Lato';
  font-weight: bold;
  font-size: 2em;
  padding: .7em 0;
  background: #0d0d0d;
`

class Random extends Component {
  render() {
    return (
      <React.Fragment>
        <Title>Random Nordic Fact</Title>
      </React.Fragment>
    )
  }
}

export default Random;