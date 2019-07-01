import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Wrapper, LSidebar, Contnent, Footer, Header, Middle, RSidebar, Button, Link, Title } from './Components'
import './App.css'
import TwilightS from './img/Twilight Sparkle.jpg'
import RainbowD from './img/Rainbow Dash.jpg'
import ApplejackI from './img/Applejack.jpg'
import RarityI from './img/Rarity.jpg'
import FluttershyI from './img/Fluttershy.jpg'
import PinkieP from './img/Pinkie Pie.jpg'
import SpikeI from './img/Spike.jpg'

function Home() {
  return <h2>Please choose a character from the left sidebar.</h2>
}

function TwilightSparkle() {
  return (
  <React.Fragment>
    <Title color="violet">Twilight Sparkle</Title>
    <div>Twilight Sparkle is the central protagonist of the series. She is a purple alicorn. Her Cutie Mark is a pink hexagonal star with a white large hexagonal star inside, surrounded by five white small hexagonal stars, it represents her talent for magic and love for astronomy.</div>
  </React.Fragment>
  )
}

function RainbowDash() {
  return (
    <React.Fragment>
      <Title color="skyblue">Rainbow Dash</Title>
      <div>Rainbow Dash is a blue pegasus with a rainbow-colored mane and tail. Her Cutie Mark is a cloud with a rainbow of lightning underneath, it represents her athleticism and obsession with speed and adventure.</div>
    </React.Fragment>
  )
}

function Applejack() {
  return (
    <React.Fragment>
      <Title color="orange">Applejack</Title>
      <div>Applejack is an orange, blonde-haired earth pony. Her Cutie Mark is three apples, it represents her talent for agriculture and love for her family.</div>
    </React.Fragment>
  )
}

function Rarity() {
  return (
    <React.Fragment>
      <Title color="purple">Rarity</Title>
      <div>Rarity is a white unicorn with a curled violet mane. Her Cutie Mark is three blue diamonds, it represents her talent for prospecting gemstones and her love of art and beauty.</div>
    </React.Fragment>
  )
}

function Fluttershy() {
  return (
    <React.Fragment>
      <Title color="pink">Fluttershy</Title>
      <div>Fluttershy is a yellow pink-maned pegasus. Her Cutie Mark is three pink butterflies, it represents her love of nature and talent as an animal caretaker.</div>
    </React.Fragment>
  )
}

function PinkiePie() {
  return (
    <React.Fragment>
      <Title color="palevioletred">Pinkie Pie</Title>
      <div>Pinkie Pie is a pink earth pony. Her Cutie Mark is one yellow ballon between two blue ballons, it represents her talent for spreading hope and joy, and her desire to entertain her friends.</div>
    </React.Fragment>
  )
}

function Spike() {
  return (
    <React.Fragment>
      <Title color="lightgreen">Spike</Title>
      <div>Spike is a purple baby dragon with green spines. He fulfills the role of Twilight's "number one assistant" to which he is named so for his loyalty and skill at helping Twilight solve problems and learn lessons.</div>
    </React.Fragment>
  )
}

function picture(name) {
    return () => {
        switch(name) {
            case "Twilight Sparkle": console.log(TwilightS); return <img src={TwilightS} alt="Twilight Sparkle" width="200px" />;
            case 'Rainbow Dash': console.log(RainbowD); return <img src={RainbowD} alt="Rainbow Dash" width="200px" />;
            case 'Applejack': console.log(ApplejackI); return <img src={ApplejackI} alt="Applejack" width="200px" />;
            case 'Rarity': console.log(RarityI); return <img src={RarityI} alt="Rarity" width="200px" />;
            case 'Fluttershy': console.log(FluttershyI); return <img src={FluttershyI} alt="Fluttershy" width="200px" />;
            case 'Pinkie Pie': console.log(PinkieP); return <img src={PinkieP} alt="Pinkie Pie" width="200px" />;
            case 'Spike': console.log(SpikeI); return <img src={SpikeI} alt="Spike" width="200px" />;
            default: throw new Error("Unknown Image Name")
        }
    }
}

function App() {
  const [ dark, setDark ] = useState(false);
  const prefix = "/MyLittlePony";
  return (
    <Router>
      <Wrapper>
      <Header>
        <h1><Link to={prefix+"/"} color="white" className="padded">My Little Pony</Link></h1>
        <Button onClick={() => setDark(!dark)}>Toggle {dark?"Day Mode":"Night Mode"}</Button>
      </Header>
      <Middle>
        <LSidebar bg="black" color="white">
          <ul>
            <li>
              <Link to={prefix+"/twilight-sparkle"} color="violet">Twilight Sparkle</Link>
            </li>
            <li>
              <Link to={prefix+"/rainbow-dash"} color="skyblue">Rainbow Dash</Link>
            </li>
            <li>
              <Link to={prefix+"/applejack"} color="orange">Applejack</Link>
            </li>
            <li>
              <Link to={prefix+"/rarity"} color="purple">Rarity</Link>
            </li>
            <li>
              <Link to={prefix+"/fluttershy"} color="pink">Fluttershy</Link>
            </li>
            <li>
              <Link to={prefix+"/pinkie-pie"} color="palevioletred">Pinkie Pie</Link>
            </li>
            <li>
              <Link to={prefix+"/spike"} color="lightgreen">Spike</Link>
            </li>
          </ul>
        </LSidebar>
        <Contnent border="blue" color={dark?"white":"black"} bg={dark?"black":"white"}>
          <Route exact path={prefix+"/"} component={Home} />
          <Route path={prefix+"/twilight-sparkle"} component={TwilightSparkle} />
          <Route path={prefix+"/rainbow-dash"} component={RainbowDash} />
          <Route path={prefix+"/applejack"} component={Applejack} />
          <Route path={prefix+"/rarity"} component={Rarity} />
          <Route path={prefix+"/fluttershy"} component={Fluttershy} />
          <Route path={prefix+"/pinkie-pie"} component={PinkiePie} />
          <Route path={prefix+"/spike"} component={Spike} />
        </Contnent>
        <RSidebar bg="palevioletred" color="blue">
          <Route exact path={prefix+"/"} component={Home} />
          <Route path={prefix+"/twilight-sparkle"} component={picture("Twilight Sparkle")} />
          <Route path={prefix+"/rainbow-dash"} component={picture("Rainbow Dash")} />
          <Route path={prefix+"/applejack"} component={picture("Applejack")} />
          <Route path={prefix+"/rarity"} component={picture("Rarity")} />
          <Route path={prefix+"/fluttershy"} component={picture("Fluttershy")} />
          <Route path={prefix+"/pinkie-pie"} component={picture("Pinkie Pie")} />
          <Route path={prefix+"/spike"} component={picture("Spike")} />
        </RSidebar>
      </Middle>
      <Footer>Copyright@Andy Chen 2019~present</Footer>
      </Wrapper>
    </Router>
  )
}

export default App;
