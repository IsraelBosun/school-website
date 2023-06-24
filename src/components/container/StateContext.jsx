import React, { createContext, useContext, useState} from 'react'
import { toast } from "react-hot-toast"
// import { validateEmail } from '../../Data';

export const Context = createContext();

 const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setcartItems] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const [totalQuantities, settotalQuantities] = useState(0)
  const [qty, setqty] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("")

console.log(totalQuantities)
  let foundProduct;
  let index;

  // to add to cart
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id)

    settotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    settotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

    if(checkProductInCart) {
      const updateCartItems = cartItems.map((cartProduct) => {
        if(cartProduct.id === product.id)
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
    foundProduct = cartItems.find((item) => item.id === product.id)
    const newCartItems2 = cartItems.filter((item) => item.id !== product.id);

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



 const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

  // to validate form
  const getIsFormValid = () => {
    return (
      firstName && validateEmail(email)  
    )
  }

  // to clear form
  const clearForm = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setPhoneNumber()
  }

  // to submit 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Will Pay Now");
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (email && !emailRegex.test(email)){
      setError("Email must follow the correct format")
    } else {
      alert("form submitted with email", email)
    }
    clearForm();
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
      onAdd,
      toggleCartItemQuantity,
      onRemove,
      setcartItems,
      settotalPrice,
      settotalQuantities,
      getIsFormValid,
      clearForm,
      handleSubmit,
      firstName,
      setFirstName,
      lastName,
      setLastName,
      email,
      setEmail,
      phoneNumber, 
      setPhoneNumber,
      error,
      setError
    }}
    >
      {children}
    </Context.Provider>
  )
}

export default StateContext
// export const useStateContext = () => useContext(Context) 