/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  Wrapper,
  LSidebar,
  Contnent,
  Footer,
  Header,
  Middle,
  RSidebar,
  Button,
  Link
} from './components/Stuff'
import './App.css'
import TwilightS from './img/Twilight Sparkle.jpg'
import RainbowD from './img/Rainbow Dash.jpg'
import ApplejackI from './img/Applejack.jpg'
import RarityI from './img/Rarity.jpg'
import FluttershyI from './img/Fluttershy.jpg'
import PinkieP from './img/Pinkie Pie.jpg'
import SpikeI from './img/Spike.jpg'
import {
  TwilightSparkle,
  RainbowDash,
  Applejack,
  Rarity,
  Fluttershy,
  PinkiePie,
  Spike
} from './components/Character'

function Home() {
  return <h2>Please choose a character from the left sidebar.</h2>
}

function picture(name) {
  return () => {
    switch (name) {
      case 'Twilight Sparkle':
        return <img src={TwilightS} alt="Twilight Sparkle" width={200} />
      case 'Rainbow Dash':
        return <img src={RainbowD} alt="Rainbow Dash" width={200} />
      case 'Applejack':
        return <img src={ApplejackI} alt="Applejack" width={200} />
      case 'Rarity':
        return <img src={RarityI} alt="Rarity" width={200} />
      case 'Fluttershy':
        return <img src={FluttershyI} alt="Fluttershy" width={200} />
      case 'Pinkie Pie':
        return <img src={PinkieP} alt="Pinkie Pie" width={200} />
      case 'Spike':
        return <img src={SpikeI} alt="Spike" width={200} />
      default:
        throw new Error('Unknown Image Name')
    }
  }
}

function App() {
  const [dark, setDark] = useState(false)
  const prefix = ''
  return (
    <Router>
      <Wrapper>
        <Header>
          <h1>
            <Link to={`${prefix}/`} color="white" className="padded">
              My Little Pony
            </Link>
          </h1>
          <Button onClick={() => setDark(!dark)}>
            Toggle {dark ? 'Day Mode' : 'Night Mode'}
          </Button>
        </Header>
        <Middle>
          <LSidebar bg="black" color="white">
            <ul>
              <li>
                <Link to={`${prefix}/twilight-sparkle`} color="violet">
                  Twilight Sparkle
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/rainbow-dash`} color="skyblue">
                  Rainbow Dash
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/applejack`} color="orange">
                  Applejack
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/rarity`} color="purple">
                  Rarity
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/fluttershy`} color="pink">
                  Fluttershy
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/pinkie-pie`} color="palevioletred">
                  Pinkie Pie
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/spike`} color="lightgreen">
                  Spike
                </Link>
              </li>
            </ul>
          </LSidebar>
          <Contnent
            border="blue"
            color={dark ? 'white' : 'black'}
            bg={dark ? 'black' : 'white'}
          >
            <Route exact path={`${prefix}/`} component={Home} />
            <Route
              path={`${prefix}/twilight-sparkle`}
              component={TwilightSparkle}
            />
            <Route path={`${prefix}/rainbow-dash`} component={RainbowDash} />
            <Route path={`${prefix}/applejack`} component={Applejack} />
            <Route path={`${prefix}/rarity`} component={Rarity} />
            <Route path={`${prefix}/fluttershy`} component={Fluttershy} />
            <Route path={`${prefix}/pinkie-pie`} component={PinkiePie} />
            <Route path={`${prefix}/spike`} component={Spike} />
          </Contnent>
          <RSidebar bg="palevioletred" color="blue">
            <Route exact path={`${prefix}/`} component={Home} />
            <Route
              path={`${prefix}/twilight-sparkle`}
              component={picture('Twilight Sparkle')}
            />
            <Route
              path={`${prefix}/rainbow-dash`}
              component={picture('Rainbow Dash')}
            />
            <Route
              path={`${prefix}/applejack`}
              component={picture('Applejack')}
            />
            <Route path={`${prefix}/rarity`} component={picture('Rarity')} />
            <Route
              path={`${prefix}/fluttershy`}
              component={picture('Fluttershy')}
            />
            <Route
              path={`${prefix}/pinkie-pie`}
              component={picture('Pinkie Pie')}
            />
            <Route path={`${prefix}/spike`} component={picture('Spike')} />
          </RSidebar>
        </Middle>
        <Footer>Copyright@Andy Chen 2019~present</Footer>
      </Wrapper>
    </Router>
  )
}

export default App
