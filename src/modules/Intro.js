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
    margin-top: 30px;
    border-radius: 6px;
    padding-bottom: 20px;
`

const SubHeading = styled.h2`
    color: white;
    text-align: left;
    padding: 0 .5em;
    margin-bottom: .5em;
`
const Paragraph = styled.p`
    color: white;
    text-align: left;
    padding: 0 .5em;
    text-align: justify;
    font-size: 1.05em;
    `
const Note = styled.p`
    opacity: .1;
    color: #a5a5a5;
    background: black;
    text-align: left;
    margin: 1.2em auto;
    padding: .1em;
    border-radius: 3px;
    text-indent: 15px;
    border: 1px solid #a5a5a5;
    transition: all .3s ease-in-out;
    user-select: none;
    &:hover {
        opacity: 1;
        transition: all .3s ease-in-out;
    }
`
const NoteText = styled.span`
    color: white;
    text-indent: 0;
    left: 0;
    right: 0;
    text-align: center;
    position: absolute;
`
class Intro extends Component {
    render() {
        return (
            <Wrapper>
                <SubHeading>Introduction</SubHeading>
                <Paragraph>
                    This web application is a random generator which has been made to display a random fact regarding the Nordic countries. 
                    <Note>Note<NoteText>These countries are: Denmark, Finland, Sweden, Norway, Iceland</NoteText></Note>
                </Paragraph>
                <SubHeading>How It works</SubHeading>
                <Paragraph>
                    Just above the introduction paragraph (and right below the 'Random Nordic Fact' title of this page) are the toggles for
                    selecting the countries to be picked from the random generator. By default all countries are set to toggled, to untoggle a
                    country just simply click it. 
                    <Note>Note<NoteText>at least one country must be selected at all times</NoteText></Note>
                </Paragraph>
                <Paragraph>
                    - Once more than one fact has been displayed, the 'past facts' section will become active. This section can be hovered over (or 
                    touched on mobile) to show the previous facts that have been displayed. 
                    <Note>Note<NoteText>only the previous three facts can be selected from</NoteText></Note>
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