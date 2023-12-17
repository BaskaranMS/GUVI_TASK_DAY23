import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import About from './About'
import Product from './Product'
import MyCart from './MyCart'
import Login from './Login'
import { MyContext } from './MyContext'
import { myData } from './myData'
import Footer from './Footer'

function App() {

  const [ products, setProducts ] = useState(()=>{
    const storedProducts = localStorage.getItem('products')
    return storedProducts ? JSON.parse(storedProducts) : myData
  });
  const [ filteredProducts, setFilteredProducts ] = useState([])

  const [cartLength, setCartlength ] = useState(0)

  useEffect(()=>{
    localStorage.setItem('products', JSON.stringify(products))
  },[products, setProducts])

  return (
    <>
    <MyContext.Provider value={{ products, setProducts, filteredProducts, setFilteredProducts, cartLength, setCartlength}}>
    <Router>
    <Navigation></Navigation>
    <Routes>
        <Route exact path='/Product' element={<Home/>}></Route>
        <Route exact path='/About' element={<About/>}></Route>
        <Route exact path='/' element={<Product/>}></Route>
        <Route exact path='/MyCart' element={<MyCart/>}></Route>
        <Route exact path='/Login' element={<Login/>}></Route>
    </Routes>
    <Footer></Footer>
    </Router>
    </MyContext.Provider>
    </>
  )
}

export default App