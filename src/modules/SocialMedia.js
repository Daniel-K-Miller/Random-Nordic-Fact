import React, { Component } from 'react';
import Twitter from './socialMedia/Twitter.js';
import Pinterest from './socialMedia/Pinterest';
import Facebook from './socialMedia/Facebook';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    width: max-content;
    left: 0;
    top: 32.5vh;
    z-index: 1;
    cursor: pointer;
`

class SocialMedia extends Component {
    render() {
        return (
            <Wrapper>
                <Twitter fact={this.props.fact} />
                <Facebook fact={this.props.fact} />
                <Pinterest fact={this.props.fact} />
            </Wrapper>
        )
    }
} export default SocialMedia;