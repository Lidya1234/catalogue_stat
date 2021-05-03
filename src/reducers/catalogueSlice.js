import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
export const catalogueSlice = createSlice({
  name: 'catalogue',
  initialState: {
    value: 0,
  },
  reducers: {
    DISPLAYLIST: (state) => {
      axios.get('https://pokeapi.co/api/v2/')
       .then(response => {
          console.log(response.data)
          const { data } = response.data
          SetUserData(data)
      }).catch(error => {
          console.log(error);
      })
    },
    FILTERLIST: (state) => {
      state.value -= 1
    },
    FETCHDETAILS: (state) => {
      state.value -= 1
    },
 
  },
})

// Action creators are generated for each case reducer function
export const {  DISPLAYLIST, FILTERLIST} = catalogueSlice.actions

export default catalogueSlice.reducer;

function GetAllUSers() {
  axios.get('https://reqres.in/api/users?page=2')
       .then(response => {
          console.log(response.data)
          const { data } = response.data
          SetUserData(data)
      }).catch(error => {
          console.log(error);
      })
  }