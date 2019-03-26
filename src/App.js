import React, { Component } from 'react';
import styled from 'styled-components';
import Navi from './modules/Navi.js';
import Header from './modules/Title.js';
import Footer from './modules/Footer.js';
import Combined from './modules/CombinedFact.js';
import Buttons from './modules/Buttons.js';
import PastFacts from './modules/PastFacts.js'

// Starting array that will be used as the centrepiece of the app. This information will be used to render the buttons within navi.js + list.js
// and will also be used within the componentDidMount to set objectFromArray state, this data is the input to the whole application
const originArray = ["denmark", "Finland", "Sweden", "Norway", "Iceland"];
// created within handleClick() method, used by random number generator to pick a random item and passes data to Facts.js + Name.js
// DO NOT INPUT VALUES DIRECTLY! Array will be created automatically from originArray's items
let dynamicArray = [];

let prevStateArray = []
let prevFactArray = [];

let fullFinlandFacts = [];
let fullSwedenFacts = [];
let fullNorwayFacts = [];
let fullDenmarkFacts = [];
let fullIcelandFacts = [];

let fact = undefined;
let country = '';
let posOfFact = '';

let arrayTotalValues = 5;

const Wrapper = styled.section`
  display: block;
  text-align: center;
  margin: 0 auto;
  width: 1000px;
  height: 100vh;
  position: relative;
  background-color: #262626;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      text: 'Click here!',
      styles: 'primary',
      index: '',
      lastCountries: [],
      lastFacts: [],
      objectFromArray: {},
      country: '',
      fact: '',
      posOfFact: 'Current Fact',
      finlandFacts: [`Finland joined the European Union in 1995.`, `The company Nokia got its name from the Town in Finland.`, `Nokia was founded in 1865 as a pulp mill and later transitioned onto electronics.`, `Finland was ranked as the #1 happiest place to live in the world according to the UN’s World Happiest Report 2018.`, `Speeding tickets in Finland are based on total income of the violator instead of a universal set fee.`, `Finland adopted the Euro on 1st January 1999 and abandoned the Finnish Markka on 28th February 2002.`, `The average Finn consumes 12 Kilos of coffee each year.`, `Finland produces the greatest number of heavy-metal bands per capita.`, `In 2006 Finland won Eurovision song contest with the band Lordi performing the song ‘hard rock hallelujah’.`, `Finland has come last in the Eurovision Song Contest 10 times (1963, 1965, 1968, 1980, 1982, 1990, 1992, 1996, 2009, 2015).`, `The population of Finland in 2017 was 5.5 million.`, `It is estimated that there are 2 million saunas in Finland.`, `Finnish is a Uralic language with Estonian being the closest related language.`, `In 1906, Finland was the first European country to allow all women to vote.`, `Finland elected its first female prime minister (Anneli Jäätteenmäki) in April 2003, making it the only country in Europe with both a female president (Tarja Halonen) and prime minister.`, `The operating system Linux was created by Finn Linus Torvalds in 1991. Linus also created the version control system Git in 2005.`, `Finn Kimi Räikkönnen won the 2007 F1 World Championship with 110 points.`, `The capital of Finland is Helsinki with a population of 631,695 in 2017.`, `Finland’s national animal is the brown bear`],
      swedenFacts: [`Sweden joined the European Union in 1995.`, `Sweden is owed approximately €254,000,000 by North Korea. This is due to Kim Il-sung striking a deal to buy 1000 Volvo cars from the Swedish government in 1974 and not paying for the goods.`, `Sweden is the fifth biggest country in Europe (447,435 km2m), and also has the second lowest population per square kilometre in Europe.`, `Sweden has won the Eurovision Song Contest 6 times (1974, 1984, 1991, 1991, 2012, 2015) making it the second highest winning country.`, `Sweden has come last in the Eurovision song contest 2 times (1963, 1977).`, `Sweden has produced multiple platinum selling artists. The most notable being: ABBA (375 million album/single sales), Roxette (75 million album/single sales), Ace of Base (50 million album/single sales), Avicii (30 million album/single sales), Europe (23 million album/single sales).`, `Sweden has the greatest number of McDonald’s restaurants per capita.`, `Sweden is the only country in which donations make up more than 1% of the country’s GDP.`, `The Swedish music group ABBA had to negotiate naming rights with the Abba Seafood Company which was founded in 1838.`, `The population of Sweden was 9.9 million in 2017.`, `The currency used in Sweden is Swedish crowns (SEK).`, `The capital of Sweden is Stockholm with a population of 960,031 in 2017.`, `Swede Daniel Ek founded the streaming service Spotify in 2008.`, `Three Swedish companies earned a spot in Fortunes Magazines Global 500 in 2017. Volvo (301), Ericsson (419), and H&M (482).`, `The Nobel Prize award is named after Swedish scientist Alfred Nobel. Nobel’s most famous invention was dynamite.`, `Sweden has not participated in any war for almost two centuries.`, `Swedish parents are entitled to 480 days of paid parental leave—and of those, 60 days are reserved for the father. In 2012, dads used 24% of the total parental leave.`, `Sweden’s national animal is the Eurasian Elk`],
      norwayFacts: [`Norway is not a member of the European Union.`, `In 1994 Norway held a referendum on whether to join the EU, the ‘no’ side won with 52.2% of the vote.`, `The currency in Norway is the Norwegian Krone.`, `The population of Norway in 2017 was 5.2 million.`, `The capital of Norway is Oslo with a population of 634,293 in 2017.`, `Europe’s northernmost point is North Cape within the Municipality of Nordkapp.`, `Norwegian Johan Vaaler has been credited as the inventor of the paper clip.`, `The Norwegian Government Pension Fund, also known as the ‘oil fund’ has over $1 trillion in assets. It is worth $195,000 per Norwegian citizen.`, `Norwegian pop group A-ha are named after jottings down in a notebook. Lead singer, Morten Harket noticed the word “aha” in fellow bandmate Paul Waaktaar-Savoy’s notebook and this led to the band’s name.`, `The Norwegian oil company Equinor is the only Norwegian company to earn a spot in Fortunes Magazines Global 500 in 2017 ranking at 207.`, `The world’s largest road tunnel called Lærdal Tunnel resides in Norway measuring 24.5Km long.`, `All residents of Norway have three figures published about their wealth, these include: their annual income, income tax paid, and total wealth. Pre-2013 this data was completely open, now a person instead has to request information of another and that person is able to see who has looked up their data regarding these figures.`, `Ancient and modern skiing were invented in Norway. Norwegian Sondre Norheim is seen as the father of modern skiing.`, `Norway has won the Eurovision Song Contest 3 times (1985, 1995, 2009).`, `Norway has come last in the Eurovision Song Contest 11 times (1963, 1969, 1974, 1976, 1978, 1981, 1990, 1997, 2001, 2004, 2012).`, `Norway’s national animal is the lion.`],
      denmarkFacts: [`The population of Denmark was 5.77 million in 2017.`, `The capital of Denmark is Copenhagen with a population of 602,481 in 2017.`, `Denmark’s currency is the Danish Krone.`, `Denmark joined the European Union in 1973.`, `Denmark’s flag the “Dannebrog” first acknowledged in 1219 is the oldest state flag still in use by an independent nation.`, `Greenland is a part of the Danish Kingdom, but is an autonomous constituent country.`, `The Dane’s have a word called “hygge” which describes the feeling of cosiness while relaxing, being with others, or by yourself.`, `At any point in Denmark you can never be more than 52KM away from the coast.`, `Dane Ole Kirk Christiansen founded Lego in 1932. The name Lego comes from shortened the shortened words “Leg godt” which translates to “play well”.`, `The Danish language has no words for please.`, `Denmark is a member of NATO.`, `Denmark was the first European country to abolish slavery doing so in 1792.`, `Denmark has won the Eurovision Song Contest 3 times (1963, 2000, 2013).`, `Denmark has come last in the Eurovision Song Contest one time in 2002.`, `The Danish business conglomerate Maersk is the only Danish company to earn a spot in Fortunes Magazines Global 500 in 2017 ranking at 298.`],
      icelandFacts: [`The population of Iceland was 338,349 in 2017.`, `The capital of Iceland is Reykjavik with a population 122,853.`, `The currency of Iceland is the Icelandic króna.`, `There are no forests in Iceland.`, `Iceland produces the most amount of books/magazine publications per capita. 10% of the population will publish a book in their lifetime.`, `Raw puffin heart is considered an Icelandic delicacy.`, `Beer was prohibited in Iceland from 1915 to 1989.`, `Iceland has 130 active and extinct volcanic mountains, 18 of which have erupted since human inhabitation of Iceland.`, `As of 2015 Icelandic musician Björk has sold between 20 and 40 million records worldwide making her Iceland’s most successful artist in terms of sales.`, `Iceland’s national animal is the Gyrfalcon.`]
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleArray = this.handleArray.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  componentDidMount() {
    // variable used to setState at end of componentWillMount()
    let tempObj = {};
    originArray.forEach(function eachKey(key) {
      // Regex to check whether each item in nordArray starts with lowerCase initially
      const regex = /^[a-z]/
      // variable to be called later if item does not begin with lowerCase letter
      let newKey = key.charAt(0).toLowerCase() + key.slice(1);
      // Checking whether item in array does not begin with lowerCase
      if (!regex.test(key)) {
        // Set item to start with lowerCase letter
        originArray[originArray.indexOf(key)] = newKey;
        // set item's value to 1let tempCountry = nextProps.country
        tempObj[newKey] = 1;
        // implement key & value pair into tempObj
        Object.assign(tempObj, tempObj[newKey])
        // changes the item back to begin with an upperCase letter (array is used later for names within Navi.js so setting to upperCase is needed)
        originArray[originArray.indexOf(newKey)] = key;
      } else if (regex.test(key)) {
        // set item's key to 1
        tempObj[key] = 1;
        // implement key & value pair into tempObj
        Object.assign(tempObj, tempObj[key])
        // changes the item to begin with an upperCase letter (array is used later for names within Navi.js so setting to upperCase is needed)
        originArray[originArray.indexOf(key)] = key.charAt(0).toUpperCase() + key.slice(1);
      }
    })
    // use tempObj to finally set the state
    this.setState({ objectFromArray: tempObj })
    fullFinlandFacts = [...this.state.finlandFacts];
    fullSwedenFacts = [...this.state.swedenFacts];
    fullNorwayFacts = [...this.state.norwayFacts];
    fullDenmarkFacts = [...this.state.denmarkFacts];
    fullIcelandFacts = [...this.state.icelandFacts];
  }

  handleClick = () => {
    // An array created consisting of the past 3 country's name. Used by PastFacts Component to map the past 3 facts. Array starts empty then fills over the past 3 countries names.
    let prevState = dynamicArray[this.state.index]
    let prevFact = this.state.fact.slice(0);
    if (prevState !== undefined) {
      prevStateArray.unshift(prevState)
      prevFactArray.unshift(prevFact);
    }
    if (prevStateArray.length > 3) {
      prevStateArray.pop();
      prevFactArray.pop();
    }
    this.setState({ lastCountries: prevStateArray, lastFacts: prevFactArray });

    // Creates copy of objectFromArray that is in state
    let tempObj = { ...this.state.objectFromArray }
    // Iterate over each key within tempObj
    Object.keys(tempObj).forEach(function eachKey(key) {
      // Set to a new variable the key's name and capitalises it
      let newKey = key.charAt(0).toUpperCase() + key.slice(1);
      // Checking whether tempObj key value is positive && if the capitalised key exists within a blank dynamic array
      if (tempObj[key] === 1 && !dynamicArray.includes(newKey)) {
        dynamicArray.push(newKey);
        // if the key is 0 and the dynamic array still includes the capitalised version remove it
      } else if (tempObj[key] === 0 && dynamicArray.includes(newKey)) {
        dynamicArray.splice(dynamicArray.indexOf(newKey), 1)
      }
    })



    // Expression used to create an index to be used with dynamicArray to select a random item
    let random = Math.floor(Math.random() * dynamicArray.length);
    this.setState({
      clicked: true,
      text: "Click again!",
      styles: 'secondary',
      index: random
    });
    let tempCountry = dynamicArray[random];

    this.setState({ country: tempCountry })

    // variable to be used to gets all of the state to then be called to look for certain state key
    let tempState = { ...this.state };
    // variable to get the next country name that is passed down

    // putting the variable to start with lowerCase so it can be matched against a state key
    if (tempCountry) {

      tempCountry = tempCountry.charAt(0).toLowerCase() + tempCountry.slice(1)
      // blank array that will be filled
      let array = []
      // iterate through the copy of this.state until a name copy is found e.g. tempCountry === "finland" and state has key called "finlandFacts"
      Object.keys(tempState).find(function (key) {
        if (key.includes(tempCountry)) {
          // fill the blank array with the state key that matches the nextProps.country
          return array = [...tempState[key]]
        }
        return undefined
      })
      // randomly select an item from the area getting a random quote
      let index = Math.floor(Math.random() * array.length);
      // set the State based off the random country passed down from App.js and selectected random quote from that country's array
      array.length > 0 ? this.setState({ fact: array[index] }) : this.setState({ fact: "Error" })
      // remove the quote from temp array above as the fact has been set now
      array.splice(index, 1);
      // if statements based on nextProps.country's name
      if (tempCountry === "iceland") {
        // if the temp array is now at 0 reset setState the original array that was filled, if not setState to the removed quote array
        array.length === 0 ? this.setState({ icelandFacts: fullIcelandFacts }) : this.setState({ icelandFacts: array });
      } else if (tempCountry === "denmark") {
        array.length === 0 ? this.setState({ denmarkFacts: fullDenmarkFacts }) : this.setState({ denmarkFacts: array });
      } else if (tempCountry === "sweden") {
        array.length === 0 ? this.setState({ swedenFacts: fullSwedenFacts }) : this.setState({ swedenFacts: array });
      } else if (tempCountry === "finland") {
        array.length === 0 ? this.setState({ finlandFacts: fullFinlandFacts }) : this.setState({ finlandFacts: array });
      } else if (tempCountry === "norway") {
        array.length === 0 ? this.setState({ norwayFacts: fullNorwayFacts }) : this.setState({ norwayFacts: array });
      }
    } else if (tempCountry === undefined) {
      this.setState({ fact: "ERROR!" })
    }
  }

  handleReset = () => {
    this.setState({
      clicked: false,
      text: 'Click here!',
      styles: 'primary'
    })
  }

  handleArray = (element) => {
    console.log(arrayTotalValues)
    // Changes state of clicked so within facts.js with a method the facts are not re-evaluated
    this.setState({ clicked: false })
    // tempObj copy of objectFromArray in state, used again at the end of this method
    let tempObj = { ...this.state.objectFromArray };
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

    this.setState({ objectFromArray: tempObj })

    // PREVENT LIST FROM BEING ONLY ONE ITEM! BASED OFF THIS VARIABLE
    arrayTotalValues = Object.values(tempObj).reduce((a, b) => a + b)
  }

  handleMouseOver = (index) => {
    // BUG OCCURING WHEN IN REGISTERS TWICE AND NO EXIT, NEED TO FIX AS IT STICKS THE DISPLAYED FACT AND NAME
    console.log("In")
    //PROGRAMME IN LOGIC TO CHANGE POSOFFACT ON MOUSEOVER
    fact = this.state.fact.slice(0);
    country = this.state.country.slice(0);
    posOfFact = this.state.posOfFact.slice(0);
    index === 0 ? this.setState({ posOfFact: 'Previous Fact' }) : index === 1 ? this.setState({ posOfFact: 'Antepenultimate Fact' }) : this.setState({ posOfFact: 'Before Antepenultimate Fact' })
    this.setState({ fact: prevFactArray[index], country: prevStateArray[index] });
  }

  handleMouseOut = () => {
    console.log("out")
    this.setState({ fact: fact, country: country, posOfFact: posOfFact })
  }


  render() {
    return (
      <Wrapper>
        <Header />
        <Navi nordicArray={originArray} testArray={this.state.objectFromArray} onChange={this.handleArray} />
        <Buttons clicked={this.state.clicked} text={this.state.text} handleReset={this.handleReset} handleClick={this.handleClick} styles={this.state.styles} />
        <Combined clicked={this.state.clicked} text={this.state.text} testArray={this.state.objectFromArray} fact={this.state.fact} country={this.state.country} posOfFact={this.state.posOfFact} />
        <PastFacts lastCountries={this.state.lastCountries} lastFacts={this.state.lastFacts} handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
