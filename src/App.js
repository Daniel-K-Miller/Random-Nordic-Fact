import React, { Component } from 'react';
import styled from 'styled-components';
import PrimButton from './modules/PrimButton.js';
import ResetButton from './modules/ResetButton.js'
import Name from './modules/Name.js'
import FactBox from './modules/Facts.js'
import Navi from './modules/Navi.js'

const nordicArray = [];
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
        denmark: 1,
        finland: 1,
        sweden: 1,
        norway: 1,
        iceland: 1
      }
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleArray = this.handleArray.bind(this);
  }
  componentWillMount() {
    // Creates copy of testArray that is in state
    let tempObj = { ...this.state.testArray }
    // Creates an initial array from testArray that then is used to create the Navi buttons
    Object.keys(tempObj).forEach(function eachKey(key) {
      nordicArray.push(key.charAt(0).toUpperCase() + key.slice(1));
    })
  }
  handleClick = () => {
    // Creates copy of testArray that is in state
    let tempObj = { ...this.state.testArray }
    // Iterate over each key within tempObj
    Object.keys(tempObj).forEach(function eachKey(key) {
      // Set to a new variable the key's name and capitalises it
      let newKey = key.charAt(0).toUpperCase() + key.slice(1);
      // Checking whether tempObj key value is positive && if the capitalised key exists within a blank dynamic array
      if (tempObj[key] === 1 && !dynNordicArray.includes(newKey)) {
        dynNordicArray.push(newKey);
        // if the key is 0 and the dynamic array still includes the capitalised version remove it
      } else if (tempObj[key] === 0 && dynNordicArray.includes(newKey)) {
        dynNordicArray.splice(dynNordicArray.indexOf(newKey), 1)
      }
    })

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
    this.setState({ clicked: false })
    // Change logic here to aquate for when button is last one highlighted
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
          <ResetButton clicked={this.state.clicked} onChange={this.handleReset} text={this.state.text} />
        </InnerWrapper>
        <InversedWrapper>
          <Name clicked={this.state.clicked} country={dynNordicArray[this.state.index]} text={this.state.text} />
          <FactBox clicked={this.state.clicked} country={dynNordicArray[this.state.index]} testArray={this.state.testArray} text={this.state.text} />
        </InversedWrapper>
      </Wrapper>
    );
  }
}

export default App;
