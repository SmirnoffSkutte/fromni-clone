import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
// import { AuthContext } from '../AuthContext'
import MyButton from '../Components/Buttons/MyButton'


export default function InfoPage

() {
  return (
    <div>
        Fromni clone
    <NavLink to={"/registration"}>
    <MyButton>
        Регистрация
    </MyButton>
    </NavLink>
    <NavLink to={"/login"}>
    <MyButton>
        Логин
    </MyButton>
    </NavLink>

    </div>
  )
}
