import {configureStore} from "@reduxjs/toolkit"

import usersReducer from "./users/usersSlice"
import pageStatusReducer from "./users/pageStatusSlice"

export const store = configureStore({
    reducer: {
        users: usersReducer,
        pageStatus: pageStatusReducer
    }
})