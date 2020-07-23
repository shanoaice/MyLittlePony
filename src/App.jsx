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
  ImageRouteList,
} from './utilComponents'
import { getCharacterInfoList } from './characterInfo'
import { FiMoon, FiSun } from 'react-icons/fi'
import './App.css'

const prefix = ''

const Home = () => {
  return <h2>Please choose a character from the left sidebar.</h2>
}

function isNightTime() {
  const currentTime = new Date()
  const currentHour = currentTime.getHours()

  return currentHour >= 18 || currentHour <= 6
}

const App = () => {
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
            {night ? <FiSun /> : <FiMoon />}
          </Button>
        </Header>
        <LSidebar>
          <ul>
            <LinkList listProperty={getCharacterInfoList(prefix)} />
          </ul>
        </LSidebar>
        <Contnent isNight={night}>
          <Route exact path={`${prefix}/`} component={Home} />
          <CharacterRouteList route={getCharacterInfoList(prefix)} />
        </Contnent>
        <RSidebar>
          <Route exact path={`${prefix}/`} component={Home} />
          <ImageRouteList route={getCharacterInfoList(prefix)} />
        </RSidebar>
        <Footer>Copyright@Andy Chen 2019-2020</Footer>
      </Wrapper>
    </Router>
  )
}

export default App
