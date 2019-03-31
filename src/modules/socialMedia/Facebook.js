import React, { Component } from 'react';
import { FacebookShareButton } from 'react-share';
import { FacebookIcon } from 'react-share';

class Facebook extends Component {
    render() {
        return (
            <FacebookShareButton
                url={"https://google.co.uk"}
                quote={this.props.fact}
                hashtag="#randomNordicSnippet"
            >
                <FacebookIcon />
            </FacebookShareButton>
        )
    }
} export default Facebook;