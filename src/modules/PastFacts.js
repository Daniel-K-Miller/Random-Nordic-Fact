import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

const Wrapper = styled.article`
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const PastFact = styled.h1`
  color: white;
    padding: .5em 1em;
    font-size: 1.2em;
    background: #262626;
    border: 2px solid #666666;
    border-radius: 3px;
    text-align: center;
    display: inline-block;
    margin: 1em;
    width: 6em;
    text-decoration: none;
    opacity: .2;
    user-select: none;
    flex-direction: row;
`

class PastFacts extends Component {
    render() {
        return (
            <Wrapper>
                {this.props.lastState.map(x => (<PastFact key={uuid.v4()}>{x}</PastFact>))}
            </Wrapper>
        )
    }
}
export default PastFacts;