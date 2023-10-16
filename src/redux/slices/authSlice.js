import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authslice',
  initialState: {
    user: null,
    idToken: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      AsyncStorage.setItem('userEmail', action.payload);
    },
    setIdToken: (state, action) => {
      state.idToken = action.payload;
      AsyncStorage.setItem('userToken', action.payload);
    },
    clearUser: (state) => {
      state.user = null;
      state.idToken = null;
      AsyncStorage.multiRemove(['userEmail', 'userToken']);
    },
  },
});

export const { setIdToken, setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
