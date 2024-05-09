import React, { useEffect, useState } from 'react'
import './products.scss'
import axios from '../../api'

const Products = () => {
  const [products, setProducts] = useState(null)
  const [offset, setOffSet] = useState(1)
  let perPageCount = 6

  useEffect(()=> {
    axios.get('/products', {
      params: {
        limit: offset * perPageCount
      }
    })
      .then(res => setProducts(res.data.products))
      .catch(err => console.log(err))
  }, [offset])

  let productCard = products?.map(el => (
    <div className="products__card">
      <div className="products__card__img">
        <img src={el.images[0]} alt={el.title} />
      </div>
      <div className="products__card__desc">
        <h1>{el.title}</h1>
        <div className="products__card__cost">

        <p>price: ${el.price}</p>
        <p>rating: {el.rating}</p>
        </div>
      </div>
    </div>
  ))
  return (
    <section className='products container'>
      <h1>Our Latest Products</h1>
      <div className="products__cards">
        {productCard}
      </div>
      <button onClick={()=> setOffSet(p => p + 1)}>See more</button>
    </section>
  )
}

export default Products