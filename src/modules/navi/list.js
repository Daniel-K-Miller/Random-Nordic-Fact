import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const LI = styled.li`
    color: white;
    padding: .5em 1em;
    font-size: 1.2em;
    background: #262626;
    border: 2px solid #666666;
    border-radius: 3px;
    text-align: center;
    display: inline-block;
    margin: 1em;
    width: 6em;
    text-decoration: none;
    opacity: .2;
    user-select: none;
    cursor: pointer;
        ${props => props.styles === 1 && css`
            background-color: #1a1a1a;
            color: white;
            border-color: #1a1a1a;
            opacity: 1;
        `}
    
    // tablet
    @media (min-width: 768px) and (max-width: 1024px) {


  
    }
    // Potrait mobile
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 1em;
        padding: .5em .1em;
        margin: .5em .2em;
        width: auto;
    }
`

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: 1
        }
    }
    handleClick = () => {
        this.props.onChange(this)
        this.state.styles === 1 && this.props.arrayTotal !== 1 ? this.setState({ styles: 0 }) : this.setState({ styles: 1 });
        console.log(this.props.arrayTotal)
    }
    render() {
        return <LI key={this.props.id} id={this.props.id} arrayTotal={this.props.arrayTotal} onClick={this.handleClick} styles={this.state.styles}>{this.props.text}</LI>;
    }
}

export default ListItem;