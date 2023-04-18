import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.css'

export default function Nav() {

  const checkActive = ({isActive}) => isActive ? s.active: ''  

  return (
    <div className={s.container}>
        <NavLink className={checkActive} to='/' >Добавить</NavLink>
        <NavLink className={checkActive} to='/products' >Отобразить</NavLink>
    </div>
  )
}
