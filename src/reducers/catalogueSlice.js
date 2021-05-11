import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HTTP_STATUS } from '../app/constants';

export const fetchCatalogs = createAsyncThunk(
  'catalogue/fetchCatalogs', async () => {
    const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    return data.categories;
  },
);

export const fetchCatalog = createAsyncThunk(
  'catalogue/fetchCatalog', async (name) => {
    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
    return data;
  },
);
export const catalogueSlice = createSlice({
  name: 'catalogue',
  initialState: {
    catalogues: [],
    cataloguesLoading: null,

    catalogueLoading: null,
    catalogue: {},
    filter: 'ALL',
  },
  reducers: {
    CHANGE_FILTER: (state, action) => ({
      filter: action.payload,
      catalogues: state.catalogues,

    }),

  },
  /* eslint-disable no-param-reassign */
  extraReducers: {
    [fetchCatalogs.pending](state) {
      state.cataloguesLoading = HTTP_STATUS.PENDING;
    },
    [fetchCatalogs.fulfilled](state, action) {
      state.cataloguesLoading = HTTP_STATUS.FULLFILLED;
      state.catalogues = action.payload;
    },
    [fetchCatalogs.rejected](state) {
      state.cataloguesLoading = HTTP_STATUS.REJECTED;
    },
  },
});
/* eslint-enable no-param-reassign */
// Action creators are generated for each case reducer function
export const { CHANGE_FILTER } = catalogueSlice.actions;

export default catalogueSlice.reducer;
