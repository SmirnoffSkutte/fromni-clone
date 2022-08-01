import React from 'react'
import Logo from './Logo'
import styles from './navigation.module.scss'
import Profile from './Profile'
export default function Navigation() {
  return (
    <nav className={styles.navBlock}>
        <Logo></Logo>
        <Profile></Profile>
    </nav>
  )
}
