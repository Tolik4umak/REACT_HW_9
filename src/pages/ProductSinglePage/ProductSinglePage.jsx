import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import s from './style.module.css'


export default function ProductSinglePage() {

  const {id} = useParams()
  const product = useSelector(state => {
    return state.products.find(item => +item.id === +id)
  })
  console.log(product);

  const render = () => {
    const {title,price,discount} = product 
    const discountPrice =  +(price - price*discount).toFixed(2)

    return (
        <div className={s.container}>
            <p className={s.title}>Наименование: <span>{title}</span></p>
            <div className={s.price_block}>
                <div>Цена:</div>
                <div className={s.price}>
                    <span className={discount ? s.cur_price: ''}>{price}</span>
                    {discount ? <span className={s.discount}>{discountPrice}</span>: ''}
                </div>
            </div>
        </div>
    )

  }


  return render()
}
