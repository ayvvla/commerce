import Products from '../Products.js'

export const initialState = {
  products : Products,
  cart : []
}

export const Reducer = (state, action) => {

  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart : [...state.cart , {...action.payload, qty: 1}]
      } 
    case "REMOVE_FROM_CART" :
      const newCart = state.cart.filter((c) => c.id !== action.payload.id)
      return {
        ...state,
        cart : newCart
      }  
    case "UPDATE_QTY" : 
      return {
        ...state,
        cart: state.cart.filter((c) => c.id === action.payload.id ? c.qty = action.payload.qty : c.qty)
      }
  
    default:
      return state
  }
}