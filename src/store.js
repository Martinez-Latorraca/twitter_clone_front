import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/auth/userSlice";



const store = configureStore({
  reducer: {
    user: userReducer,
  },
  // Agrega middlewares si es necesario
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export default store;
