import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isQuizSelected: false
};

const quizData = createSlice({
    name: 'quizData',
    initialState,
    reducers: {
        setData: (state, action)=>{
            state.isQuizSelected = action.payload.isQuizSelected;
            state.quizQuestions = action.payload.quizQuestions;
            state.title = action.payload.title;
        }
    }
});

export const {setData} = quizData.actions;

export default quizData.reducer;