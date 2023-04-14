import React, { createContext, useContext, useState} from 'react'
import { toast } from "react-hot-toast"

export const Context = createContext();

 const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setcartItems] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const [totalQuantities, settotalQuantities] = useState(0)
  const [qty, setqty] = useState(1);
console.log(totalQuantities)
  let foundProduct;
  let index;

  // to add to cart
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id)

    settotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    settotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

    if(checkProductInCart) {
      const updateCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id)
        return {
          ...cartProduct, quantity:cartProduct.quantity + quantity
        }
      })
      setcartItems(updateCartItems)
    } else {
      product.quantity = quantity
      setcartItems([ ...cartItems, { ...product }])
    }
      toast.success(`${qty} ${product.name} added to cart.`)
  };

  // to remove items from cart
  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id)
    const newCartItems2 = cartItems.filter((item) => item._id !== product._id);

    settotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    settotalQuantities(prevTotalQuantities => prevTotalQuantities -foundProduct.quantity);
    setcartItems(newCartItems2);
}

  // to increase and decrease cart
  const toggleCartItemQuantity = (id, value ) => {
    foundProduct = cartItems.find((item) => item._id === id)
    index = cartItems.findIndex((product) => product._id === id);

        const newCartItems2 = cartItems.filter((item) => item._id !== id)
    if(value === "inc") {
      let newCartItems = [ ...newCartItems2, { ... foundProduct, quantity: foundProduct.quantity + 1}]
      setcartItems(newCartItems);
      settotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      settotalQuantities (prevTotalQuantities => prevTotalQuantities + 1)
    } else if (value === "dec") {
        if (foundProduct.quantity > 1){
           let newCartItems = [ ...newCartItems2, { ... foundProduct, quantity: foundProduct.quantity - 1}]
            setcartItems(newCartItems);
            settotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
            settotalQuantities (prevTotalQuantities => prevTotalQuantities - 1)  
        }
       
    }
}

  return (
    <Context.Provider
    value = {{
      showCart,
      setShowCart,
      cartItems,
      totalPrice,
      totalQuantities,
      qty,
      incQty,
      decQty,
      onAdd,
      toggleCartItemQuantity,
      onRemove,
      setcartItems,
      settotalPrice,
      settotalQuantities
    }}
    >
      {children}
    </Context.Provider>
  )
}

export default StateContext
// export const useStateContext = () => useContext(Context) 