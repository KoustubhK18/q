import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    email : "koustubh1@test.com",
    firstName : "Koustubh1",
    lastName : "Kulkarni",
    password : "123456789"
}, {
    email : "koustubh2@test.com",
    firstName : "Koustubh2",
    lastName : "Kulkarni",
    password : "123456789"
}];

const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action)=>{
            console.log(state, action);
            state.push(action.payload);
        }
    }
});

export const {addUser} = users.actions;

export default users.reducer;