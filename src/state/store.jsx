import { configureStore } from "@reduxjs/toolkit";
import MenuListReducer from "./reducers/MenuListReducer";
import UserReducer from "./reducers/UserReducer";
import ItemReducer from './reducers/ItemReducer';

export default configureStore({
  reducer: {
    menu: MenuListReducer,
    user: UserReducer,
    item: ItemReducer,
  },
});
