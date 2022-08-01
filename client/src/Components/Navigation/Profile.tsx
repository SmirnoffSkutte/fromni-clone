import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../Buttons/MyButton'
import styles from './navigation.module.scss'
type Props = {}

export default function Profile({}: Props) {
  // const user=JSON.stringify(localStorage.getItem('user'))
  // const userObj=JSON.parse(user)
  // // const user=localStorage.key(1)
  const logout=function(){
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    window.location.reload()
  }
  return (
    <div className={styles.profile}>
      <MyButton onClick={()=>logout()}>Логаут</MyButton>
    </div>
  )
}