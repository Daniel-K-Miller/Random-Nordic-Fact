(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(36),i=t.n(r),s=(t(92),t(17)),c=t(39),l=t(4),u=t(5),d=t(8),h=t(6),p=t(7),b=t(9),m=t(2),f=t(3);function g(){var e=Object(m.a)(["\n            background-color: #1a1a1a;\n            color: white;\n            border-color: #1a1a1a;\n            opacity: 1;\n        "]);return g=function(){return e},e}function y(){var e=Object(m.a)(["\n    color: white;\n    padding: .5em 1em;\n    font-size: 1.2em;\n    background: #262626;\n    border: 2px solid #666666;\n    border-radius: 3px;\n    text-align: center;\n    display: inline-block;\n    margin: 1em;\n    width: 6em;\n    text-decoration: none;\n    opacity: .2;\n    user-select: none;\n    cursor: pointer;\n        ","\n"]);return y=function(){return e},e}var w=f.b.li(y(),function(e){return 1===e.styles&&Object(f.a)(g())}),O=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(d.a)(this,Object(h.a)(n).call(this,e))).handleClick=function(){t.props.onChange(Object(b.a)(Object(b.a)(t))),1===t.state.styles&&1!==t.props.arrayTotal?t.setState({styles:0}):t.setState({styles:1}),console.log(t.props.arrayTotal)},t.state={styles:1},t}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(w,{key:this.props.id,id:this.props.id,arrayTotal:this.props.arrayTotal,onClick:this.handleClick,styles:this.state.styles},this.props.text)}}]),n}(a.Component);function j(){var e=Object(m.a)(["\n    display: flex;\n    color: white;\n    color: white;\n    margin: 0 100px;\n    background-color: #333333;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    ul {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-around;\n        list-style-type: none;\n        width: 100%;\n    }\n"]);return j=function(){return e},e}var k=f.b.nav(j()),v=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(k,null,o.a.createElement("ul",null,this.props.nordicArray.map(function(n){return o.a.createElement(O,{nordicArray:e.props.nordicArray,key:n,testArray:e.props.testArray,onChange:e.props.onChange,text:n,arrayTotal:e.props.arrayTotal})})))}}]),n}(a.Component);function A(){var e=Object(m.a)(["\n@import url('https://fonts.googleapis.com/css?family=Lato');\n  color: white;\n  display: flex;\n  justify-content: center;\n  font-family: 'Lato';\n  font-weight: bold;\n  font-size: 2em;\n  padding: .7em 0;\n  background: #0d0d0d;\n"]);return A=function(){return e},e}var E=f.b.header(A()),x=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,null,"Random Nordic Fact"))}}]),n}(a.Component),F=t(76),S=t.n(F);function C(){var e=Object(m.a)(["\n        width: 100%;\n        margin: 0 auto;\n        display: flex;\n        justify-content: center;\n        background-color: #0d0d0d;\n        position: absolute;\n        padding: 1em 0;\n        bottom: 0;\n    ul {\n        padding: 1em 0;\n        bottom: 1em;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-around;\n            a {\n            color: white;\n            list-style-type: none;\n            text-decoration: none;\n            user-select: none;\n            filter: invert(100);\n            opacity: .2;\n            &:hover {\n                opacity: .8;\n                animation: all .3 ease-in-out;\n            }\n        }\n    }\n    p {\n        position: absolute;\n        display: flex;\n        align-items: flex-end;\n        bottom: 0;\n        left: 0;\n        margin: 0 0 2em 3em;\n        color: #595959;\n    }\n"]);return C=function(){return e},e}var D=f.b.footer(C()),T=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(D,null,o.a.createElement("ul",null,o.a.createElement("a",{href:"https://github.com/Daniel-K-Miller",target:"_blank"},o.a.createElement("img",{src:S.a,alt:"gitHub"}))),o.a.createElement("p",null,"\xa9 2019 Daniel Kieron Miller"))}}]),n}(a.Component);function M(){var e=Object(m.a)(["\n    color: white;\n    background: #02529C;\n    border-color: #DC1E35;\n  "]);return M=function(){return e},e}function I(){var e=Object(m.a)(["\n    color: white;\n    background: #C60C30;\n    border-color: #C60C30;\n  "]);return I=function(){return e},e}function N(){var e=Object(m.a)(["\n    color: #FECC00;\n    background: #006AA7;\n    border-color: #006AA7;\n  "]);return N=function(){return e},e}function B(){var e=Object(m.a)(["\n    color: #002868;\n    background: #EF2B2D;\n    border-color: white;\n  "]);return B=function(){return e},e}function R(){var e=Object(m.a)(["\n    color: #003580;\n    background: white;\n    border-color: white;\n  "]);return R=function(){return e},e}function U(){var e=Object(m.a)(["\n  color: white;\n  padding: .5em 1em;\n  font-size: 1.2em;\n  background: transparent;\n  border-top: 2px solid white;\n  border-left: 2px solid white;\n  border-right: 2px solid white;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  text-align: center;\n  display: inline-block;\n  margin: 0 auto;\n  right: 250px;\n  position: relative;\n  width: 6em;\n  text-decoration: none;\n  user-select: none;\n  ","\n  ","\n  ","\n  ","\n  ","\n  :hover {\n      animation: myMove 2s ease-in-out;\n  }\n  @keyframes myMove {\n      0% {\n          opacity: 1;\n      }\n      50% {\n          opacity: .5;\n      }\n      100% {\n          opacity: 1;\n      }\n  }\n"]);return U=function(){return e},e}var L=f.b.h1(U(),function(e){return"Finland"===e.styles&&Object(f.a)(R())},function(e){return"Norway"===e.styles&&Object(f.a)(B())},function(e){return"Sweden"===e.styles&&Object(f.a)(N())},function(e){return"Denmark"===e.styles&&Object(f.a)(I())},function(e){return"Iceland"===e.styles&&Object(f.a)(M())}),J=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,"Click again!"===this.props.text&&o.a.createElement(L,{styles:this.props.country},this.props.country))}}]),n}(a.Component);function Y(){var e=Object(m.a)(["\n  color: white;\n  padding: 1.5em;\n  font-size: 1.2em;\n  background: #1a1a1a;\n  border-radius: 3px;\n  text-align: justify;\n  display: inline-block;\n  width: 700px;\n  text-decoration: none;\n"]);return Y=function(){return e},e}var G=f.b.p(Y()),Q=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,"Click again!"===this.props.text&&o.a.createElement(G,{country:this.props.country,testArray:this.props.testArray},this.props.fact))}}]),n}(a.Component);function W(){var e=Object(m.a)(["\n  color: white;\n  padding: .2em .5em;\n  font-size: 1.2em;\n  background: #0d0d0d;\n  border-radius: 3px;\n  text-align: center;\n  display: inline-block;\n  margin: 0 auto;\n  top: 0;\n  right: max-content;\n  position: absolute;\n  width: auto;\n  text-decoration: none;\n  user-select: none;\n  text-align:center;\n  left: max-content;\n"]);return W=function(){return e},e}var P=f.b.h1(W()),z=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,"Click again!"===this.props.text&&o.a.createElement(P,null,this.props.posOfFact))}}]),n}(a.Component);function K(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1em auto;\n  align-items: center;\n  position: relative;\n"]);return K=function(){return e},e}var H=f.b.article(K()),Z=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(H,null,o.a.createElement(J,{clicked:this.props.clicked,country:this.props.country,text:this.props.text}),o.a.createElement(z,{clicked:this.props.clicked,text:this.props.text,posOfFact:this.props.posOfFact}),o.a.createElement(Q,{clicked:this.props.clicked,country:this.props.country,testArray:this.props.testArray,text:this.props.text,fact:this.props.fact}))}}]),n}(a.Component);function V(){var e=Object(m.a)(["\n  background: forestgreen;\n  border: 2px solid forestgreen;\n  opacity: 0.9;\n  :hover {\n    opacity: 1;\n  "]);return V=function(){return e},e}function q(){var e=Object(m.a)(["\n  color: white;\n  padding: .5em 1em;\n  font-size: 1.2em;\n  background: goldenrod;\n  border: 2px solid goldenrod;\n  border-radius: 3px;\n  text-align: center;\n  margin: 1em 0;\n  width: 100%;\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n  user-select: none;\n  :hover {\n    opacity: .9;\n  }\n\n  ","\n"]);return q=function(){return e},e}var X=f.b.a(q(),function(e){return"secondary"===e.styles&&Object(f.a)(V())}),$=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(X,{styles:this.props.styles,onClick:this.props.onChange},this.props.text)}}]),n}(a.Component);function _(){var e=Object(m.a)(["\n  color: white;\n  margin: auto;\n  padding: 0;\n  display: flex;\n  font-size: 1em;\n  background: rosybrown;\n  border: 2px solid rosybrown;\n  border-radius: 50px;\n  text-align: center;\n  width: 20px;\n  height: 20px;\n  text-decoration: none;\n  position: absolute;\n  right: 10px;\n  top: 0;\n  bottom: 0;\n  cursor: pointer;\n  opacity: .5;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 20px;\n  user-select: none;\n  :hover {\n    background: red;\n    border: 2px solid red;\n    opacity: 1;\n  }\n  p {\n    color: black;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n  }\n"]);return _=function(){return e},e}var ee=f.b.a(_()),ne=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,"Click again!"===this.props.text&&o.a.createElement(ee,{onClick:this.props.onChange},o.a.createElement("p",null,"x")))}}]),n}(a.Component);function te(){var e=Object(m.a)(["\n  display: flex;\n  margin: auto;\n  width: 200px;\n  position: relative;\n"]);return te=function(){return e},e}var ae=f.b.article(te()),oe=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(ae,null,o.a.createElement($,{clicked:this.props.clicked,text:this.props.text,styles:this.props.styles,onChange:this.props.handleClick}),o.a.createElement(ne,{clicked:this.props.clicked,text:this.props.text,onChange:this.props.handleReset}))}}]),n}(a.Component),re=t(77),ie=t.n(re);function se(){var e=Object(m.a)(["\n  color: white;\n    padding: .5em 1em;\n    font-size: 1.2em;\n    background: #262626;\n    border: 2px solid #666666;\n    border-radius: 3px;\n    text-align: center;\n    display: inline-block;\n    margin: 1em;\n    width: 6em;\n    text-decoration: none;\n    opacity: .2;\n    user-select: none;\n    flex-direction: row;\n    :hover {\n        background-color: white;\n        color: #262626;\n    }\n"]);return se=function(){return e},e}function ce(){var e=Object(m.a)(["\n    background-color: ;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 500px;\n    right: 0;\n    left: 0;\n"]);return ce=function(){return e},e}var le=f.b.article(ce()),ue=f.b.h1(se()),de=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(le,null,this.props.lastCountries.map(function(n,t){return o.a.createElement(ue,{key:ie.a.v4(),onMouseEnter:function(){return e.props.handleMouseOver(t)},onMouseLeave:e.props.handleMouseOut,fact:e.props.lastFacts[t]},n)}))}}]),n}(a.Component),he=t(150),pe=t(151),be=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(he.a,{url:"https://google.co.uk",title:this.props.fact,hashtags:["randomNordicSnippet"]},o.a.createElement(pe.a,null))}}]),n}(a.Component),me=t(152),fe=t(153),ge=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(me.a,{url:"https://google.co.uk",media:"https://qph.fs.quoracdn.net/main-qimg-fd31f7fda382125bb68bb44ae5c7db6e.webp",description:this.props.fact},o.a.createElement(fe.a,null))}}]),n}(a.Component),ye=t(154),we=t(155),Oe=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(ye.a,{url:"https://google.co.uk",quote:this.props.fact,hashtag:"#randomNordicSnippet"},o.a.createElement(we.a,null))}}]),n}(a.Component);function je(){var e=Object(m.a)(["\n    position: fixed;\n    width: max-content;\n    left: 0;\n    top: 32.5vh;\n    z-index: 1;\n    cursor: pointer;\n"]);return je=function(){return e},e}var ke=f.b.div(je()),ve=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(ke,null,o.a.createElement(be,{fact:this.props.fact}),o.a.createElement(Oe,{fact:this.props.fact}),o.a.createElement(ge,{fact:this.props.fact}))}}]),n}(a.Component);function Ae(){var e=Object(m.a)(["\n  display: block;\n  text-align: center;\n  margin: 0 auto;\n  width: 1000px;\n  height: 100vh;\n  position: relative;\n  background-color: #262626;\n"]);return Ae=function(){return e},e}var Ee=["denmark","Finland","Sweden","Norway","Iceland"],xe=[],Fe=[],Se=[],Ce=[],De=[],Te=[],Me=[],Ie=[],Ne=void 0,Be="",Re="",Ue=5,Le=f.b.section(Ae()),Je=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(d.a)(this,Object(h.a)(n).call(this,e))).handleClick=function(){var e=xe[t.state.index],n=t.state.fact.slice(0);e&&(Fe.unshift(e),Se.unshift(n)),Fe.length>3&&(Fe.pop(),Se.pop()),t.setState({lastCountries:Fe,lastFacts:Se});var a=Object(c.a)({},t.state.objectFromArray);Object.keys(a).forEach(function(e){var n=e.charAt(0).toUpperCase()+e.slice(1);1!==a[e]||xe.includes(n)?0===a[e]&&xe.includes(n)&&xe.splice(xe.indexOf(n),1):xe.push(n)});var o=Math.floor(Math.random()*xe.length);t.setState({clicked:!0,text:"Click again!",styles:"secondary",index:o});var r=xe[o];t.setState({country:r});var i=Object(c.a)({},t.state);if(r){r=r.charAt(0).toLowerCase()+r.slice(1);var l=[];Object.keys(i).find(function(e){if(e.includes(r))return l=Object(s.a)(i[e])});var u=Math.floor(Math.random()*l.length);l.length>0?t.setState({fact:l[u]}):t.setState({fact:"Error"}),l.splice(u,1),"iceland"===r?0===l.length?t.setState({icelandFacts:Ie}):t.setState({icelandFacts:l}):"denmark"===r?0===l.length?t.setState({denmarkFacts:Me}):t.setState({denmarkFacts:l}):"sweden"===r?0===l.length?t.setState({swedenFacts:De}):t.setState({swedenFacts:l}):"finland"===r?0===l.length?t.setState({finlandFacts:Ce}):t.setState({finlandFacts:l}):"norway"===r&&(0===l.length?t.setState({norwayFacts:Te}):t.setState({norwayFacts:l}))}else void 0===r&&t.setState({fact:"ERROR!"})},t.handleReset=function(){t.setState({clicked:!1,text:"Click here!",styles:"primary"})},t.handleArray=function(e){var n=Object(c.a)({},t.state.objectFromArray),a=e.props.text.charAt(0).toLowerCase()+e.props.text.slice(1);Object.keys(n).forEach(function(e){e===a&&1===n[e]&&1!==Ue?(n[e]=0,Ue-=1):e===a&&0===n[e]&&(n[e]=1,Ue+=1)}),t.setState({objectFromArray:n})},t.handleMouseOver=function(e){console.log("In"),Ne=t.state.fact.slice(0),Be=t.state.country.slice(0),Re=t.state.posOfFact.slice(0),0===e?t.setState({posOfFact:"Previous Fact"}):1===e?t.setState({posOfFact:"Antepenultimate Fact"}):t.setState({posOfFact:"Before Antepenultimate Fact"}),t.setState({fact:Se[e],country:Fe[e]})},t.handleMouseOut=function(){console.log("out"),t.setState({fact:Ne,country:Be,posOfFact:Re})},t.state={clicked:!1,text:"Click here!",styles:"primary",index:"",lastCountries:[],lastFacts:[],objectFromArray:{},country:"",fact:"",posOfFact:"Current Fact",finlandFacts:["Finland joined the European Union in 1995.","The company Nokia got its name from the Town in Finland.","Nokia was founded in 1865 as a pulp mill and later transitioned onto electronics.","Finland was ranked as the #1 happiest place to live in the world according to the UN\u2019s World Happiest Report 2018.","Speeding tickets in Finland are based on total income of the violator instead of a universal set fee.","Finland adopted the Euro on 1st January 1999 and abandoned the Finnish Markka on 28th February 2002.","The average Finn consumes 12 Kilos of coffee each year.","Finland produces the greatest number of heavy-metal bands per capita.","In 2006 Finland won Eurovision song contest with the band Lordi performing the song \u2018hard rock hallelujah\u2019.","Finland has come last in the Eurovision Song Contest 10 times (1963, 1965, 1968, 1980, 1982, 1990, 1992, 1996, 2009, 2015).","The population of Finland in 2017 was 5.5 million.","It is estimated that there are 2 million saunas in Finland.","Finnish is a Uralic language with Estonian being the closest related language.","In 1906, Finland was the first European country to allow all women to vote.","Finland elected its first female prime minister (Anneli J\xe4\xe4tteenm\xe4ki) in April 2003, making it the only country in Europe with both a female president (Tarja Halonen) and prime minister.","The operating system Linux was created by Finn Linus Torvalds in 1991. Linus also created the version control system Git in 2005.","Finn Kimi R\xe4ikk\xf6nnen won the 2007 F1 World Championship with 110 points.","The capital of Finland is Helsinki with a population of 631,695 in 2017.","Finland\u2019s national animal is the brown bear"],swedenFacts:["Sweden joined the European Union in 1995.","Sweden is owed approximately \u20ac254,000,000 by North Korea. This is due to Kim Il-sung striking a deal to buy 1000 Volvo cars from the Swedish government in 1974 and not paying for the goods.","Sweden is the fifth biggest country in Europe (447,435 km2m), and also has the second lowest population per square kilometre in Europe.","Sweden has won the Eurovision Song Contest 6 times (1974, 1984, 1991, 1991, 2012, 2015) making it the second highest winning country.","Sweden has come last in the Eurovision song contest 2 times (1963, 1977).","Sweden has produced multiple platinum selling artists. The most notable being: ABBA (375 million album/single sales), Roxette (75 million album/single sales), Ace of Base (50 million album/single sales), Avicii (30 million album/single sales), Europe (23 million album/single sales).","Sweden has the greatest number of McDonald\u2019s restaurants per capita.","Sweden is the only country in which donations make up more than 1% of the country\u2019s GDP.","The Swedish music group ABBA had to negotiate naming rights with the Abba Seafood Company which was founded in 1838.","The population of Sweden was 9.9 million in 2017.","The currency used in Sweden is Swedish crowns (SEK).","The capital of Sweden is Stockholm with a population of 960,031 in 2017.","Swede Daniel Ek founded the streaming service Spotify in 2008.","Three Swedish companies earned a spot in Fortunes Magazines Global 500 in 2017. Volvo (301), Ericsson (419), and H&M (482).","The Nobel Prize award is named after Swedish scientist Alfred Nobel. Nobel\u2019s most famous invention was dynamite.","Sweden has not participated in any war for almost two centuries.","Swedish parents are entitled to 480 days of paid parental leave\u2014and of those, 60 days are reserved for the father. In 2012, dads used 24% of the total parental leave.","Sweden\u2019s national animal is the Eurasian Elk"],norwayFacts:["Norway is not a member of the European Union.","In 1994 Norway held a referendum on whether to join the EU, the \u2018no\u2019 side won with 52.2% of the vote.","The currency in Norway is the Norwegian Krone.","The population of Norway in 2017 was 5.2 million.","The capital of Norway is Oslo with a population of 634,293 in 2017.","Europe\u2019s northernmost point is North Cape within the Municipality of Nordkapp.","Norwegian Johan Vaaler has been credited as the inventor of the paper clip.","The Norwegian Government Pension Fund, also known as the \u2018oil fund\u2019 has over $1 trillion in assets. It is worth $195,000 per Norwegian citizen.","Norwegian pop group A-ha are named after jottings down in a notebook. Lead singer, Morten Harket noticed the word \u201caha\u201d in fellow bandmate Paul Waaktaar-Savoy\u2019s notebook and this led to the band\u2019s name.","The Norwegian oil company Equinor is the only Norwegian company to earn a spot in Fortunes Magazines Global 500 in 2017 ranking at 207.","The world\u2019s largest road tunnel called L\xe6rdal Tunnel resides in Norway measuring 24.5Km long.","All residents of Norway have three figures published about their wealth, these include: their annual income, income tax paid, and total wealth. Pre-2013 this data was completely open, now a person instead has to request information of another and that person is able to see who has looked up their data regarding these figures.","Ancient and modern skiing were invented in Norway. Norwegian Sondre Norheim is seen as the father of modern skiing.","Norway has won the Eurovision Song Contest 3 times (1985, 1995, 2009).","Norway has come last in the Eurovision Song Contest 11 times (1963, 1969, 1974, 1976, 1978, 1981, 1990, 1997, 2001, 2004, 2012).","Norway\u2019s national animal is the lion."],denmarkFacts:["The population of Denmark was 5.77 million in 2017.","The capital of Denmark is Copenhagen with a population of 602,481 in 2017.","Denmark\u2019s currency is the Danish Krone.","Denmark joined the European Union in 1973.","Denmark\u2019s flag the \u201cDannebrog\u201d first acknowledged in 1219 is the oldest state flag still in use by an independent nation.","Greenland is a part of the Danish Kingdom, but is an autonomous constituent country.","The Dane\u2019s have a word called \u201chygge\u201d which describes the feeling of cosiness while relaxing, being with others, or by yourself.","At any point in Denmark you can never be more than 52KM away from the coast.","Dane Ole Kirk Christiansen founded Lego in 1932. The name Lego comes from shortened the shortened words \u201cLeg godt\u201d which translates to \u201cplay well\u201d.","The Danish language has no words for please.","Denmark is a member of NATO.","Denmark was the first European country to abolish slavery doing so in 1792.","Denmark has won the Eurovision Song Contest 3 times (1963, 2000, 2013).","Denmark has come last in the Eurovision Song Contest one time in 2002.","The Danish business conglomerate Maersk is the only Danish company to earn a spot in Fortunes Magazines Global 500 in 2017 ranking at 298."],icelandFacts:["The population of Iceland was 338,349 in 2017.","The capital of Iceland is Reykjavik with a population 122,853.","The currency of Iceland is the Icelandic kr\xf3na.","There are no forests in Iceland.","Iceland produces the most amount of books/magazine publications per capita. 10% of the population will publish a book in their lifetime.","Raw puffin heart is considered an Icelandic delicacy.","Beer was prohibited in Iceland from 1915 to 1989.","Iceland has 130 active and extinct volcanic mountains, 18 of which have erupted since human inhabitation of Iceland.","As of 2015 Icelandic musician Bj\xf6rk has sold between 20 and 40 million records worldwide making her Iceland\u2019s most successful artist in terms of sales.","Iceland\u2019s national animal is the Gyrfalcon."]},t.handleClick=t.handleClick.bind(Object(b.a)(Object(b.a)(t))),t.handleReset=t.handleReset.bind(Object(b.a)(Object(b.a)(t))),t.handleArray=t.handleArray.bind(Object(b.a)(Object(b.a)(t))),t.handleMouseOver=t.handleMouseOver.bind(Object(b.a)(Object(b.a)(t))),t.handleMouseOut=t.handleMouseOut.bind(Object(b.a)(Object(b.a)(t))),t}return Object(p.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){var e={};Ee.forEach(function(n){var t=/^[a-z]/,a=n.charAt(0).toLowerCase()+n.slice(1);t.test(n)?t.test(n)&&(e[n]=1,Object.assign(e,e[n]),Ee[Ee.indexOf(n)]=n.charAt(0).toUpperCase()+n.slice(1)):(Ee[Ee.indexOf(n)]=a,e[a]=1,Object.assign(e,e[a]),Ee[Ee.indexOf(a)]=n)}),this.setState({objectFromArray:e}),Ce=Object(s.a)(this.state.finlandFacts),De=Object(s.a)(this.state.swedenFacts),Te=Object(s.a)(this.state.norwayFacts),Me=Object(s.a)(this.state.denmarkFacts),Ie=Object(s.a)(this.state.icelandFacts)}},{key:"render",value:function(){return o.a.createElement(Le,null,o.a.createElement(x,null),o.a.createElement(v,{nordicArray:Ee,testArray:this.state.objectFromArray,onChange:this.handleArray,arrayTotal:Ue}),o.a.createElement(oe,{clicked:this.state.clicked,text:this.state.text,handleReset:this.handleReset,handleClick:this.handleClick,styles:this.state.styles}),o.a.createElement(Z,{clicked:this.state.clicked,text:this.state.text,testArray:this.state.objectFromArray,fact:this.state.fact,country:this.state.country,posOfFact:this.state.posOfFact}),o.a.createElement(ve,{fact:this.state.fact}),o.a.createElement(de,{lastCountries:this.state.lastCountries,lastFacts:this.state.lastFacts,handleMouseOver:this.handleMouseOver,handleMouseOut:this.handleMouseOut}),o.a.createElement(T,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ye=t(85);i.a.render(o.a.createElement(Ye.a,{basename:""},o.a.createElement(Je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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"},87:function(e,n,t){e.exports=t(149)},92:function(e,n,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.d46ae82d.chunk.js.map