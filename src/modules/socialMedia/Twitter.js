import React, { Component } from 'react';
import { TwitterShareButton } from 'react-share';
import { TwitterIcon } from 'react-share';

class Twitter extends Component {
    render() {
        return (
            this.props.fact ? 
                <TwitterShareButton
                    url={"https://daniel-k-miller.github.io/random-nordic-fact/"}
                    title={this.props.fact}
                    hashtags={["RandomNordicFact"]}
                >
                    <TwitterIcon />
                </TwitterShareButton>
                :
                <TwitterShareButton
                    url={"https://daniel-k-miller.github.io/random-nordic-fact/"}
                    title={"Find out a quick interesting Nordic fact!"}
                    hashtags={["RandomNordicFact"]}
                >
                    <TwitterIcon />
                </TwitterShareButton>
        )
    }
} export default Twitter;