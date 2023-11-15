import { createSlice } from '@reduxjs/toolkit';

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    data : {
      id: '',
      fullName: '',
      gender: 'Masculino',
      birthdate: '',
      email : '',
      cep : '',
      password: ''
    }
  },
  reducers: {
    addUser(state, action) {
      state.data = action.payload;
    },
    removeUser(state) {
      state.data = {};
    },
  },
});

export const { addUser, removeUser } = userDataSlice.actions;
export const userDataReducer = userDataSlice.reducer;
