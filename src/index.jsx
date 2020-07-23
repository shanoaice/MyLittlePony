/** @jsx h */
import 'preact/debug'
import { render, h } from 'preact'
import './index.css'
import 'fontsource-roboto/latin-ext-300.css'
import 'fontsource-roboto/latin-ext-400.css'
import 'fontsource-roboto/latin-ext-500.css'
import 'fontsource-roboto/latin-ext-700.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

render(<App />, document.querySelector('#app'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
