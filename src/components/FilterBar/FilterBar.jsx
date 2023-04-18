import React from 'react'
import { useDispatch } from 'react-redux'
import { productsFilterAction, productsSortAction } from '../../store/reducer/productReducer'
import Box from '../Box/Box'
import s from './style.module.css'

export default function FilterBar() {

  const dispath = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    dispath(productsFilterAction(title))
  }

  return (
      <Box>
        <form onSubmit={onSubmit} onReset={() => dispath(productsFilterAction(''))} className={s.form}>
            <input type="text" name='title' placeholder='название' />
            <button type='submit' >найти</button>
            <button type='reset' >reset</button>
        </form>

        <div className={s.sort}>
          <label htmlFor="sort">Сортировать по: </label>
          <select id='sort' defaultValue='def' onChange={(e) => dispath(productsSortAction(e.target.value))}>
            <option value="def" disabled>default</option>
            <option value="name">название</option>
            <option value="price">цена</option>
          </select>
        </div>

      </Box>
  )
}
