import { configureStore } from "@reduxjs/toolkit";
import ItemFilterReducer from "./ItemFilterReducer";
import UserReducer from "./UserReducer";
import ItemReducer from './ItemReducer';

export default configureStore({
  reducer: {
    itemFilter: ItemFilterReducer,
    user: UserReducer,
    item: ItemReducer,
  },
});
