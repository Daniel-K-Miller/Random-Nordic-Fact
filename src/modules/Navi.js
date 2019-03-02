import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import ListItem from './list.js'

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
`

class Navi extends Component {
    render() {
        return (
            <Nav>
                <ul>
                    <ListItem nordicArray={this.props.nordicArray} />
                </ul>
            </Nav>
        );
    }
}

export default Navi;