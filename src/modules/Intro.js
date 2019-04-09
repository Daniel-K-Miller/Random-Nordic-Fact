import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    margin: 0 auto;
    width: 700px;
    background-color: #262626;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 1;
    margin-top: 40px;
    border-radius: 6px;
`

const SubHeading = styled.h2`
    color: white;
    text-align: left;
    padding: .5em;
`
const Paragraph = styled.p`
    color: white;
    text-align: left;
    padding: .5em .5em;
    text-align: justify;
    font-size: 1.05em;
    
    `
class Intro extends Component {
    render() {
        return (
            <Wrapper>
                <SubHeading>Introduction</SubHeading>
                <Paragraph>
                    This web application is a random generator which has been made to display a random fact regarding the Nordic countries. 
                    These countries are: Denmark, Norway, Sweden, Finland, Iceland.
                </Paragraph>
                <SubHeading>How It works</SubHeading>
                <Paragraph>
                    - Just above the introduction paragraph (and right below the 'Random Nordic Fact' title of this page) are the toggles for
                    selecting the countries to be picked from the random generator. By default all countries are set to toggled, to untoggle a
                    country just simply click it. Note, at least one country must be selected at all times otherwise no facts can be displayed
                    - therefore this application will always make sure one country is selected. 
                </Paragraph>
                <Paragraph>
                    - Once more than one fact has been displayed, the 'past facts' section will become active. This section can be hovered over (or 
                    touched on mobile) to show the previous facts that have been displayed. Note, only the previous three facts can be selected from.
                </Paragraph>
                <Paragraph>
                    - On desktop, on the left of the page is social media sharing buttons for: Twitter, Facebook, Pinterest.
                </Paragraph>
                <Paragraph>
                    - To start the application just click the 'Click Here' button displayed below. To display another fact click the 'Click again!'
                    button.
                </Paragraph>
            </Wrapper>
        )
    }
}

export default Intro;