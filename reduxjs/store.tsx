import {configureStore , createSlice} from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit"
import { signOut } from "next-auth/react"

const userSlice = createSlice({
    name : "MyUserSlice" ,
    initialState : {
        username : "",
        email : "",
        avatar : "",
    },
    reducers : {
        login : (state,action) => {
            if (action.payload && action.payload.username && action.payload.email && action.payload.avatar) {
            state.username = action.payload.username
            state.email = action.payload.email
            state.avatar = action.payload.avatar
            }
        },
        logout : (state) => {
            signOut()
            state.username = ''
            state.email = ''
            state.avatar = ''
        }
    }
})

const persistConfig = {
    key : "root",
    storage,
    version : 1,
}

const reducer = combineReducers({
    MyUserSlice : userSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig , reducer)

export const {login , logout} = userSlice.actions 

export const store = configureStore({reducer :  persistedReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false,
    })
})
