import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("login", async function ({login, password}) {
    return fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            username: login,
            password: password,
            // expiresInMins: 60, // optional
        })
    })
        .then(res => res.json())
})

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        user: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action)=> {
            state.user = action.payload
            localStorage.setItem("token", action.payload.token)
        })
    }

})

export default userSlice.reducer