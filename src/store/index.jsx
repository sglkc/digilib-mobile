import { configureStore } from "@reduxjs/toolkit";
import ItemTypeReducer from "./ItemTypeReducer";
import UserReducer from "./UserReducer";
import ItemReducer from './ItemReducer';

export default configureStore({
  reducer: {
    itemType: ItemTypeReducer,
    user: UserReducer,
    item: ItemReducer,
  },
});
