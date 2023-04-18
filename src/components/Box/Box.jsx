import React from 'react'
import s from './style.module.css'

export default function Box({children}) {
  return (
    <div className={s.box}>
      {children}
    </div>
  )
}
