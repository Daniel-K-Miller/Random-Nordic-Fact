import React, { Component } from 'react';
import styled from 'styled-components';
import PrimButton from './buttons/PrimButton.js';
import ResetButton from './buttons/ResetButton.js';

const Wrapper = styled.article`
  display: flex;
  margin: auto;
  width: 200px;
  position: relative;
`

class Buttons extends Component {
    render() {
        return (
            <Wrapper>
                <PrimButton clicked={this.props.clicked} text={this.props.text} styles={this.props.styles} onChange={this.props.handleClick} />
                <ResetButton clicked={this.props.clicked} text={this.props.text} onChange={this.props.handleReset} />
            </Wrapper>
        )
    }
}
export default Buttons;