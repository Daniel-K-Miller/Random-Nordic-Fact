import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

const Wrapper = styled.article`
    background-color: ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 500px;
    right: 0;
    left: 0;
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
    :hover {
        background-color: white;
        color: #262626;
    }
`

class PastFacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    render() {
        return (
            <Wrapper>
                {this.props.lastCountries.map((x, index) => (<PastFact key={uuid.v4()} onMouseEnter={() => this.props.handleMouseOver(index)} onMouseLeave={this.props.handleMouseOut} fact={this.props.lastFacts[index]}>{x}</PastFact>))}
            </Wrapper>
        )
    }
}
export default PastFacts;