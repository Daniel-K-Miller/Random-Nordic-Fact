import React, { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    color: white;
    ul li {
        color: white;
    }
`

class Navi extends Component {
    render() {
        return (
            <Nav>
                <ul>
                    <li>All</li>
                    <li>Denmark</li>
                    <li>Norway</li>
                    <li>Sweden</li>
                    <li>Finland</li>
                    <li>Iceland</li>
                </ul>
            </Nav>
        );
    }
}

export default Navi;