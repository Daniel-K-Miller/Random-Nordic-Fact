import React, { Component } from 'react';
import styled from 'styled-components';
import Name from './combinedfacts/Name.js';
import FactBox from './combinedfacts/Facts.js';
import Position from './combinedfacts/Position.js';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: 1em auto;
  align-items: center;
  position: relative;


    // tablet
    @media (min-width: 768px) and (max-width: 1024px) {
    
        
    
    }
    // Potrait mobile
    @media (min-width: 320px) and (max-width: 480px) {
    
        margin-top: 5vh;
    
    }
`

class Combined extends Component {
    render() {
        return (
            <Wrapper>
                <Name clicked={this.props.clicked} country={this.props.country} text={this.props.text} />
                <FactBox clicked={this.props.clicked} country={this.props.country} testArray={this.props.testArray} text={this.props.text} fact={this.props.fact} />
                <Position clicked={this.props.clicked} text={this.props.text} posOfFact={this.props.posOfFact} />
            </Wrapper>
        )
    }
}

export default Combined;