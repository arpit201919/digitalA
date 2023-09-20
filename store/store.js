import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {
    persistStore,
    persistReducer
} from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"
import thunk from 'redux-thunk'
import postListSlice from "./slice"

const reducers = combineReducers({
    postList: postListSlice
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV != 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)