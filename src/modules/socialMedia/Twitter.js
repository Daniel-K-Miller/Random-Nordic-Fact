import React, { Component } from 'react';
import { TwitterShareButton } from 'react-share';
import { TwitterIcon } from 'react-share';

class Twitter extends Component {
    render() {
        return (
                <TwitterShareButton
                    url={"https://google.co.uk"}
                    title={this.props.fact}
                    hashtags={["randomNordicSnippet"]}
                >
                    <TwitterIcon />
                </TwitterShareButton>
        )
    }
} export default Twitter;