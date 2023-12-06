import React from 'react'
import {client} from "../config/client"
import { config } from '../config/configs'
function Product() {
  return (
    <div>
        <h1>Welcome to Shop!</h1>
        <div className='product-cart'>
            <div className='item-card'>
                <img src='' alt='image'/>
                <h2 className='title-product'>Trang sức</h2>
                <div>
                    <span>$12121</span>
                    <button>Add to card</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product