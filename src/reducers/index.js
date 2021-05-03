import { configureStore } from '@reduxjs/toolkit'
import catalogueReducer from './catalogueSlice'

export default configureStore({
    reducer: {
    catalog: catalogueReducer,
    },
})

