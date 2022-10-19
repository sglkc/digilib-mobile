import { configureStore } from "@reduxjs/toolkit";
import MenuListReducer from "./MenuListReducer";
import UserReducer from "./UserReducer";
import ItemReducer from './ItemReducer';

export default configureStore({
  reducer: {
    menu: MenuListReducer,
    user: UserReducer,
    item: ItemReducer,
  },
});
