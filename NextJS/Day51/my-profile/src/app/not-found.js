import React from 'react'
import Image from 'next/image'
import errorPage from "@/app/assets/image/404-error.jpg"
import "@/app/assets/error.css"
function Notfound() {
  return (
    <div className='imgError'>
      <Image className='img404' src={errorPage} />
      
    </div>
  )
}

export default Notfound