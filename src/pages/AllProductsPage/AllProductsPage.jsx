import React from 'react'
import { useSelector } from 'react-redux'
import FilterBar from '../../components/FilterBar/FilterBar'
import ProductItem from '../../components/ProductItem/ProductItem'
import s from './style.module.css'

export default function AllProductsPage() {

  const {products} = useSelector(state => state)  


  return (
    <div className={s.container}>
        
        <FilterBar/>

        <div className={s.products}>
            {
                products.map(item => item.show? <ProductItem key={item.id} {...item}/> : '')
            }
        </div>
    </div>
  )
}
