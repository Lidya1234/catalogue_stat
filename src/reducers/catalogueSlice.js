import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, HTTP_STATUS} from '../app/constants';
import axios from 'axios'

 export const fetchCatalogs = createAsyncThunk(
   'catalogue/fetchCatalogs', async () =>{
     
    const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    console.log(data)
     return data.categories
   }
 )


 export const fetchCatalog = createAsyncThunk(
  'catalogue/fetchCatalog', async (name) =>{
    
   const { data } = await axios.get(`www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
   console.log(data)
    return data
  }
)
export const catalogueSlice = createSlice({
  name: 'catalogue',
  initialState: {
    catalogues: [],
    cataloguesLoading: null,
   
    catalogueLoading: null,
    catalogue: {},
    filter: 'ALL'
  },
  reducers: {
    CHANGE_FILTER: (state, action) => ({
      filter: action.payload,
      catalogues: state.catalogues

    }),
    // FILTERLIST: (state, action) => ({
    //   cataloguesLoading: false,
     
    //   catalogues: [...action.payload]
    // }),
    // FETCHDETAILS: (state ,action) => ({
    //   cataloguesLoading: true,
    //   catalogueLoading: false,
    //   catalogue: action.payload,
    // }),
 
  },

  extraReducers: {
    [fetchCatalogs.pending](state){
      console.log('try')
      state.cataloguesLoading =HTTP_STATUS.PENDING
      
      
    },
    [fetchCatalogs.fulfilled](state, action){
      state.cataloguesLoading =HTTP_STATUS.FULLFILLED
      state.catalogues = action.payload
    },
    [fetchCatalogs.rejected](state){
      state.cataloguesLoading =HTTP_STATUS.REJECTED

    },
    [fetchCatalog.pending](state){
      console.log('try')
      state.catalogueLoading =HTTP_STATUS.PENDING
     
      
    },
    [fetchCatalog.fulfilled](state, action){
      state.catalogueLoading =HTTP_STATUS.FULLFILLED
      state.catalogue = action.payload
    },
    [fetchCatalog.rejected](state){
      state.catalogueLoading =HTTP_STATUS.REJECTED

    },
    },
})

// Action creators are generated for each case reducer function
export const {  CHANGE_FILTER, FILTERLIST} = catalogueSlice.actions

export default catalogueSlice.reducer;
