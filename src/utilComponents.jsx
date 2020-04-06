/** @jsx h */
import { Link as RouterLink, Route } from 'react-router-dom'
import { h, Fragment } from 'preact'
import propTypes from 'prop-types'
import characterHOC from './character'
import image from './images'
import styles from './layouts.module.scss'

export const Wrapper = function({ children }) {
  return <div className={styles.wrapper}>{children}</div>
}

export const Button = function({ children, onClick }) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: propTypes.func
}

Button.defaultProps = {
  onClick: () => {}
}

export const Header = function({ children }) {
  return <header className={`${styles.header} padded`}>{children}</header>
}

export const Contnent = function({ isNight, children }) {
  return (
    <main className={`${styles.main} ${isNight ? styles.night : styles.day}`}>
      {children}
    </main>
  )
}

Contnent.propTypes = {
  isNight: propTypes.bool
}

Contnent.defaultProps = {
  isNight: false
}

export const LSidebar = function({ children }) {
  return <div className={styles.left}>{children}</div>
}

export const RSidebar = function({ children }) {
  return <div className={styles.right}>{children}</div>
}

export const Footer = function({ children }) {
  return <footer className={styles.footer}>{children}</footer>
}

export const Link = function({ color, children, to }) {
  return (
    <RouterLink className={styles.link} style={`color: ${color}`} to={to}>
      {children}
    </RouterLink>
  )
}

Link.propTypes = {
  color: propTypes.string.isRequired,
  to: propTypes.string.isRequired
}

export const Title = function({ color = 'inherit', children }) {
  return <h1 style={`color: ${color}`}>{children}</h1>
}

Title.propTypes = {
  color: propTypes.string.isRequired
}

export const LinkList = function({ listProperty }) {
  return (
    <Fragment>
      {listProperty.map((listProps, key) => {
        const { path, color = 'white', character } = listProps
        return (
          // eslint-disable-next-line react/no-array-index-key
          <li key={key}>
            <Link to={path} color={color}>
              {character}
            </Link>
          </li>
        )
      })}
    </Fragment>
  )
}

LinkList.propTypes = {
  listProperty: propTypes.array.isRequired
}

export const CharacterRouteList = function({ route }) {
  return (
    <Fragment>
      {route.map((route, key) => {
        const { path, character } = route
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Route key={key} path={path} component={characterHOC(character)} />
        )
      })}
    </Fragment>
  )
}

CharacterRouteList.propTypes = {
  route: propTypes.array.isRequired
}

export const ImageRouteList = function({ route }) {
  return (
    <Fragment>
      {route.map((route, key) => {
        const { path, character } = route
        // eslint-disable-next-line react/no-array-index-key
        return <Route key={key} path={path} component={image(character)} />
      })}
    </Fragment>
  )
}

ImageRouteList.propTypes = {
  route: propTypes.array.isRequired
}

export const RainbowTitle = function({ children }) {
  return (
    <h1 class={styles.rainbow}>
      {children}
      <span data-text={children} />
      <span data-text={children} />
      <span data-text={children} />
      <span data-text={children} />
    </h1>
  )
}

RainbowTitle.propTypes = {
  children: propTypes.string.isRequired
}

export const RainbowLink = function({ to, children }) {
  return (
    <RouterLink class={`${styles.rainbow} ${styles.link}`} to={to}>
      {children}
      <span data-text={children} />
      <span data-text={children} />
      <span data-text={children} />
      <span data-text={children} />
    </RouterLink>
  )
}

RainbowLink.propTypes = {
  to: propTypes.string.isRequired,
  children: propTypes.string.isRequired
}
