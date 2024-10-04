// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Import your auth slice (you'll create this next)

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
