import React, { Component } from 'react';
import { FacebookShareButton } from 'react-share';
import { FacebookIcon } from 'react-share';

class Facebook extends Component {
    render() {
        return (
            this.props.fact ?
            <FacebookShareButton
                url={"https://daniel-k-miller.github.io/random-nordic-fact/"}
                quote={this.props.fact}
                hashtag="#RandomNordicFact"
            >
                <FacebookIcon />
            </FacebookShareButton>
            :
            <FacebookShareButton
                url={"https://daniel-k-miller.github.io/random-nordic-fact/"}
                quote={"Find out a quick interesting Nordic fact!"}
                hashtag="#RandomNordicFact"
            >
                <FacebookIcon />
            </FacebookShareButton>
        )
    }
} export default Facebook;