import React, { Component } from 'react';
import styled from 'styled-components';
import Name from './combinedfacts/Name.js'
import FactBox from './combinedfacts/Facts.js'

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: 1em auto;
  align-items: center;
  position: relative;
`

class Combined extends Component {
    render() {
        return (
            <Wrapper>
                <Name clicked={this.props.clicked} country={this.props.country} text={this.props.text} />
                <FactBox clicked={this.props.clicked} country={this.props.country} testArray={this.props.testArray} text={this.props.text} fact={this.props.fact} />
            </Wrapper>
        )
    }
}

export default Combined;