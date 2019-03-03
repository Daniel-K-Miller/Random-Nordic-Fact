import React, { Component } from 'react';
import styled from 'styled-components';
import PrimButton from './modules/PrimButton.js';
import ResetButton from './modules/ResetButton.js'
import Name from './modules/Name.js'
import FactBox from './modules/Facts.js'
import Navi from './modules/Navi.js'

const nordicArray = ["Denmark", "Norway", "Sweden", "Finland", "Iceland"];
let dynNordicArray = [];

const Wrapper = styled.section`
  display: block;
  text-align: center;
  margin: 0 auto;
  width: 1000px;
  height: 100vh;
  background-color: #262626;
`
const InnerWrapper = styled.article`
  display: flex;
  margin: auto;
  width: 200px;
  position: relative;
`
const InversedWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      text: 'Click here!',
      styles: 'primary',
      index: '',
      testArray: {
        finland: 1,
        sweden: 1,
        denmark: 1,
        norway: 1,
        iceland: 1
      }
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleArray = this.handleArray.bind(this);
  }
  handleClick = () => {
    // If country within testArray is equal to 1 push it to an array
    if (this.state.testArray.sweden === 1 && !dynNordicArray.includes("Sweden")) {
      dynNordicArray.push("Sweden")
      // Else if state is 0 and it already exists remove it
    } else if (this.state.testArray.sweden === 0 && dynNordicArray.includes("Sweden")) {
      let index = dynNordicArray.indexOf("Sweden")
      dynNordicArray.splice(index, 1)
    }

    if (this.state.testArray.finland === 1 && !dynNordicArray.includes("Finland")) {
      dynNordicArray.push("Finland")
    } else if (this.state.testArray.finland === 0 && dynNordicArray.includes("Finland")) {
      let index = dynNordicArray.indexOf("Finland")
      dynNordicArray.splice(index, 1)
    }

    if (this.state.testArray.iceland === 1 && !dynNordicArray.includes("Iceland")) {
      dynNordicArray.push("Iceland")
    } else if (this.state.testArray.iceland === 0 && dynNordicArray.includes("Iceland")) {
      let index = dynNordicArray.indexOf("Iceland")
      dynNordicArray.splice(index, 1)
    }

    if (this.state.testArray.norway === 1 && !dynNordicArray.includes("Norway")) {
      dynNordicArray.push("Norway")
    } else if (this.state.testArray.norway === 0 && dynNordicArray.includes("Norway")) {
      let index = dynNordicArray.indexOf("Norway")
      dynNordicArray.splice(index, 1)
    }

    if (this.state.testArray.denmark === 1 && !dynNordicArray.includes("Denmark")) {
      dynNordicArray.push("Denmark")
    } else if (this.state.testArray.denmark === 0 && dynNordicArray.includes("Denmark")) {
      let index = dynNordicArray.indexOf("Denmark")
      dynNordicArray.splice(index, 1)
    }

    let random = Math.floor(Math.random() * dynNordicArray.length);
    this.setState({
      clicked: true,
      text: "Click again!",
      styles: 'secondary',
      index: random
    });
  }
  handleReset = () => {
    this.setState({
      clicked: false,
      text: 'Click here!',
      styles: 'primary'
    })
  }
  handleArray = (element) => {
    if (element.props.text === "Finland") {
      (this.state.testArray.finland === 1) ? this.setState(prevState => ({ testArray: { ...prevState.testArray, finland: 0 } }))
        : (this.state.testArray.finland === 0) ? this.setState(prevState => ({ testArray: { ...prevState.testArray, finland: 1 } }))
          : this.setState(prevState => ({ testArray: { ...prevState.testArray } }))
    } else if (element.props.text === "Sweden") {
      (this.state.testArray.sweden === 1) ? this.setState(prevState => ({ testArray: { ...prevState.testArray, sweden: 0 } }))
        : (this.state.testArray.sweden === 0) ? this.setState(prevState => ({ testArray: { ...prevState.testArray, sweden: 1 } }))
          : this.setState(prevState => ({ testArray: { ...prevState.testArray } }))
    } else if (element.props.text === "Iceland") {
      (this.state.testArray.iceland === 1) ? this.setState(prevState => ({ testArray: { ...prevState.testArray, iceland: 0 } }))
        : (this.state.testArray.iceland === 0) ? this.setState(prevState => ({ testArray: { ...prevState.testArray, iceland: 1 } }))
          : this.setState(prevState => ({ testArray: { ...prevState.testArray } }))
    } else if (element.props.text === "Norway") {
      (this.state.testArray.norway === 1) ? this.setState(prevState => ({ testArray: { ...prevState.testArray, norway: 0 } }))
        : (this.state.testArray.norway === 0) ? this.setState(prevState => ({ testArray: { ...prevState.testArray, norway: 1 } }))
          : this.setState(prevState => ({ testArray: { ...prevState.testArray } }))
    } else if (element.props.text === "Denmark") {
      (this.state.testArray.denmark === 1) ? this.setState(prevState => ({ testArray: { ...prevState.testArray, denmark: 0 } }))
        : (this.state.testArray.denmark === 0) ? this.setState(prevState => ({ testArray: { ...prevState.testArray, denmark: 1 } }))
          : this.setState(prevState => ({ testArray: { ...prevState.testArray } }))
    }
  }

  render() {
    return (
      <Wrapper>
        <Navi nordicArray={nordicArray} testArray={this.state.testArray} onChange={this.handleArray} />
        <InnerWrapper>
          <PrimButton clicked={this.state.clicked} text={this.state.text} styles={this.state.styles} onChange={this.handleClick} />
          <ResetButton clicked={this.state.clicked} onChange={this.handleReset} />
        </InnerWrapper>
        <InversedWrapper>
          <Name clicked={this.state.clicked} country={dynNordicArray[this.state.index]} />
          <FactBox clicked={this.state.clicked} country={dynNordicArray[this.state.index]} testArray={this.state.testArray} />
        </InversedWrapper>
      </Wrapper>
    );
  }
}

export default App;
