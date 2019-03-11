import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.header`
@import url('https://fonts.googleapis.com/css?family=Oswald');
  color: #595959;
  display: flex;
  justify-content: center;
  font-family: 'Oswald';
  font-size: 2.3em;
  padding: .5em;
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