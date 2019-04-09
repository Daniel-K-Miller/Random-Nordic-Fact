import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    margin: 0 auto;
    width: 10vw;
    background-color: #262626;
`

const Paragraph = styled.p`
    color: white;
`
const SubHeading = styled.h2`
    color: white;
`

class Intro extends Component {
    render() {
        return (
            <Wrapper>
                <SubHeading>Introduction</SubHeading>
                <Paragraph>Hello</Paragraph>
            </Wrapper>
        )
    }
}

export default Intro;