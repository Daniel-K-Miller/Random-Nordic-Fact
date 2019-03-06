import React, { Component } from 'react';
import styled from 'styled-components';
import PrimButton from './modules/PrimButton.js';
import ResetButton from './modules/ResetButton.js'
import Name from './modules/Name.js'
import FactBox from './modules/Facts.js'
import Navi from './modules/Navi.js'

const nordicArray = ["denmark", "Finland", "Sweden", "Norway", "Iceland"];

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
      testArray: {}
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleArray = this.handleArray.bind(this);
  }
  componentWillMount() {

    // variable used to setState at end of componentWillMount()
    let tempObj = {};
    nordicArray.forEach(function eachKey(key) {
      // Regex to check whether each item in nordArray starts with lowerCase initially
      const regex = /^[a-z]/
      // variable to be called later if item does not begin with lowerCase letter
      let newKey = key.charAt(0).toLowerCase() + key.slice(1);
      // Checking whether item in array does not begin with lowerCase
      if (!regex.test(key)) {
        // Set item to start with lowerCase letter
        nordicArray[nordicArray.indexOf(key)] = newKey;
        // set item's value to 1
        tempObj[newKey] = 1;
        // implement key & value pair into tempObj
        Object.assign(tempObj, tempObj[newKey])
        // changes the item back to begin with an upperCase letter (array is used later for names within Navi.js so setting to upperCase is needed)
        nordicArray[nordicArray.indexOf(newKey)] = key;
      } else if (regex.test(key)) {
        // set item's key to 1
        tempObj[key] = 1;
        // implement key & value pair into tempObj
        Object.assign(tempObj, tempObj[key])
        // changes the item to begin with an upperCase letter (array is used later for names within Navi.js so setting to upperCase is needed)
        nordicArray[nordicArray.indexOf(key)] = key.charAt(0).toUpperCase() + key.slice(1);
      }
    })
    // use tempObj to finally set the state
    this.setState({ testArray: tempObj })
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
    // Changes state of clicked so within facts.js with a method the facts are not re-evaluated
    this.setState({ clicked: false })
    // tempObj copy of testArray in state, used again at the end of this method
    let tempObj = { ...this.state.testArray };
    // tempVar is a first character lowerCase copy of the text used for buttons so they can be compared to the lowerCase state
    let tempVar = element.props.text.charAt(0).toLowerCase() + element.props.text.slice(1);
    // iterate through tempObj to check whether the text within a button in list.js matches a state value
    Object.keys(tempObj).forEach(function eachKey(key) {
      // if there is a match and the previous state was clicked set that object's current key value to 0 showing it has now been deselected
      if (key === tempVar && tempObj[key] === 1) {
        tempObj[key] = 0;
        // if there is a match and the previous state was not clicked set that object's current key value to 0 showing it has been selected
      } else if (key === tempVar && tempObj[key] === 0) {
        tempObj[key] = 1;
      }
    })
    // finally set the state using the tempObj variable at the start of the method
    this.setState({ testArray: tempObj })
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
