/** @jsx h */
import { Link as RouterLink } from 'react-router-dom'
import { h, Fragment } from 'preact'
import propTypes from 'prop-types'
import styles from './layouts.module.css'

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

const Link = function({ color, children, to }) {
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

export const Title = function({ color, children }) {
  return <h1 style={`color: ${color}`}>{children}</h1>
}

Title.propTypes = {
  color: propTypes.string.isRequired
}

export const LinkList = function({ listProperty }) {
  return (
    <>
      {listProperty.map((listProps, key) => {
        const { to, color, contnent } = listProps
        return (
          <li key={key}>
            <Link to={to} color={color}>
              {contnent}
            </Link>
          </li>
        )
      })}
    </>
  )
}

LinkList.propTypes = {
  listProperty: propTypes.array.isRequired
}
