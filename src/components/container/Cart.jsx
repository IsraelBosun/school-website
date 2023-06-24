import React, {useRef, useState, useContext } from 'react'
import { AiOutlineLeft, AiOutlineShopping } from "react-icons/ai"
import { HiX } from "react-icons/hi"
import { TiDeleteOutline } from "react-icons/ti"
import {Link} from "react-router-dom"
import toast from "react-hot-toast"

import { Context } from "./StateContext"

const Cart = () => {

  


    const cartRef = useRef()
    const { totalPrice, totalQuantities, cartItems, setShowCart, onRemove, getIsFormValid, clearForm, handleSubmit, firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber, error, setError } = useContext(Context);
    console.log(cartItems)
  return (
    <div className='' ref={cartRef}>
      <div className='font-bold flex items-center gap-5' onClick = {() => setShowCart(false)}>
        <HiX className = "text-xl text-Teal" />
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

      <div className='my-5'>
        {cartItems.length >= 1 && cartItems.map((item) => (
          <div className='my-5 flex items-center gap-4 ' key={item.id}>
            <img className='w-1/3 rounded-lg' src={item?.image} alt="" />
            <div className=' flex flex-col gap-1'>
              <div>{item.title}</div>
              <div className='font-bold'>{item.Level}L</div>
            </div>
            <div className='font-bold flex flex-col items-center gap-9'>
              <div>#{item.price}</div>
              <TiDeleteOutline className='text-xl text-Teal' onClick={() => onRemove(item)} />
            </div>
          </div>
        ))}
      </div>

      {cartItems.length >= 1 && (
          <div>
            <div className='text-sm my-2 text-center capitalize'>Fill the form below to complete payment</div>
            <form className='flex flex-col gap-4' onSubmit = {handleSubmit}>
              <fieldset >
                <div>
                  <label htmlFor="">First Name</label>
                  <input value={firstName} onChange = {(e) => {setFirstName(e.target.value);}} className='border-2 focus:border-Teal border-Teal outline-Teal bg-solitude rounded-md p-3' type="text" placeholder='First Name' />
                </div>
                <div>
                  <label htmlFor="">Last Name</label>
                  <input value={lastName} onChange={(e) => {setLastName(e.target.value);}} className='border-2 focus:border-Teal border-Teal outline-Teal bg-solitude rounded-md p-3' type="text" placeholder='Last Name' />
                </div>
                <div>
                  <label htmlFor="">Phone Number</label>
                  <input className='border-2 focus:border-Teal border-Teal outline-Teal bg-solitude rounded-md p-3' type="text" placeholder='Phone' />
                </div>
                <div>
                  <label htmlFor="">E-mail Address</label>
                  <input value={email} onChange={handleEmailChange} className='border-2 focus:border-Teal border-Teal outline-Teal bg-solitude rounded-md p-3' type="text" placeholder='E-mail' />
                  <p>{setError}</p>
                  {error && <p>{error}</p>}
                </div>

                <div className='mt-8 flex flex-col items-center gap-3'>
              <div className='flex gap-2'>
                <h3 className='text-2xl'>Total:</h3>
                <h3 className='text-2xl font-bold'>#{totalPrice}</h3>
              </div>
              <button type='submit' disabled ={!getIsFormValid()} className='mb-5 px-6 py-3 font-bold text-white bg-Teal rounded-xl mr-4 text-xl hover:text-Teal hover:bg-white border hover:border-Teal'>Pay With Paystack</button>
            </div>
              </fieldset>
            </form>
          </div>
                )}

    </div>
  )
}

export default Cart