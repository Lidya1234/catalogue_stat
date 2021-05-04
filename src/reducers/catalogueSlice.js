import { createSlice } from '@reduxjs/toolkit'

export const catalogueSlice = createSlice({
  name: 'catalogue',
  initialState: {
    catalogues: [],
    cataloguesLoading: true,
   
    catalogueLoading: true,
    catalogue: {},
    filter: 'All'
  },
  reducers: {
    DISPLAYLIST: (state, action) => ({
      cataloguesLoading: false,
  
      catalogues: state.catalogues
    }),
    FILTERLIST: (state, action) => ({
      cataloguesLoading: false,
     
      catalogues: [...action.payload]
    }),
    FETCHDETAILS: (state ,action) => ({
      cataloguesLoading: true,
      catalogueLoading: false,
      catalogue: action.payload,
    }),
 
  },
})

// Action creators are generated for each case reducer function
export const {  DISPLAYLIST, FILTERLIST} = catalogueSlice.actions

export default catalogueSlice.reducer;
