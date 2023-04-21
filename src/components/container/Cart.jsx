import React, {useRef, useState, useContext } from 'react'
import { AiOutlineLeft, AiOutlineShopping } from "react-icons/ai"
import { HiX } from "react-icons/hi"
import { TiDeleteOutline } from "react-icons/ti"
import {Link} from "react-router-dom"
import toast from "react-hot-toast"

import { Context } from "./StateContext"

const Cart = () => {
    const cartRef = useRef()
    const { totalPrice, totalQuantities, cartItems, setShowCart, onRemove } = useContext(Context);
    
  return (
    <div className='' ref={cartRef}>
      <div className='font-bold flex items-center gap-5' onClick = {() => setShowCart(false)}>
        <HiX />
        <div>Your Cart</div>
        <div className='text-Teal'>({totalQuantities} items)</div>
      </div>

      {
        cartItems.length < 1 && (
          <div className=' mt-4 flex flex-col items-center gap-4'>
            <AiOutlineShopping size = {60} />
            <h3>Your Shopping Cart Is Empty</h3>
            <Link href = "/">
              <button type = "button" className='px-6 py-3 font-bold text-white bg-Teal rounded-xl mr-4 text-sm hover:text-Teal hover:bg-white border hover:border-Teal' onClick = {() => setShowCart(false)}>
                Continue Shopping
              </button>
            </Link>
          </div>
        )
      }

      <div className='mt-5'>
        {cartItems.length >= 1 && cartItems.map((item) => (
          <div className='flex items-center gap-4 ' key={item._id}>
            <img className='w-1/3 rounded-lg' src={item?.image} alt="" />
            <div className=' flex flex-col gap-1'>
              <div>{item.title}</div>
              <div className='font-bold'>{item.Level}L</div>
            </div>
            <div className='font-bold flex flex-col items-center gap-9'>
              <div>{item.price}</div>
              <TiDeleteOutline className='text-xl text-Teal' onClick={() => onRemove(item)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart