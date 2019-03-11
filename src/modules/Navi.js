import React, { Component } from 'react';
import styled from 'styled-components';
import ListItem from './list.js'

const Nav = styled.nav`
    display: flex;
    color: white;
    color: white;
    margin: 0 100px;
    background-color: #333333;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
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
                    {this.props.nordicArray.map(x => <ListItem nordicArray={this.props.nordicArray} key={x} testArray={this.props.testArray} onChange={this.props.onChange} text={x} />)}
                </ul>
            </Nav>
        );
    }
}

export default Navi;