import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const LI = styled.li`
        color: white;
  padding: .5em 1em;
  font-size: 1.2em;
  background: transparent;
  border: 2px solid white;
  border-radius: 3px;
  text-align: center;
  display: inline-block;
  margin: 1em;
  width: 6em;
  text-decoration: none;
  cursor: pointer;
        &:hover {
            background-color: transparent;
            color: white;
        }
        ${props => props.testArray.finland === 1 && props.children === "Finland" && css`
            background-color: white;
            color: #003580;
        `}
        ${props => props.testArray.norway === 1 && props.children === "Norway" && css`
            color: #002868;
            background: #EF2B2D;
        `}
        ${props => props.testArray.sweden === 1 && props.children === "Sweden" && css`
            color: #FECC00;
            background: #006AA7;
        `}
        ${props => props.testArray.iceland === 1 && props.children === "Iceland" && css`
            color: white;
            background: #02529C;
        `}
        ${props => props.testArray.denmark === 1 && props.children === "Denmark" && css`
            color: white;
            background: #C60C30;
        `}
    }
`

class ListItem extends Component {
    handleClick = () => {
        this.props.onChange(this)
    }
    render() {
        // https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method change onClick to better version
        return <LI key={this.props.id} id={this.props.id} testArray={this.props.testArray} onClick={this.handleClick}>{this.props.text}</LI>;
    }
}

export default ListItem;