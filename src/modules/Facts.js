import React, { Component } from 'react';
import styled from 'styled-components';

const Fact = styled.p`
  color: white;
  padding: 1.5em;
  font-size: 1.2em;
  background: #1a1a1a;
  border-radius: 3px;
  text-align: center;
  display: inline-block;
  margin: .2em;
  width: 700px;
  text-decoration: none;
`
// Arrays used for resetting the state once array states are empty
let fullFinlandFacts = [];
let fullSwedenFacts = [];
let fullNorwayFacts = [];
let fullDenmarkFacts = [];
let fullIcelandFacts = [];

class FactBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fact: '',
            finlandFacts: [`Finland joined the European Union in 1995.`, `The company Nokia got its name from the Town in Finland.`, `Nokia was founded in 1865 as a pulp mill and later transitioned onto electronics.`, `Finland was ranked as the #1 happiest place to live in the world according to the UN’s World Happiest Report 2018.`, `Speeding tickets in Finland are based on total income of the violator instead of a universal set fee.`, `Finland adopted the Euro on 1st January 1999 and abandoned the Finnish Markka on 28th February 2002.`, `The average Finn consumes 12 Kilos of coffee each year.`, `Finland produces the greatest number of heavy-metal bands per capita.`, `In 2006 Finland won Eurovision song contest with the band Lordi performing the song ‘hard rock hallelujah’.`, `Finland has come last in the Eurovision Song Contest 10 times (1963, 1965, 1968, 1980, 1982, 1990, 1992, 1996, 2009, 2015).`, `The population of Finland in 2017 was 5.5 million.`, `It is estimated that there are 2 million saunas in Finland.`, `Finnish is a Uralic language with Estonian being the closest related language.`, `In 1906, Finland was the first European country to allow all women to vote.`, `Finland elected its first female prime minister (Anneli Jäätteenmäki) in April 2003, making it the only country in Europe with both a female president (Tarja Halonen) and prime minister.`, `The operating system Linux was created by Finn Linus Torvalds in 1991. Linus also created the version control system Git in 2005.`, `Finn Kimi Räikkönnen won the 2007 F1 World Championship with 110 points.`, `The capital of Finland is Helsinki with a population of 631,695 in 2017.`, `Finland’s national animal is the brown bear`],
            swedenFacts: [`Sweden joined the European Union in 1995.`, `Sweden is owed approximately €254,000,000 by North Korea. This is due to Kim Il-sung striking a deal to buy 1000 Volvo cars from the Swedish government in 1974 and not paying for the goods.`, `Sweden is the fifth biggest country in Europe (447,435 km2m), and also has the second lowest population per square kilometre in Europe.`, `Sweden has won the Eurovision Song Contest 6 times (1974, 1984, 1991, 1991, 2012, 2015) making it the second highest winning country.`, `Sweden has come last in the Eurovision song contest 2 times (1963, 1977).`, `Sweden has produced multiple platinum selling artists. The most notable being: ABBA (375 million album/single sales), Roxette (75 million album/single sales), Ace of Base (50 million album/single sales), Avicii (30 million album/single sales), Europe (23 million album/single sales).`, `Sweden has the greatest number of McDonald’s restaurants per capita.`, `Sweden is the only country in which donations make up more than 1% of the country’s GDP.`, `The Swedish music group ABBA had to negotiate naming rights with the Abba Seafood Company which was founded in 1838.`, `The population of Sweden was 9.9 million in 2017.`, `The currency used in Sweden is Swedish crowns (SEK).`, `The capital of Sweden is Stockholm with a population of 960,031 in 2017.`, `Swede Daniel Ek founded the streaming service Spotify in 2008.`, `Three Swedish companies earned a spot in Fortunes Magazines Global 500 in 2017. Volvo (301), Ericsson (419), and H&M (482).`, `The Nobel Prize award is named after Swedish scientist Alfred Nobel. Nobel’s most famous invention was dynamite.`, `Sweden has not participated in any war for almost two centuries.`, `Swedish parents are entitled to 480 days of paid parental leave—and of those, 60 days are reserved for the father. In 2012, dads used 24% of the total parental leave.`, `Sweden’s national animal is the Eurasian Elk`],
            norwayFacts: [`Norway is not a member of the European Union.`, `In 1994 Norway held a referendum on whether to join the EU, the ‘no’ side won with 52.2% of the vote.`, `The currency in Norway is the Norwegian Krone.`, `The population of Norway in 2017 was 5.2 million.`, `The capital of Norway is Oslo with a population of 634,293 in 2017.`, `Europe’s northernmost point is North Cape within the Municipality of Nordkapp.`, `Norwegian Johan Vaaler has been credited as the inventor of the paper clip.`, `The Norwegian Government Pension Fund, also known as the ‘oil fund’ has over $1 trillion in assets. It is worth $195,000 per Norwegian citizen.`, `Norwegian pop group A-ha are named after jottings down in a notebook. Lead singer, Morten Harket noticed the word “aha” in fellow bandmate Paul Waaktaar-Savoy’s notebook and this led to the band’s name.`, `The Norwegian oil company Equinor is the only Norwegian company to earn a spot in Fortunes Magazines Global 500 in 2017 ranking at 207.`, `The world’s largest road tunnel called Lærdal Tunnel resides in Norway measuring 24.5Km long.`, `All residents of Norway have three figures published about their wealth, these include: their annual income, income tax paid, and total wealth. Pre-2013 this data was completely open, now a person instead has to request information of another and that person is able to see who has looked up their data regarding these figures.`, `Ancient and modern skiing were invented in Norway. Norwegian Sondre Norheim is seen as the father of modern skiing.`, `Norway has won the Eurovision Song Contest 3 times (1985, 1995, 2009).`, `Norway has come last in the Eurovision Song Contest 11 times (1963, 1969, 1974, 1976, 1978, 1981, 1990, 1997, 2001, 2004, 2012).`, `Norway’s national animal is the lion.`],
            denmarkFacts: [`The population of Denmark was 5.77 million in 2017.`, `The capital of Denmark is Copenhagen with a population of 602,481 in 2017.`, `Denmark’s currency is the Danish Krone.`, `Denmark joined the European Union in 1973.`, `Denmark’s flag the “Dannebrog” first acknowledged in 1219 is the oldest state flag still in use by an independent nation.`, `Greenland is a part of the Danish Kingdom, but is an autonomous constituent country.`, `The Dane’s have a word called “hygge” which describes the feeling of cosiness while relaxing, being with others, or by yourself.`, `At any point in Denmark you can never be more than 52KM away from the coast.`, `Dane Ole Kirk Christiansen founded Lego in 1932. The name Lego comes from shortened the shortened words “Leg godt” which translates to “play well”.`, `The Danish language has no words for please.`, `Denmark is a member of NATO.`, `Denmark was the first European country to abolish slavery doing so in 1792.`, `Denmark has won the Eurovision Song Contest 3 times (1963, 2000, 2013).`, `Denmark has come last in the Eurovision Song Contest one time in 2002.`, `The Danish business conglomerate Maersk is the only Danish company to earn a spot in Fortunes Magazines Global 500 in 2017 ranking at 298.`],
            icelandFacts: [`The population of Iceland was 338,349 in 2017.`, `The capital of Iceland is Reykjavik with a population 122,853.`, `The currency of Iceland is the Icelandic króna.`, `There are no forests in Iceland.`, `Iceland produces the most amount of books/magazine publications per capita. 10% of the population will publish a book in their lifetime.`, `Raw puffin heart is considered an Icelandic delicacy.`, `Beer was prohibited in Iceland from 1915 to 1989.`, `Iceland has 130 active and extinct volcanic mountains, 18 of which have erupted since human inhabitation of Iceland.`, `As of 2015 Icelandic musician Björk has sold between 20 and 40 million records worldwide making her Iceland’s most successful artist in terms of sales.`, `Iceland’s national animal is the Gyrfalcon.`]
        }
    }
    // when mounted copies arrays in state to arrays outside of state, so when array states are empty they can reuse the outside arrays.
    componentWillMount() {
        fullFinlandFacts = [...this.state.finlandFacts];
        fullSwedenFacts = [...this.state.swedenFacts];
        fullNorwayFacts = [...this.state.norwayFacts];
        fullDenmarkFacts = [...this.state.denmarkFacts];
        fullIcelandFacts = [...this.state.icelandFacts];
    };

    componentWillReceiveProps(nextProps) {
        //  
        if (nextProps.clicked === true) {
            // variable to be used to gets all of the state to then be called to look for certain state key
            let tempState = this.state;
            // variable to get the next country name that is passed down
            let tempCountry = nextProps.country
            // putting the variable to start with lowerCase so it can be matched against a state key
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
            this.setState({ fact: array[index] })
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
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.props.text === "Click again!" && <Fact country={this.props.country} testArray={this.props.testArray}>{this.state.fact}</Fact>}
            </React.Fragment>
        );
    }
}

export default FactBox;
