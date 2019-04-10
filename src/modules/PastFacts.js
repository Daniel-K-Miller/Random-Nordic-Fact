import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

const Wrapper = styled.section`
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    background-color: #1a1a1a;
    border-radius: 6px;
    width: max-content;
    height: 280px;
    margin: 0 auto;
    padding-top: 10px;

    // PC
    @media (min-width: 1023px) {
    
        
    
    }
    // tablet
    @media (min-width: 768px) and (max-width: 1024px) {
    


    }
    // Potrait mobile
    @media (min-width: 320px) and (max-width: 480px) {
    
        flex-direction: column;
        padding-top: 0;
        height: 0;
        
    }
`
const InnerWrapper = styled.section`
    display: flex;
    flex-direction: row;
`

const SubHeading = styled.h1`
    color: white;
    // tablet
    @media (min-width: 768px) and (max-width: 1024px) {
    
        
    
    }
    // Potrait mobile
    @media (min-width: 320px) and (max-width: 480px) {
    
        margin-bottom: 2vh;
    
    }
`
const PastFact = styled.h2`
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
        transition: all .2s ease-in-out;
    }

    // tablet
    @media (min-width: 768px) and (max-width: 1024px) {
    
        
    
    }
    // Potrait mobile
    @media (min-width: 320px) and (max-width: 480px) {
    
        padding: .5em 0;
        margin: 0 .5em;
        width: 25vw;
    
    }
`

class PastFacts extends Component {
    render() {
        return (
            <Wrapper>
                {this.props.lastCountries.length > 0 &&<SubHeading>Past Facts</SubHeading>}
                <InnerWrapper>
                    {this.props.lastCountries.map((x, index) => (<PastFact key={uuid.v4()} onMouseEnter={() => this.props.handleMouseOver(index)} onMouseLeave={this.props.handleMouseOut} fact={this.props.lastFacts[index]}>{x}</PastFact>))}
                </InnerWrapper>
            </Wrapper>
            
        )
    }
}
export default PastFacts;