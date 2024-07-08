import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      localStorage.setItem('cart', JSON.stringify(state));

    },
    removeProduct: (state, action) => {
      const { productId, size, color } = action.payload;

      const productIndex = state.products.findIndex(product => (
        product._id === productId && product.size === size && product.color === color
      ));

      if (productIndex !== -1) {
        state.quantity -= state.products[productIndex].quantity;
        state.total -= state.products[productIndex].price * state.products[productIndex].quantity;

        state.products.splice(productIndex, 1);
      }
      localStorage.setItem('cart', JSON.stringify(state));

    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
      localStorage.removeItem('cart');

    },
    setCart: (state, action) => {
      // Set the cart state based on the provided data
      const { products, quantity, total } = action.payload;
      state.products = products;
      state.quantity = quantity;
      state.total = total;
      // Update localStorage to persist cart data
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addProduct, removeProduct,clearCart,setCart,initialState } = cartSlice.actions;
export default cartSlice.reducer;

