import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'


export default function ProductItem({id, title, price, discount}) {

  const discountPrice =  +(price - price*discount).toFixed(2)


  return (
    <div className={s.product}>
        <p>{title}</p>
        <div className={s.price_block}>
            <div>Цена:</div>
            <div className={s.price}>
                <span className={discount ? s.cur_price: ''}>{price}</span>
                {discount ? <span className={s.discount}>{discountPrice}</span>: ''}
            </div>
        </div>
        <Link className={s.link} to={`/product/${id}`} >more</Link>
    </div>
  )
}
