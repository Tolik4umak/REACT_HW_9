import React from 'react'
import { useDispatch } from 'react-redux'
import { productsAddAction } from '../../store/reducer/productReducer'
import s from './style.module.css'

export default function NewProdForm() {

  const dispatch = useDispatch()
  
  const onSubmit = (e) => {
    e.preventDefault()

    const id = Date.now()
    const title = e.target.title.value
    const price = +e.target.price.value
    const discount = +e.target.discount.value / 100

    const product =  discount 
    ? {
      id,
      title,
      price,
      discount
    }:{
      id,
      title,
      price
    }

    dispatch(productsAddAction(product))

    e.target.title.value = '' 
    e.target.price.value = ''
    e.target.discount.value = ''

  }  
  
  return (
    
    <form onSubmit={onSubmit} className={s.form}>
        <input type="text" name='title' required placeholder='название'/> 
        <input type='number' name='price' required placeholder='цена'/> 
        <input type='number' name='discount' placeholder='процент скидки'/> 
        <button type='submit'>Добавить</button>
    </form>

  )
}
