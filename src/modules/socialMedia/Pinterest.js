import React, { Component } from 'react';
import { PinterestShareButton } from 'react-share';
import { PinterestIcon } from 'react-share';

class Pinterest extends Component {
    render() {
        return (
            this.props.fact ?
            <PinterestShareButton url={"https://daniel-k-miller.github.io/random-nordic-fact/"} media={"https://qph.fs.quoracdn.net/main-qimg-fd31f7fda382125bb68bb44ae5c7db6e.webp"} description={this.props.fact}>
                <PinterestIcon />
            </PinterestShareButton>
            :
            <PinterestShareButton url={"https://daniel-k-miller.github.io/random-nordic-fact/"} media={"https://qph.fs.quoracdn.net/main-qimg-fd31f7fda382125bb68bb44ae5c7db6e.webp"} description={"Find out a quick interesting Nordic fact!"}>
                <PinterestIcon />
            </PinterestShareButton>
        )
    }
} export default Pinterest;