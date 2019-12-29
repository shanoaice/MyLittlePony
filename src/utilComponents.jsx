import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import propTypes from 'prop-types'
import styles from './layouts.module.css'

export const Wrapper = function() {
  return <div className={styles.wrapper} />
}

export const Button = function() {
  return <button type="button" className={styles.button} />
}

export const Header = function() {
  return <header className={styles.header} />
}

export const Contnent = function({ isNight }) {
  return (
    <main className={`${styles.main} ${isNight ? styles.night : styles.day}`} />
  )
}

Contnent.propTypes = {
  isNight: propTypes.bool
}

Contnent.defaultProps = {
  isNight: false
}

export const LSidebar = function() {
  return <div className={styles.left} />
}

export const RSidebar = function() {
  return <div className={styles.right} />
}

export const Footer = function() {
  return <footer className={styles.footer} />
}

export const Link = function({ color }) {
  return <RouterLink className={styles.link} style={`color: ${color}`} />
}

Link.propTypes = {
  color: propTypes.string.isRequired
}

export const Title = function({ color }) {
  return <h1 style={`color: ${color}`} />
}

Title.propTypes = {
  color: propTypes.string.isRequired
}
