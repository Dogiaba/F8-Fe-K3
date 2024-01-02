import React from 'react'
import Login from './Login'
import Product from './Product'
import { useState } from 'react'
import { useEffect } from 'react'
import { client } from '../config/client'

const Shop=()=> {
  const apiKey = JSON.parse(localStorage.getItem('apiKey'))
  const [isLogin, setLogin] = useState(false)

  useEffect(() => {
    if(apiKey) {
      setLogin(true)
    }
  }, [])

  client.setApiKey

  return (
    <div>
      {isLogin ? <Product/> : <Login setLogin={setLogin}/>}
    </div>
  )
}

export default Shop