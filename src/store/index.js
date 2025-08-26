import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from './AppSlice';

export default configureStore({
  reducer: {appSlice},
})