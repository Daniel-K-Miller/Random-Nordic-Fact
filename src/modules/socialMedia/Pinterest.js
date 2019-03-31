import React, { Component } from 'react';
import { PinterestShareButton } from 'react-share';
import { PinterestIcon } from 'react-share';

class Pinterest extends Component {
    render() {
        return (
            <PinterestShareButton url={"https://google.co.uk"} media={"https://qph.fs.quoracdn.net/main-qimg-fd31f7fda382125bb68bb44ae5c7db6e.webp"} description={this.props.fact}>
                <PinterestIcon />
            </PinterestShareButton>
        )
    }
} export default Pinterest;