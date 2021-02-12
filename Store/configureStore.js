import { createStore } from "redux";
import { ToggleFavoriteReducer } from "./Reducers/favoriteReducer";

export default createStore(ToggleFavoriteReducer);