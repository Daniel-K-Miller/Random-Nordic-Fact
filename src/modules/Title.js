import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.header`
@import url('https://fonts.googleapis.com/css?family=Oswald');
  color: white;
  display: flex;
  justify-content: center;
  font-family: 'Oswald';
  font-size: 2.3em;
  padding: .5em;
  background: linear-gradient(-90deg, #262626, #1a1a1a);
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