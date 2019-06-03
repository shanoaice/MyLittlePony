import styled from 'styled-components'

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
`

export let Contnent = styled(colored)`
  flex-grow: 3;
  border: 4px ${props => props.border};
`

export let Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-grow:1;
  order:1;
  align-items: center;
`

export let Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-grow:1;
  order:-1;
  align-items: center;
`

export let Middle = styled(flex)`
  flex-grow: 29;
  justify-content: space-around;  
`

export let RSidebar = styled(colored)`
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;
`