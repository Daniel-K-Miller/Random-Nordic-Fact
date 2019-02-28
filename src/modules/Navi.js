import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Nav = styled.nav`
    display: flex;
    color: white;
    color: white;
    margin: 0 100px;
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style-type: none;
        width: 100%;
    }
    ul li {
        background-color: transparent;
        padding: 20px 0;
        flex: 1;
        cursor: pointer;
        &:hover {
            background-color: #737373;
        }
        ${props => props.styles === 'Finland' && css`
        color: blue;
        `}
    }
`

class Navi extends Component {
    render() {
        return (
            <Nav>
                <ul>
                    {this.props.nordicArray.map((x) => <li key={x + "key"} styles={x}>{x}</li>)}
                </ul>
            </Nav>
        );
    }
}

export default Navi;