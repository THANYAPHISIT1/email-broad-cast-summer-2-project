import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import broadcastReducer from './slices/broadcastSlice';
import customerReducer from './slices/customerSlice';
import templateReducer from './slices/templateSlice';
import adminReducer from './slices/adminSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    broadcast: broadcastReducer,
    customer: customerReducer,
    template: templateReducer,
    admin: adminReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});
