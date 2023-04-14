import { createSlice } from '@reduxjs/toolkit';

export const counter = createSlice({
  name: 'cart',
  initialState: {
    showCart: false,
    cartItems: [],
    totalPrice: 0,
    totalQuantities: 6,
    qty: 1,
  },
  reducers: {
    setShowCart: (state, action) => {
      state.showCart = action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    setTotalQuantities: (state, action) => {
      state.totalQuantities = action.payload;
    },
    incQty: (state) => {
      state.qty += 1;
    },
    decQty: (state) => {
      state.qty -= 1;
    },
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const checkProductInCart = state.cartItems.find((item) => item._id === product._id);

      state.totalPrice += product.price * quantity;
      state.totalQuantities += quantity;

      if (checkProductInCart) {
        const updateCartItems = state.cartItems.map((cartProduct) => {
          if (cartProduct._id === product._id)
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            };
          return cartProduct;
        });
        state.cartItems = updateCartItems;
      } else {
        product.quantity = quantity;
        state.cartItems.push({ ...product });
      }
    },
    removeFromCart: (state, action) => {
      const { product } = action.payload;
      const foundProduct = state.cartItems.find((item) => item._id === product._id);
      const newCartItems2 = state.cartItems.filter((item) => item._id !== product._id);

      state.totalPrice -= foundProduct.price * foundProduct.quantity;
      state.totalQuantities -= foundProduct.quantity;
      state.cartItems = newCartItems2;
    },
    toggleCartItemQuantity: (state, action) => {
        const { id, value } = action.payload;
        const foundProduct = state.cartItems.find((item) => item._id === id);
        const index = state.cartItems.findIndex((product) => product._id === id);
  
        if (value === 'inc') {
          const newCartItems = [...state.cartItems];
          newCartItems[index] = { ...foundProduct, quantity: foundProduct.quantity + 1 };
          state.cartItems = newCartItems;
          state.totalPrice += foundProduct.price;
          state.totalQuantities += 1;
        } else if (value === 'dec') {
          if (foundProduct.quantity > 1) {
            const newCartItems = [...state.cartItems];
            newCartItems[index] = { ...foundProduct, quantity: foundProduct.quantity - 1 };
            state.cartItems = newCartItems;
            state.totalPrice -= foundProduct.price;
            state.totalQuantities -= 1;
          }
        }
      },
    },
  });
  
  export const { showCart, addToCart, setShowCart, setCartItems, setTotalPrice, totalQuantities, setTotalQuantities, toggleCartItemQuantity } = counter.actions;
  
  export default counter.reducer;
