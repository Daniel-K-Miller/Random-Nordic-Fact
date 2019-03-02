import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const LI = styled.li`
        background-color: transparent;
        padding: 20px 0;
        flex: 1;
        cursor: pointer;
        &:hover {
            background-color: #737373;
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
        ${props => props.testArray.finland === 1 && props.children === "Denmark" && css`
            color: white;
            background: #C60C30;
        `}
    }
`

class ListItem extends Component {
    render() {
        return this.props.nordicArray.map((x) => <LI key={x} testArray={this.props.testArray} >{x}</LI>);
    }
}

export default ListItem;