import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { apiPost } from '../api'
import { setupListeners } from '@reduxjs/toolkit/dist/query/react'

const rootReducer = combineReducers({
    [apiPost.reducerPath]: apiPost.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiPost.middleware)
})


setupListeners(store.dispatch)