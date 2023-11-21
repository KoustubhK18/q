import {configureStore} from "@reduxjs/toolkit"

import usersReducer from "./users/usersSlice"
import pageStatusReducer from "./users/pageStatusSlice"
import quizDataReducer from "./quiz/quizDataSlice"

export const store = configureStore({
    reducer: {
        users: usersReducer,
        pageStatus: pageStatusReducer,
        quizData: quizDataReducer
    }
})