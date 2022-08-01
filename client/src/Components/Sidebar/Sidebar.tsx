import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './sidebar.module.scss'
type Props = {}

export default function Sidebar({}: Props) {
  return (
    <aside className={styles.sidebarBlock}>
        <ul>
            <li><NavLink to={"/"} >Главная</NavLink></li>
            <li><NavLink to={"/campaing"}>Кампании</NavLink></li>
        </ul>
    </aside>
  )
}