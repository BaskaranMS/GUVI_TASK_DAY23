import React, { useContext, useEffect } from 'react'
import { MyContext } from './MyContext'


function Product() {
  const { products, setProducts, filteredProducts, setFilteredProducts } = useContext(MyContext)

  useEffect(()=>{
    handleFilter(products)
  },[products])

  function handleFilter(value) {
    switch (value) {
      case 'cricket':
        setFilteredProducts(products.filter((product) => product.category == 'cricket'))
        break;
      case 'football':
        setFilteredProducts(products.filter((product) => product.category == 'football'))
        break;
      case 'shirts':
        setFilteredProducts(products.filter((product) => product.category == 'shirts'))
        break;
      case 'girlsWear':
        setFilteredProducts(products.filter((product) => product.category == 'girls-wear'))
        break;

      default:
        setFilteredProducts(products)
        break;
    }
  }

  // useEffect(()=>{
  //   console.log(products)
  // },[setProducts, products])

  const handleAddToCart = (id)=>{
    // console.log(id);
    setProducts((prev)=>prev.map((pro)=>
      pro.id === id ? { ...pro, inCart: !pro.inCart } : pro
    ))
  }

  const handleRemoveFromCart = (id)=>{
    // console.log(id)
    setProducts((pro)=>pro.map((product)=>(
      product.id == id ? { ...product, inCart: !product.inCart } : product
    )))
  }

  useEffect(()=>{
    setProducts(products)
  },[products,setProducts])
  
  return (
      <>
      <div className="container-fluid pb-5" style={{backgroundColor:'#DBDBDB', marginTop:'0'}}>
        <div className="container justify-content-between d-flex flex-wrap">
          <h3 className='mt-2'>Products</h3>
          <div>
          <h5 className='mt-2'>
            <label htmlFor="filter">
              Filter Products : 
            </label>
            <select name="filter" id="filter" onChange={(e)=>handleFilter(e.target.value)} className='mx-2'>
            <option value="all">All</option>
            <option value="football">Football</option>
            <option value="cricket">Cricket</option>
            <option value="girlsWear">Girls Wear</option>
            <option value="shirts">Shirts</option>
          </select>
          </h5>
          </div>
        </div>
        <div className="container d-flex mt-3 flex-wrap justify-content-center column-gap-5">
          {filteredProducts.map((product)=>(
            <div className="card mt-5 text-center" style={{backgroundColor:'#7D7D7D'}} key={product.id}>
              <div className="card-body">
                <img src={product.url} alt="image" style={{width:'200px', height:'250px', borderRadius:'10px'}}/>
                <h5 className='text-center mt-2'>
                  {product.product}
                </h5>
                <h6>
                  Price : ${product.price}
                </h6>
                {product.inCart ?<button className="btn rounded" style={{backgroundColor:'#DBDBDB'}} onClick={()=>handleRemoveFromCart(product.id)}>Remove From Cart</button> :
                <button className="btn rounded" style={{backgroundColor:'#DBDBDB'}} onClick={()=>handleAddToCart(product.id)}>Add To Cart</button>}
                {/* <button className="btn rounded" style={{backgroundColor:'#DBDBDB'}}>Add To Cart</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
  )
}

export default Product