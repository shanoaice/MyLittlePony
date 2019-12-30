/** @jsx h */
import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  Wrapper,
  LSidebar,
  Contnent,
  Footer,
  Header,
  RSidebar,
  Button,
  Link,
  LinkList,
  RouteList
} from './utilComponents'
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
} from './characters'

function Home() {
  return <h2>Please choose a character from the left sidebar.</h2>
}

const pictures = {
  'Twilight Sparkle': (
    <img src={TwilightS} alt="Twilight Sparkle" width={200} />
  ),
  'Rainbow Dash': <img src={RainbowD} alt="Rainbow Dash" width={200} />,
  Applejack: <img src={ApplejackI} alt="Applejack" width={200} />,
  Rarity: <img src={RarityI} alt="Rarity" width={200} />,
  Fluttershy: <img src={FluttershyI} alt="Fluttershy" width={200} />,
  'Pinkie Pie': <img src={PinkieP} alt="Pinkie Pie" width={200} />,
  Spike: <img src={SpikeI} alt="Spike" width={200} />
}

function picture(name) {
  return () => {
    return pictures[name]
  }
}

function App() {
  const [night, toggleNight] = useState(false)
  window.toggleNight = toggleNight
  const prefix = ''
  return (
    <Router>
      <Wrapper>
        <Header>
          <h1>
            <Link to={`${prefix}/`} color="white">
              My Little Pony
            </Link>
          </h1>
          <Button onClick={() => toggleNight(!night)}>
            Toggle {night ? 'Day Mode' : 'Night Mode'}
          </Button>
        </Header>
        <LSidebar>
          <ul>
            <LinkList
              listProperty={[
                {
                  to: `${prefix}/twilight-sparkle`,
                  color: 'violet',
                  contnent: 'Twilight Sparkle'
                },
                {
                  to: `${prefix}/rainbow-dash`,
                  color: 'skyblue',
                  contnent: 'Rainbow Dash'
                },
                {
                  to: `${prefix}/applejack`,
                  color: 'orange',
                  contnent: 'Applejack'
                },
                {
                  to: `${prefix}/rarity`,
                  color: 'purple',
                  contnent: 'Rarity'
                },
                {
                  to: `${prefix}/fluttershy`,
                  color: 'pink',
                  contnent: 'Fluttershy'
                },
                {
                  to: `${prefix}/pinkie-pie`,
                  color: 'palevioletred',
                  contnent: 'Pinkie Pie'
                },
                {
                  to: `${prefix}/spike`,
                  color: 'lightgreen',
                  contnent: 'Spike'
                }
              ]}
            />
          </ul>
        </LSidebar>
        <Contnent isNight={night}>
          <Route exact path={`${prefix}/`} component={Home} />
          <RouteList
            route={[
              {
                path: `${prefix}/twilight-sparkle`,
                component: TwilightSparkle
              },
              {
                path: `${prefix}/rainbow-dash`,
                component: RainbowDash
              },
              {
                path: `${prefix}/applejack`,
                component: Applejack
              },
              {
                path: `${prefix}/rarity`,
                component: Rarity
              },
              {
                path: `${prefix}/fluttershy`,
                component: Fluttershy
              },
              {
                path: `${prefix}/pinkie-pie`,
                component: PinkiePie
              },
              {
                path: `${prefix}/spike`,
                component: Spike
              }
            ]}
          />
        </Contnent>
        <RSidebar>
          <Route exact path={`${prefix}/`} component={Home} />
          <RouteList
            route={[
              {
                path: `${prefix}/twilight-sparkle`,
                component: picture('Twilight Sparkle')
              },
              {
                path: `${prefix}/rainbow-dash`,
                component: picture('Rainbow Dash')
              },
              {
                path: `${prefix}/applejack`,
                component: picture('Applejack')
              },
              {
                path: `${prefix}/rarity`,
                component: picture('Rarity')
              },
              {
                path: `${prefix}/fluttershy`,
                component: picture('Fluttershy')
              },
              {
                path: `${prefix}/pinkie-pie`,
                component: picture('Pinkie Pie')
              },
              {
                path: `${prefix}/spike`,
                component: picture('Spike')
              }
            ]}
          />
        </RSidebar>
        <Footer>Copyright@Andy Chen 2019~present</Footer>
      </Wrapper>
    </Router>
  )
}

export default App
