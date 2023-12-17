import React, { useContext, useState } from 'react'
import { MyContext } from './MyContext'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function MyCart() {

  const {products, setProducts, cartLength, setCartLength } = useContext(MyContext)

  const cartArr = products.filter((pro)=>(
    pro.inCart 
  ))

  const handleRemoveFromCart = (id)=>{
    // console.log(id)
    setProducts((pro)=>pro.map((product)=>(
      product.id == id ? { ...product, inCart: !product.inCart } : product
    )))
  }

  useEffect(()=>{
    setProducts(products)
  },[products,setProducts, cartArr])

  return (
    <>
    <div className="container-fluid p-5" style={{backgroundColor:'#DBDBDB'}}>
      <div className="container p-5">
        <h2 className='text-center'>MY Cart</h2>
      </div>
      <div>
        {cartArr.length > 0 ? null :
        <div>
        <h3>Ah!! No products Added To Cart....</h3>
        <p><i>Have Interest To Check our Products?</i><br />
        <i>If so Click the Below Button and visit products...</i></p>
        <Link to='/'><button className='btn rounded btn-secondary'>Products</button></Link>
        </div>
        }
      </div>
      <div className="container">
      <div className="container d-flex mt-3 flex-wrap justify-content-center column-gap-5">
        {products.map((product)=>(
          product.inCart ? 
            <div className="card mt-5 text-center" style={{backgroundColor:'#7D7D7D'}} key={product.id}>
              <div className="card-body">
                <img src={product.url} alt="image" style={{width:'200px',height:'250px',borderRadius:'10px'}}/>
                <h5 className='text-center mt-3'>
                  {product.product}
                </h5>
                <h6>
                  Price : ${product.price}
                </h6>
                <button className="btn rounded" style={{backgroundColor:'#DBDBDB'}} onClick={()=>handleRemoveFromCart(product.id)}>Remove From Cart</button> 
             </div>
          </div> : null
        ))}
        </div>
      </div>

      <div className='text-center mt-5'>
        {cartArr.length > 0 ? <button className='btn btn-primary rounded'>Proceed To CheckOut</button> : null}
      </div>
    </div>
    </>
  )
}

export default MyCart