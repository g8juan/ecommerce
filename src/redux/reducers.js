import { combineReducers } from "redux";
import productsReducer from '../products/productsReducers'
import cartReducer from "../cart/reducerCart"
import usersReducer from "../users/usersReducer";
import categoriesReducer from "../categories/categoriesReducer"

export default combineReducers({
  users: usersReducer,
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer
});
