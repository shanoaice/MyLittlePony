import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Wrapper, LSidebar, Contnent, Footer, Header, Middle, RSidebar } from './Components'



function App() {
  return (
    <Wrapper>
      <Header>header</Header>
      <Middle>
        <LSidebar bg="black" color="white">sidebar</LSidebar>
        <Contnent border="blue">normal</Contnent>
        <RSidebar bg="palevioletred" color="blue">right sidebar</RSidebar>
      </Middle>
      <Footer>footer</Footer>
    </Wrapper>
  )
}

export default App;
