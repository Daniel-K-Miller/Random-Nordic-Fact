import React, { Component } from 'react';
import styled from 'styled-components';
import ListItem from './navi/list.js'

const Nav = styled.nav`
    display: flex;
    color: white;
    margin: 0 100px;
    background-color: #333333;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    justify-content: center;
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style-type: none;
        width: 100%;
    } 
    // tablet
    @media (min-width: 768px) and (max-width: 1024px) {
  
        background-color: blue;
  
    }
    // Potrait mobile
    @media (min-width: 320px) and (max-width: 480px) {
        margin: 0 auto;
        
        ul {
            display: flex;
            justify-content: space-between;
        width: auto;
        flex-direction: row;
        width: auto;
        }
    }
`

class Navi extends Component {
    render() {
        return (
            <Nav>
                <ul>
                    {this.props.nordicArray.map(x => <ListItem nordicArray={this.props.nordicArray} key={x} testArray={this.props.testArray} onChange={this.props.onChange} text={x} arrayTotal={this.props.arrayTotal} />)}
                </ul>
            </Nav>
        );
    }
}

export default Navi;