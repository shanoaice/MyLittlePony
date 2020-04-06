/** @jsx h */
import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import { HashRouter as Router, Route } from 'react-router-dom'
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
  CharacterRouteList,
  ImageRouteList
} from './utilComponents'
import './App.css'

const prefix = ''

function Home() {
  return <h2>Please choose a character from the left sidebar.</h2>
}

const characters = [
  {
    path: `${prefix}/twilight-sparkle`,
    color: 'violet',
    character: 'Twilight Sparkle'
  },
  {
    path: `${prefix}/rainbow-dash`,
    color: 'skyblue',
    character: 'Rainbow Dash'
  },
  {
    path: `${prefix}/applejack`,
    color: 'orange',
    character: 'Applejack'
  },
  {
    path: `${prefix}/rarity`,
    color: 'purple',
    character: 'Rarity'
  },
  {
    path: `${prefix}/fluttershy`,
    color: 'pink',
    character: 'Fluttershy'
  },
  {
    path: `${prefix}/pinkie-pie`,
    color: 'palevioletred',
    character: 'Pinkie Pie'
  },
  {
    path: `${prefix}/spike`,
    color: 'lightgreen',
    character: 'Spike'
  },
  {
    path: `${prefix}/starlight-glimmer`,
    character: 'Starlight Glimmer',
    color: 'rgb(125,0,255)'
  },
  {
    path: `${prefix}/princess-celestia`,
    character: 'Princess Celestia'
  },
  {
    path: `${prefix}/princess-luna`,
    character: 'Princess Luna'
  },
  {
    path: `${prefix}/princess-cadance`,
    character: 'Princess Cadance'
  },
  {
    path: `${prefix}/shining-armor`,
    character: `Shining Armor`
  },
  {
    path: `${prefix}/flurry-heart`,
    character: 'Flurry Heart'
  },
  {
    path: `${prefix}/apple-bloom`,
    character: 'Apple Bloom'
  },
  {
    path: `${prefix}/sweetie-belle`,
    character: 'Sweetie Belle'
  },
  {
    path: `${prefix}/scootaloo`,
    character: 'Scootaloo'
  },
  {
    path: `${prefix}/big-mac`,
    character: 'Big Mac'
  },
  {
    path: `${prefix}/trixie`,
    character: 'Trixie'
  },
  {
    path: `${prefix}/diamond-tiara`,
    character: 'Diamond Tiara'
  },
  {
    path: `${prefix}/silver-spoon`,
    character: 'Silver Spoon'
  },
  {
    path: `${prefix}/discord`,
    character: 'Discord'
  }
]

function isNightTime() {
  const currentTime = new Date()
  const currentHour = currentTime.getHours()

  return currentHour >= 18 || currentHour <= 6
}

function App() {
  const nightMode = isNightTime()

  const [night, toggleNight] = useState(nightMode)
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
            <LinkList listProperty={characters} />
          </ul>
        </LSidebar>
        <Contnent isNight={night}>
          <Route exact path={`${prefix}/`} component={Home} />
          <CharacterRouteList route={characters} />
        </Contnent>
        <RSidebar>
          <Route exact path={`${prefix}/`} component={Home} />
          <ImageRouteList route={characters} />
        </RSidebar>
        <Footer>Copyright@Andy Chen 2019-2020</Footer>
      </Wrapper>
    </Router>
  )
}

export default App
