import styled from 'styled-components'
import { Link as link } from 'react-router-dom'

let flex = styled.div`
  display: flex;
`

export let A = styled.a`
  text-decoration: ${props => props.underline?"underline":"none"};
  color: ${props => props.color?props.color:"blue"};
`

let colored = styled(flex)`
  background: ${props => props.bg?props.bg:"white"};
  color: ${props => props.color?props.color:"black"};
`

export let Wrapper = styled(flex)`
  justify-content: space-around;
  min-height: 100vh;
  flex-direction: column;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export let LSidebar = styled(colored)`
  order: -1;
  flex-grow: 1;
  flex-shrink: 0;
`

export let Contnent = styled(colored)`
  flex-grow: 3;
  border: 2px solid ${props => props.border};
  padding: 1em 2em;
  flex-wrap: wrap;
  align-content: flex-start;
  max-width: 60vw;
`

export let Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-grow:1;
  order:1;
  align-items: center;
  background: #606060;
  color: white;
`

export let Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-grow:1;
  order:-1;
  align-items: center;
  color: white;
  background: #606060;
`

export let Middle = styled(flex)`
  flex-grow: 29;
  justify-content: space-around;
`

export let RSidebar = styled(colored)`
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;
  flex-shrink: 0;
  min-width: 20vw;
`

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 0.75em;
  border: 2px solid palevioletred;
  border-radius: 4px;
`;

export const Link = styled(link)`
  color: ${props => props.color?props.color:"blue"};
  text-decoration: none;
  font-size: 1em;
`

export const Title = styled.h2`
  color: ${props => props.color?props.color:"auto"};
`