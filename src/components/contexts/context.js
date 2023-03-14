import { createContext, useContext, useReducer } from 'react' 
import { initialState, Reducer } from "./reducer";

const Cart = createContext(initialState)

export const CartProvider = ({children}) => {

  const [state, dispatch] = useReducer(Reducer, initialState)

  const addToCart = (product) => {
    dispatch ({
      type : "ADD_TO_CART",
      payload : product
    })
  }

  const removeFromCart = (product) => {
    dispatch ({
      type : "REMOVE_FROM_CART",
      payload : product
    })
  }

  const updateQuantity = (e, product) => {
    dispatch({
      type: "UPDATE_QTY",
      payload : {
        id : product.id,
        qty : e.target.value
      }
    })
  }

  
  return <Cart.Provider value = {{state, addToCart , removeFromCart, updateQuantity}}>{children}</Cart.Provider>
}

export const CartContext = () => {
  return useContext(Cart)
}