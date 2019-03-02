import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const LI = styled.li`
        background-color: transparent;
        padding: 20px 0;
        flex: 1;
        cursor: pointer;
        &:hover {
            background-color: #737373;
        }
        ${props => props.children === "Finland" && css`
        &:hover {
            background-color: white;
            color: #003580;
        }
        `}
        ${props => props.children === "Norway" && css`
        &:hover {
            color: #002868;
            background: #EF2B2D;
        }
        `}
        ${props => props.children === "Sweden" && css`
        &:hover {
            color: #FECC00;
            background: #006AA7;
        }
        `}
        ${props => props.children === "Iceland" && css`
        &:hover {
            color: white;
            background: #02529C;
        }
        `}
        ${props => props.children === "Denmark" && css`
        &:hover {
            color: white;
            background: #C60C30;
        }
        `}
    }
`

class ListItem extends Component {
    render() {
        return this.props.nordicArray.map((x) => <LI key={x}>{x}</LI>);
    }
}

export default ListItem;